import React,{ useEffect, useState } from 'react'
import configure from '../appwrite/Configure'
import { Navigate, useNavigate } from 'react-router'
import { PostCard, Container} from '../components'


function AllPosts() {

    const navigate= useNavigate()
    const [errors,setErrors] =useState([])
    const [posts,setPosts]= useState()

     useEffect(()=>{
       try {
         configure.getDocuments().then((post)=>{
            if(post){
                setPosts(post.documents)
            }
        })
       } catch (error) {
        setErrors(error.message)
       }
    },[navigate])
  return posts? (<div>
<Container>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {posts.map((post)=>{
        <PostCard
        {...post}
        />
    })}
    </div>
</Container>
  </div> )
  : <div className="flex flex-col items-center gap-4 py-16 text-center">
      <p className="text-[var(--color-muted)]">Pls Login</p>
      <button onClick={()=>{
        navigate('/login')
      }} className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--color-brand-dark)]">Login</button>
    </div>
  {errors && ( <p className="text-center text-sm text-red-600"> {errors}</p>)}
  
}

export default AllPosts