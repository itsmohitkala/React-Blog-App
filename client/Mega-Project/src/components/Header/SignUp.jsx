import React from 'react'
import authService from '../../appwrite/Auth'
import { Link,useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { logout } from '../store/authSlice'
import Login from '../Login'
import {login,logout} from '../../store/authSlice'
import {Logo,Input } from '../index'


function SignUp() {
    const dispatch= useDispatch();
    const nagivate= useNavigate();
    const {register,handleSubmit} = useForm(); 
    const {errors,setErrors}= React.useState("");

    const createUser= async (data)=>{
console.log(data);
setErrors("");

try {
    const session= await authService.signUp(data)
    if(session){
        const userData= await authService.getUser(data);
       if(userData){
        dispatch()
        nagivate('/');
       }
    }
} catch (error) {
    setErrors(error.message)
}
    }
  return (
<div>
<Logo/>
<h1>Sign Up !!</h1>
{errors && <p className="bg-red-200">{errors}</p>}
<form onSubmit={handleSubmit(createUser)}>

<Input
label="Email :"
placeHolder="Enter your email"
type="email"
{...register("email",{
    required: true,
    validate: {
                matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Please enter a valid email address"   
            }
})}
/>

<Input
label="Password :"
type="password"
placeHolder="Enter your passcode"
{...register("password",{
    required:true,
    minLength: 6,
    validate: 
    {
        matchPattern: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value) || "Password must be at least 6 characters long and contain at least one letter and one number"
    }
})}
/>

</form>
</div>
  )
}

export default SignUp