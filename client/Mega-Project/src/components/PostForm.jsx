import React from 'react'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/Auth'

function PostForm() {
    const {register,handleSubmit} = useForm();
  return (
    <div>PostForm</div>
  )
}

export default PostForm