import React from "react";
import authService from "../../appwrite/Auth";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login, logout } from "../../store/authSlice";
import { Logo, Input } from "../index";

function SignUp() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  const { register, handleSubmit } = useForm();
  const  [errors, setErrors ] = React.useState("");

  const createUser = async (data) => {
    console.log(data);
    setErrors("");

    try {
      const session = await authService.signUp(data);
      const loggedIn= await authService.logIn(data)
      if (loggedIn) {
        const userData = await authService.getUser();
        if (userData) {
          dispatch(login(userData));
          nagivate("/");
        }
      }
    } catch (error) {
      setErrors(error.message);
    }
  };
  return (
    <div>
      <Logo />
      <h1>Sign Up !!</h1>
      {errors && <p className="bg-red-200">{errors}</p>}
      <form onSubmit={handleSubmit(createUser)}>
        <Input
          label="Name :"
          placeholder="Enter your name"
          type="text"
          {...register("name", {
            required: true,
          })}
        />

        <Input
          label="Email :"
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
          })}
        />

        <Input
          label="Password :"
          type="password"
          placeholder="Enter your passcode"
          {...register("password", {
            required: true,
          })}
        />

        <button type="submit" onClick={createUser}>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
