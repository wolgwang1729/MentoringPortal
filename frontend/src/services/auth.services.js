import axios from 'axios';
import {Api} from '../api/Api.js'

class AuthServices{

    constructor(){
        
        this.api = new Api(import.meta.env.VITE_BASEURL)
    }
    
    async register(data){
        try {

            const response = await this.api.post("/register",data)
            
            delete data.fullname
            await this.login(data)
            
            return response
            
        } catch (error) {
            console.log("Error registering user")
            throw error
        }
    }

    async login(data){
        try {
            
            const response = await this.api.post("/login", data)
            return response

        } catch (error) {
            console.log("Error logging in")
            throw error
        }
    }

    async getUser(){
        try {

            const response = await this.api.get("/get-user")
            return response
            
        } catch (error) {
            // if (error.response.data.statusCode == 401){
            //     await this.refreshTokens()
            //     await this.getUser()
            //     window.location.reload()
            // }
            throw error
        }
    }

    async logout(){
        try {
            
            const response = await this.api.get("/logout")
            return response

        } catch (error) {
            console.log("Error on logout")
            throw error
        }
    }

}

export const Authorize = new AuthServices() 