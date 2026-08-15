import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Navigate } from 'react-router'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/Auth'
import configure from '../appwrite/Configure'
import { Container } from '../components'


function Home() {

   const [posts,setPosts] = useState("")

   useEffect(()=>{
    try {
        configure.getDocuments().then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    } catch (error) {
        console.log(error);
        
    }
   },[])
  return (
    <Container>
        <h1>{posts.title}</h1>
        <p>{posts.content}</p>
        <img src={configure.getFilePreview(posts.featuredImage)} alt={posts.title} />
    </Container>
  )
}

export default Home