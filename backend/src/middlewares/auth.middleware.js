import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import jwt from 'jsonwebtoken'
import {User} from '../models/user.model.js'


export const isLoggedIn = asyncHandler(async (req, res, next)=>{

    try {
        
        const accessToken = req.cookies?.accessToken || req.header('Authorization')?.replace("Bearer ","")

        if (!accessToken){
            throw new ApiError(401,"Token Not Received")
        }

        const decodedData = jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET)
        
        if (!decodedData){
            throw new ApiError(401, 'Token is not correct')
        }

        const user = await User.findById(decodedData._id).select(
            "-password"
        )
        if (!user){
            throw new ApiError(401,'Invalid Access Token')
        }

        req.user = user
        next()

    } catch (error) {
        throw error
    }

})