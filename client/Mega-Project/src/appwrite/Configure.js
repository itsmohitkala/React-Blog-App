import React from "react";
import Config from "../config/Config";
import {Client,Account,Databases,Query,ID} from 'appwrite'

class Configure{
        Client = new Client();
        Databases;
        Bucket;
        
    constructor(){

        this.Client
        .setEndpoint(Config.AppwriteUrl)
        .setProject(Config.ProjectId)
        this.Databases= new Databases(this.Client);
        this.Bucket= new Storage(this.Client);
    }

    async createDocument({title,slug,content,featuredImage,status}){
        try{
            return await this.Databases.createDocument(
                Config.DatabaseId,
                Config.CollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        }catch(error){
            console.log("Appwrite :: Error creating document",error);
        }
    }

    async getDocuments(Query= Query.equal("status","active")){
        try{
            return await this.Databases.listDocuments(
                Config.DatabaseId,
                Config.CollectionId,
                Query,
            )
        }catch(error){
            console.log("Appwrite :: Error fetching documents",error);
        }
    }

    async updateDocument(slug,{title,content,featuredImage,status}){
        try {
            return await this.Databases.updateDocument(
                Config.DatabaseId,
                Config.CollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
        } catch (error) {
            console.log("Appwrite :: Error updating document",error);
        }
    }

    async deleteDocuments(slug){
        return await this.Databases.deleteDocument(
            Config.DatabaseId,
            Config.CollectionId,
            slug,
        )
    }

}

const configure= new Configure();
export default configure;