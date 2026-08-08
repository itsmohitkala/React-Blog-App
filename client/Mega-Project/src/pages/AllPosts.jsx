import React,{ useEffect, useState } from 'react'
import configure from '../appwrite/Configure'
import { Navigate, useNavigate } from 'react-router'
import { PostCard } from '../components'


function AllPosts() {

    const navigate= useNavigate()
    const [posts,setPosts]= useState()

     useEffect(()=>{
        configure.getDocuments().then((post)=>{
            if(post){
                setPosts(post)
            }
        })
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
}

export default AllPosts