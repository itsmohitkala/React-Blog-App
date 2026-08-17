import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import configure from '../appwrite/Configure'
import { Container,PostForm} from '../components/index'
import { useParams } from 'react-router'
import {PostCard} from '../components/index'


function Post() {

    const navigate=useNavigate()
    const userData= useSelector((state)=>(state.auth.userData))
    const [posts,setPosts]= useState(null)
    const isAuthorized= posts && userData ? posts.userId === userData.$id : false
    const {slug}= useParams()
    
    

    useEffect(()=>{
        if(slug){
            configure.getPost({slug}).then((value)=>{
                setPosts(value)
            })
        }
        else{
            navigate('/')
        }
    },[navigate])

    const handleDelete= ()=>{
        configure.deleteDocuments(posts.id).then((value)=>{
            if(value){
                configure.deleteFile(posts.featuredImage)
            }
        })
    }
    


  return posts? (
    <div>

    <Container>
        <div className="mx-auto max-w-3xl rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-sm">
        <h1 className="mb-3 text-2xl font-bold text-[var(--color-ink)]">{posts.title}</h1>
        <p className="mb-4 text-[var(--color-muted)]">{posts.content}</p>
        <img src={configure.getFilePreview(posts.featuredImage)} alt={posts.title} className="w-full rounded-md object-cover" />



        {isAuthorized && (
            <div className="mt-4 flex gap-3">
        <Container>
        <button onClick={handleDelete} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">Delete Post</button>
        </Container>

        <Container>
            <button onClick={()=>(navigate(`/post/${posts.$id}`))} className="rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-gray-100"> Edit post</button>
        </Container>

            </div>
        )}
        </div>

    </Container>

    </div>
  ) : (
    <div className="py-16 text-center">
        <h3 className="text-lg font-medium text-[var(--color-muted)]">Login to read posts </h3>
    </div>
  )
}

export default Post