import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({

    query : {
        type : String,
        required : true,
        trim : true,        
    },
    title : {
        type : String,
        required : true,
        trim : true,        
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    answers : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Answer',
        }
    ],
    upvote : {
        type : Number,
        default : 0
    },
    downvote : {
        type : Number,
        default : 0
    }
}, {
    timestamps : true
})

export const Question = mongoose.model('Question',questionSchema)


