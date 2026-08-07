import React from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux" 
import { useSelector } from 'react-redux'
import configure from '../appwrite/Configure'
import config from '../config/Config'



function PostForm({post}) {

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const userData=useSelector((state)=>state.userData)

  const {register,handleSubmit,watch,getValues,setValue} = useForm({
    defaultValues:{
      title: 'default title'
    }
  })

  const submit= async(data)=>{

    if(post){
      const file= data.image[0]? await configure.uploadFile(data.image[0]) : null

    if(file){
      await configure.deleteFile(post.featuredImage)
    }

        const dbPost= await configure.updateDocument(file.$id,{
      ...data,
      featuredImage= file? file.$id : post.featuredImage

    })
    if(dbPost){
      navigate(`/posts/${featuredImage}`)
    }

    }else{

      const file= await configure.uploadFile(data.image[0])
      const dbPost=  configure.createDocument({
        ...data,
        userData,
      })
    }





  } 
  return (
    <div>PostForm</div>
  )
}

export default PostForm