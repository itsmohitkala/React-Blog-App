import React from "react";
import config from "../config/Config";
import {Client,Account,Databases,Query,ID,Storage} from 'appwrite'

class Configure{
        Client = new Client();
        Databases;
        Bucket;
        
    constructor(){

        this.Client
        .setEndpoint(config.AppwriteUrl)
        .setProject(config.ProjectId)
        this.Databases= new Databases(this.Client);
        this.Bucket= new Storage(this.Client);
    }
    async createDocument({slug,title,content,featuredImage,status, userId}){
        return await this.Databases.createDocument({
            databaseId:config.DatabaseId,
            collectionId:config.CollectionId,
            documentId:ID.unique(),
            userId:userId,
            data:{title,content,featuredImage,status},
        });
    }

    async getPost({slug}) {
    return await this.Databases.getDocument({
        databaseId: config.DatabaseId,
        collectionId: config.CollectionId,
        documentId: slug,
    });
}

    async getDocuments(){
        try{
            return await this.Databases.listDocuments(
                config.DatabaseId,
                config.CollectionId,
                
            )
        }catch(error){
            console.log("Appwrite :: Error fetching documents",error);
        }
    }

    async updateDocument(slug,{title,content,featuredImage,status,userId}){
        try {
            return await this.Databases.updateDocument(
                config.DatabaseId,
                config.CollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId:userId
                }

            )
        } catch (error) {
            console.log("Appwrite :: Error updating document",error);
        }
    }

    async deleteDocuments(slug){
        return await this.Databases.deleteDocument(
            config.DatabaseId,
            config.CollectionId,
            slug,
        )
    }

    // File Code 

    async createFile(file){
        return await this.Bucket.createFile(
            config.BucketId,
            ID.unique(),
            file

        )
    }

    async getFile(fileId){
        return await this.Bucket.getFile(
            config.BucketId,
            fileId,
        )
    }

    async deleteFile(fileId){
        return await this.Bucket.deleteFile(
            config.BucketId,
            fileId,
        )
    }

    getFilePreview(fileId){
        return this.Bucket.getFilePreview(
            config.BucketId,
            fileId,
        )
    }

        async uploadFile(file){
        try {
            return await this.Bucket.createFile(
                config.BucketId,
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