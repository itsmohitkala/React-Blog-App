import React from "react";
import authService from "../appwrite/Auth";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login, logout } from "../store/authSlice";
import { Input, Logo } from "./index";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errors, setErrors] = React.useState("");

  const loginhandler = async (data) => {
    console.log(data);
    setErrors("");
    try {
      const session = await authService.logIn(data);
      if (session) {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
        }
      } else {
        dispatch(logout());
      }
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <div>
      <Logo />
      <h2>Login to your account</h2>
      <p>Do you have an account? Login here.</p>
      <Link to="/signup">Sign Up</Link>
      {errors && <p className="color-red-200"> {errors}</p>}

      <form onSubmit={handleSubmit(loginhandler)}>
        <Input
          className="mb-4"
          type="email"
          placeholder="Enter your email"
          label="Email :"
          {...register("email", { required: true })}
        />

        <Input
          type="password"
          label="Password :"
          placeholder="Enter your password"
          {...register("password", { required: true })}
        />

        <button type="submit">Sign inn</button>
      </form>
    </div>
  );
}

export default Login;
