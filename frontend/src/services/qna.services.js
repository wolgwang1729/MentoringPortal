import axios from 'axios';
import {Api} from '../api/Api.js'

class QnaServices{

    constructor(){
        
        this.api = new Api(import.meta.env.VITE_BASEURL)
    }
    
    async allQuestions(){
        try {

            const response = await this.api.get("/view-all-questions")            
            return response
            
        } catch (error) {
            console.log("Error getting all questions")
            throw error
        }
    }

    async myQuestions(){
        try {

            const response = await this.api.get("/view-my-questions")            
            return response
            
        } catch (error) {
            console.log("Error getting my questions")
            throw error
        }
    }

    async postQuestion(data){
        try {
            
            const response = await this.api.post("/post-question", data)
            return response

        } catch (error) {
            console.log("Error posting question")
            throw error
        }
    }

    async deleteQuestion(data){
        try {
            
            const response = await this.api.post("/delete-question", data)
            return response

        } catch (error) {
            console.log("Error deleting question")
            throw error
        }
    }

    async deleteAnswer(data){
        try {
            
            const response = await this.api.post("/delete-answer", data)
            return response

        } catch (error) {
            console.log("Error deleting answer")
            throw error
        }
    }
    async respond(data){
        try {
            
            const response = await this.api.post("/respond", data)
            return response

        } catch (error) {
            console.log("Error responding to question")
            throw error
        }
    }

    
}

export const Qna = new QnaServices();