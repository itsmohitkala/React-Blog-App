import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux" 
import { useSelector } from 'react-redux'
import configure from '../appwrite/Configure'
import config from '../config/Config'
import {Input} from '../components/index'
import Select from '../components/Header/Select'
// import Button from '../components/Header/Button'



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

    const slugTransform= useCallback((value)=>{
      if(value && typeof value==='string'){
        const slug=value
        slug
        .toLowerCase()
        .trim()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
        
      }

      useEffect(()=>{
        const subscription= watch((value,{name})=>{
          if(name==='title'){
            setValue('slug',slugTransform(value.title))
          }
        })
      })

    })

  } 
  return (
    <form onSubmit={handleSubmit(submit)}>

    <Input 
    label="Enter title"
    {...register("title",{required:"title is required"})}
    />
    <Input 
    label='slug'
    {...register('slug',{required:"slug is required "})}
    onChange={(e)=>(setValue('slug',slugTransform(e.target.value)))}
    />
    <Input 
    label='featured image'
    {...register('featuredImage',{required:"featured image is requierd "})}
    accept= 'jpeg/jpg '
    />

 <button>{post? "update" : "Create Post"}</button>


    </form>
  )
}

export default PostForm