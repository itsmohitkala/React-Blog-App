import React,{useEffect, useState} from 'react'
import configure from '../appwrite/Configure'
import {Container,PostForm} from '../components/index'
import { useNavigate } from 'react-router'
import { useParams } from 'react-router'


function EditPost() {

    const [posts,setPosts]= useState([])
    const navigate=useNavigate
    const slug=useParams()
    c

    useEffect(()=>{
        if(slug){
            configure.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    },[slug,navigate])
  return posts? (
    <div>
        <PostForm>
            post={posts}
        </PostForm>
    </div>
  ) : (
    <div>
        <h1>Posts Doesn't Exists</h1>
        <p>Create Post! </p>
    </div>
  )
}

export default EditPost