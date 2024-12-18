import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {ApiResponse} from '../utils/ApiResponse.js'
import {User, Question, Answer} from '../models/index.js'
import {deleteFromCloudinary, uploadOnCloudinary} from '../utils/cloudinary.js'
import fs from 'fs'
import jwt from 'jsonwebtoken'



const registerUser = asyncHandler(async(req, res)=>{

    const {fullname, email, password, desig} = req.body

    if (
        [fullname, email, desig, password].some(field=> field===undefined)
    ){
        throw new ApiError(400, "All fields are required")
    }

    if (
        [fullname, email,password, desig].some(field=> field.trim()==="")
    ){
        throw new ApiError(400, "Some fields are empty")
    }

    const user = await User.findOne({
        email
    })

    if (user){
        throw new ApiError(409,"user already exists")
    }

    const _user = await User.create({
        fullname,
        password,
        email,
        type : desig
    })

    const registeredUser = await User.findById(_user._id).select(
        "-password"
    )

    res.status(200)
    .json(
        new ApiResponse(200,registeredUser,"User created successfully")
    )

})

const loginUser = asyncHandler(async(req, res)=>{

    const {email,password} = req.body

    if (
        [email, password].some(field=>field===undefined)
    ){
        throw new ApiError(400,"All fields are required")
    }

    if (
        [email, password].some(field=>field.trim()==="")
    ){
        throw new ApiError(400,"one or both field sent is empty")
    }

    const user = await User.findOne({
        email
    })

    if (!user){
        throw new ApiError(404,"user not found")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if (!isPasswordCorrect){
        throw new ApiError(400, "password is wrong")
    }

    const accessToken = user.generateAccessToken();

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        // domain: 'react-blog-project.onrender.com',
        // path: '/',
    };

    user["password"] = "";

    res.status(200)
    .cookie("accessToken",accessToken, options)
    .json(
        new ApiResponse(200,user,"loggedIn successfully")
    )

})

const logoutUser = asyncHandler(async(req, res)=>{

    const options = {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        // domain: 'react-blog-project.onrender.com',
        // path: '/',
      };

    res.status(200)
    .clearCookie("accessToken",options)
    .json(
        new ApiResponse(200,{},"user loged out succssfully")
    )

})

const getUser = asyncHandler(async(req, res)=>{

    const user = req.user;

    if (!user){
        throw new ApiError(404,"user not found")        
    }

    res.status(200)
    .json(
        new ApiResponse(200,user,"User sent successfully")
    )

})

const postQuestion = asyncHandler(async(req, res)=>{
    const user = req.user;

    const {query, title} = req.body;

    if (!query && !title){
        throw new ApiError(400,"All fields arerequired");
    }

    const question = await Question.create({
        query,
        owner : user._id,
        title
    });

    if (!question){
        throw new ApiError(500,"could not create question");
    }

    const userUpdated = await User.findByIdAndUpdate(
        user._id,
        {
            $push : {
                questions : question._id
            }
        },
        {
            new : true
        }
    )

    if (!userUpdated){
        throw new ApiError(500,"could not update user");
    }

    const populatedQues = await Question.aggregate([
        {
            $match : {
                _id : question._id
            }
        },
        {
            $lookup : {
                from : "users",
                localField : "owner",
                foreignField : "_id",
                as : "owner",
                pipeline : [
                    {
                        $project : {
                            fullname : 1,
                            email : 1,
                            _id : 1
                        }
                    }
                ]
            }
        },
        {
            $addFields : {
                owner : {
                    $first : "$owner"
                }
            }
        },
        {
            $project : {
                query : 1,
                title : 1,
                owner : 1,             
                _id : 1,
                answers : 1
            }
        }
    ]) 

    if (!populatedQues){
        throw new ApiError(500,"could not populate question");
    }

    res.status(200)
    .json(
        new ApiResponse(200,populatedQues[0],"Question posted successfully")
    )
})

