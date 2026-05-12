import React from 'react'
import authService from '../appwrite/Auth'
import { Link,useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'
import { logout } from '../store/authSlice'


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();
    const {erros,setErrors} = React.useState("");

    const login= async(data)=>{
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
    <div>Login</div>
  )
}

export default Login