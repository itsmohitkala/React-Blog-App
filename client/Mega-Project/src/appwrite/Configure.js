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

    async getDocuments(){
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

    // File Code 

    async createFile(file){
        return await this.Bucket.createFile(
            Config.BucketId,
            ID.unique(),
            file

        )
    }

    async getFile(fileId){
        return await this.Bucket.getFile(
            Config.BucketId,
            fileId,
        )
    }

    async deleteFile(fileId){
        return await this.Bucket.deleteFile(
            Config.BucketId,
            fileId,
        )
    }

    async getFilePreview(fileId){
        return await this.Bucket.getFilePreview(
            Config.BucketId,
            fileId,
        )
    }

        async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }


}

const configure= new Configure();
export default configure;