const viewAllQuestions = asyncHandler(async(req, res)=>{
    
    const allQuestions = await Question.aggregate([
        {
            $lookup : {
                from : "users",
                localField : "owner",
                foreignField : "_id",
                as : "owner",
                pipeline : [
                    {
                        $project : {
                            fullname : 1,
                            email : 1,
                            _id : 1
                        }
                    }
                ]
            }
        },
        {
            $addFields : {
                owner : {
                    $first : "$owner"
                }
            }
        },
        {
            $lookup : {
                from : "answers",
                localField : "answers",
                foreignField : "_id",
                as : "answers",
                pipeline : [
                    {
                        $lookup : {
                            from : "users",
                            localField : "owner",
                            foreignField : "_id",
                            as : "owner",
                            pipeline : [
                                {
                                    $project : {
                                        fullname : 1,
                                        email : 1,
                                        _id : 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields : {
                            owner : {
                                $first : "$owner"
                            }
                        }
                    },
                    {
                        $project : {
                            response : 1,
                            owner : 1,
                            _id : 1
                        }
                    }
                ]
            }
        },
        {
            $project : {
                answers : 1,
                owner : 1,
                title : 1,
                query : 1,
                _id : 1
            }
        }   
    ])
    if (allQuestions.length === 0){
        throw new ApiError(404,"No questions found")
    }

    res.status(200)
    .json(
        new ApiResponse(200,{
            data : allQuestions
        },"Questions sent successfully")
    )
})

const viewMyQuestions = asyncHandler(async(req, res)=>{
    
    const myQuestions = await Question.aggregate([
        {
            $match : {
                owner : req.user._id
            }
        },
        {
            $lookup : {
                from : "users",
                localField : "owner",
                foreignField : "_id",
                as : "owner",
                pipeline : [
                    {
                        $project : {
                            fullname : 1,
                            email : 1,
                            _id : 1
                        }
                    }
                ]
            }
        },
        {
            $addFields : {
                owner : {
                    $first : "$owner"
                }
            }
        },
        {
            $lookup : {
                from : "answers",
                localField : "answers",
                foreignField : "_id",
                as : "answers",
                pipeline : [
                    {
                        $lookup : {
                            from : "users",
                            localField : "owner",
                            foreignField : "_id",
                            as : "owner",
                            pipeline : [
                                {
                                    $project : {
                                        fullname : 1,
                                        email : 1,
                                        _id : 1
                                    }
                                }
                            ]
                        }
                    },
                    {
                        $addFields : {
                            owner : {
                                $first : "$owner"
                            }
                        }
                    },
                    {
                        $project : {
                            response : 1,
                            owner : 1,
                            _id : 1
                        }
                    }
                ]
            }
        },
        {
            $project : {
                answers : 1,
                owner : 1,
                title : 1,
                query : 1,
                _id : 1
            }
        }   
    ])


    res.status(200)
    .json(
        new ApiResponse(200,{
            data : myQuestions
        },"Questions sent successfully")
    )
})

const deleteQuestion = asyncHandler(async(req, res)=>{

    const {id} = req.body;

    if (!id){
        throw new ApiError(400,"Question id is required")
    }

    const question = await Question.findById(id);

    if (!question){
        throw new ApiError(404,"Question not found")
    }

    if (question.owner.toString() !== req.user._id.toString()){
        throw new ApiError(403,"You are not allowed to delete this question")
    }

    const deleted = await Question.findByIdAndDelete(id)

    await Answer.deleteMany({_id : {$in : question.answers}})

    if (!deleted){
        throw new ApiError(500,"could not delete question")
    }

    res.status(200)
    .json(
        new ApiResponse(200,{},"Question deleted successfully")
    )
    

})

const deleteAnswer = asyncHandler(async(req, res)=>{

    const {id} = req.body;

    if (!id){
        throw new ApiError(400,"Answer id is required")
    }

    const answer = await Answer.findById(id);

    if (!answer){
        throw new ApiError(404,"Answer not found")
    }

    const deleted = await Answer.findByIdAndDelete(id)

    if (!deleted){
        throw new ApiError(500,"could not delete answer")
    }

    await Question.findByIdAndUpdate(
        answer.query,
        {
            $pull : {
                answers : answer._id
            }
        }
    )

    res.status(200)
    .json(
        new ApiResponse(200,{},"Answer deleted successfully")
    )
    
})

const vote = asyncHandler(async(req, res)=>{

    const {id, vote} = req.body;
    //vote is an object

    if (!id){
        throw new ApiError(400,"Question id is required")
    }

    const question = await Question.findById(id);

    if (!question){
        throw new ApiError(404,"Question not found")
    }

    if (req.user._id.toString() === question.owner.toString()){
        throw new ApiError(403,"You are not allowed to vote on your own question")
    }

    await Question.findByIdAndUpdate(
        id,
        {
            $set : vote
        }
    )

    res.status(200)
    .json(
        new ApiResponse(200,{},"Question voted successfully")
    )
})

const respond = asyncHandler(async(req, res)=>{

    const {id, answer} = req.body;

    if (!answer){
        throw new ApiError(400,"Answer is required")
    }

    if (!id){
        throw new ApiError(400,"Question id is required")
    }

    const question = await Question.findById(id);

    if (!question){
        throw new ApiError(404,"Question not found")        
    }


    const answerObj = await Answer.create({
        owner : req.user._id,
        query : id,
        response : answer
    })

    if (!answerObj){
        throw new ApiError(500,"could not create answer")
    }

    await Question.findByIdAndUpdate(
        id,
        {
            $push : {
                answers : answerObj._id
            }
        }
    )

    const answerToBeSent = await Answer.aggregate([
        {
            $match : {
                _id : answerObj._id
            }
        },
        {
            $lookup : {
                from : "users",
                localField : "owner",
                foreignField : "_id",
                as : "owner",
                pipeline : [
                    {
                        $project : {
                            fullname : 1,
                            email : 1,
                            _id : 1
                        }
                }]
            }    
        },
        {
            $addFields : {
                owner : {
                    $first : "$owner"
                }
            }
        },
        {
            $project : {
                owner : 1,
                response : 1,
                _id : 1
            }
        }
        
    ]) 


    res.status(200)
    .json(
        new ApiResponse(200,answerToBeSent[0],"Question responded successfully")
    )
})
export{
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    postQuestion,
    viewAllQuestions,
    viewMyQuestions,
    deleteQuestion,
    deleteAnswer,
    vote,
    respond
}



