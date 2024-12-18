import mongoose from "mongoose"
import { DbName } from "../constants.js"

export const connectdb = async ()=>{
    try {
        
        const mongooseConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DbName}`)
        console.log("MongoDb Connection Success !!!")

    } catch (error) {
        throw error
        // process.exit(1)
    }
}