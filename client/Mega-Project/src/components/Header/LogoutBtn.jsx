import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth";
import { logout } from "../../store/authSlice";



function LogoutBtn() {

    const dispatch= useDispatch();
    function logoutService(){
        authService.logout()
        .then(dispatch(logout))
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <button onClick={logoutService}>Logout</button>
  )
}

export default LogoutBtn