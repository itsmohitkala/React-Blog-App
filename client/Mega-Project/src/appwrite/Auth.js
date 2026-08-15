import React from "react";
import Config from "../config/Config";
import { Client,Account,ID} from 'appwrite'

class AuthService{
    Client= new Client();
    Account;
    constructor(){
        this.Client
        .setEndpoint(Config.AppwriteUrl)
        .setProject(Config.ProjectId)
        this.Account= new Account(this.Client);
    }
        async signUp({email,password}){
        try {
            const response= await this.Account.create(
                ID.unique(),
                 email,
                 password,
            );
            return response;
        } catch (error) {
            throw new Error(error);
        }
    }

async logIn(email,password){
        try {
            return await this.Account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw new Error(error);
        }
    }

    async logOut(){
        try{
            return  this.Account.deleteSessions();
        }catch(error){
            throw new Error(error);
        }
    }

    async getUser(){
        try{
            return await this.Account.get();
        } catch(error){
            console.log(error);
        }
      
        
    }

    
}

const authService= new AuthService();
export default authService;