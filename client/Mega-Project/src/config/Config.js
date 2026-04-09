import React from "react";

class Config{

    AppwriteUrl= String(import.meta.env.VITE_AppwriteUrl);
    ProjectId= String(import.meta.env.VITE_ProjectId)
    DatabaseId= String(import.meta.env.VITE_DatabaseId)
    BucketId= String(import.meta.env.VITE_BucketId)
    CollectionId= String(import.meta.env.VITE_CollectionId)
}

const config= new Config();
export default config;