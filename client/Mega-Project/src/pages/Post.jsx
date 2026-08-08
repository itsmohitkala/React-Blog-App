import React,{useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import configure from '../appwrite/Configure'
import { Container,PostForm} from '../components/index'
import { useParams } from 'react-router'


function Post() {

    const navigate=useNavigate()
    const userData= useSelector((state)=>(state.userData))
    const isAuthorized= posts ? posts.$id === userData.id : false
    const [posts,setPosts]= useState(null)
    const {slug}= useParams()

    useEffect(()=>{
        if(slug){
            configure.getPost().then((value)=>{
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
                configure.deleteFile(featuredImage)
            }
        })
    }
  return posts? (
    <div>

    <Container>
        <h1>{posts.title}</h1>
        <p>{posts.content}</p>
        <img src={configure.getFilePreview(featuredImage)} alt={posts.title} />

        {posts && isAuthorized(
            <div>
        <Container>
        <button onClick={handleDelete}>Delete Post</button>
        </Container>

        <Container>
            <button onClick={navigate(`/create-post/${posts.$id}`)}> Edit post</button>
        </Container>

            </div>
        )}

    </Container>

    </div>
  )
}

export default Post