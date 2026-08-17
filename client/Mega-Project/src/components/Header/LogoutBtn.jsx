import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/Auth";
import { logout } from "../../store/authSlice";



function LogoutBtn() {

    const dispatch= useDispatch();
    function logoutService(){
        authService.logOut()
        .then(dispatch(logout()))
        .catch((error)=>{
            console.log(error);
        })
    }
  return (
    <button
      onClick={logoutService}
      className="rounded-md border border-[var(--color-border)] px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-gray-100"
    >
      Logout
    </button>
  )
}

export default LogoutBtn