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
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-sm">
          <h1 className="mb-3 text-2xl font-bold text-[var(--color-ink)]">{posts.title}</h1>
          <p className="mb-4 text-[var(--color-muted)]">{posts.content}</p>
          <img src={configure.getFilePreview(posts.featuredImage)} alt={posts.title} className="w-full rounded-md object-cover" />
        </div>
    </Container>
  )
}

export default Home