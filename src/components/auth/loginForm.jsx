import { Input } from "@material-tailwind/react";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import AuthButtons from "../buttons";
import { toast } from "react-toastify";
import Loader from "./loader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiLogIn } from "../../services/auth";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate(); // Import useNavigate hook

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    if (user) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", user.userName || "Guest"); // Default to "Guest" if userName is undefined
    } else {
      console.error("User object is undefined");
    }
  };
  

  const onSubmit = async (data) => {
    setIsSubmitting(true);
  
    try {
      const res = await apiLogIn({
        userName: data.userName,
        password: data.password,
      });
  
      console.log("Response:", res.data);
  
      // Check if res.data.user exists before trying to add to local storage
      if (res.data && res.data.user) {
        addToLocalStorage(res.data.accessToken, res.data.user);
      } else {
        toast.error("Login failed. User information is missing.");
      }
  
      toast.success(res.data.message);
      navigate("/signup-option");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <Input
          placeholder="username"
          type="text"
          id="username"
          className="h-14 w-[21rem] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-4"
          {...register("userName", { required: "username is required" })}
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <Input
          type={passwordVisible ? "text" : "password"}
          placeholder="password"
          id="password"
          className="h-14 w-[21rem] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-4"
          {...register("password", { required: "password is required" })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute left-64 transform -translate-y-9"
        >
          {passwordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <button type="submit" className="flex items-center justify-center w-full">
        {isSubmitting ? <Loader /> : <AuthButtons text="LOG IN" />}
      </button>
    </form>
  );
};

export default LoginForm;
