import React from 'react'
import authService from '../appwrite/Auth'
import { Link,useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { logout } from '../store/authSlice'
import {Input} from './index'


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const {erros,setErrors} = React.useState("");

    const login= async(data)=>{
        console.log(data);
        setErrors('');
        try {
            const session = await authService.login(data)
            const userData= session? await authService.getUser(): dispatch(logout());
            if(userData){
                navigate("/");
            }
        } catch (error) {
            setErrors(error.message);
        }
    }
  return (
    <div>
       <Logo/>
         <h2>Login to your account</h2>
         <p>Do you have an account? Login here.</p>
         <Link to='/signup'>
         Sign Up
         </Link>
{error && <p className='color-red-200'> {error}</p>}


<form onSubmit={handleSubmit(login)}>
    <Input
    className="mb-4"
    type="email"
    placeholder="Enter your email"
    label="Email :"
    {...register("email",
         {required: true,
            validate: {
                matchPattern: (value)=> /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Please enter a valid email address"   
            }
    })}
    />

    <Input
    type="password"
    label="Password :"
    placeholder="Enter your password"
    {...register("password",{required: true,
    minLength: 6,
    validate: 
    {
        matchPattern: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value) || "Password must be at least 6 characters long and contain at least one letter and one number"
    }
    })}>
    
    </Input>
</form>

    </div>
  )
}

export default Login