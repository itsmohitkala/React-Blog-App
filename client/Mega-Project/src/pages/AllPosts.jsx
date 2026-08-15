import React,{ useEffect, useState } from 'react'
import configure from '../appwrite/Configure'
import { Navigate, useNavigate } from 'react-router'
import { PostCard } from '../components'


function AllPosts() {

    const navigate= useNavigate()
    const [errors,setErrors] =useState('')
    const [posts,setPosts]= useState()

     useEffect(()=>{
       try {
         configure.getDocuments().then((post)=>{
            if(post){
                setPosts(post)
            }
        })
       } catch (error) {
        setErrors(error.message)
       }
    },[navigate])
  return posts? <div>
<Container>
    {posts.map((post)=>{
        <PostCard 
        {...post}
        />
    })}
</Container>
  </div> 
  : <div>Pls Login <button onClick={navigate('/login')}>Login</button> </div>
  {errors && ( <p> {errors}</p>)}
  
}

export default AllPosts