import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import {login,logout} from '../../store/authSlice'

function LogoutBtn() {

    const dispatch= useDispatch()
   function logoutservice(){
    authService.logOut()
    .then(()=>{
        dispatch(logout())
    })

   }
  return (
    <button onClick={logoutservice} className='bg-black-200 '>Logout</button>
  )
}

export default LogoutBtn