import mongoose from 'mongoose'

const answerSchema = new mongoose.Schema({

    response : {
        type : String,
        required : true,
        trim : true,        
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    query :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Question',
        required : true,
    }
}, {
    timestamps : true
})

export const Answer = mongoose.model('Answer',answerSchema)