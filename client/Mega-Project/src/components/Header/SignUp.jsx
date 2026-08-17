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
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-lg border border-[var(--color-border)] bg-white p-8 shadow-sm">
      <Logo />
      <h1 className="mt-4 text-xl font-bold text-[var(--color-ink)]">Sign Up !!</h1>
      {errors && <p className="mt-3 w-full rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{errors}</p>}
      <form onSubmit={handleSubmit(createUser)} className="mt-6 w-full space-y-4">
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

        <button type="submit" onClick={createUser} className="w-full rounded-md bg-[var(--color-brand)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-dark)]">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
