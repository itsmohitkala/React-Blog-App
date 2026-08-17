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
    <div className="mx-auto flex w-full max-w-md flex-col items-center rounded-lg border border-[var(--color-border)] bg-white p-8 shadow-sm">
      <Logo />
      <h2 className="mt-4 text-xl font-bold text-[var(--color-ink)]">Login to your account</h2>
      <p className="mt-2 text-sm text-[var(--color-muted)]">
        Do you have an account? <Link to="/signup" className="font-medium text-[var(--color-brand)] hover:underline">Sign Up</Link>
      </p>
      {errors && <p className="mt-3 w-full rounded-md bg-red-50 px-3 py-2 text-sm text-red-600"> {errors}</p>}

      <form onSubmit={handleSubmit(loginhandler)} className="mt-6 w-full space-y-4">
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

        <button type="submit" className="w-full rounded-md bg-[var(--color-brand)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-brand-dark)]">Sign inn</button>
      </form>
    </div>
  );
}

export default Login;
