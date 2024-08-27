import { Input } from "@material-tailwind/react";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Loader from "./loader";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { apiLogIn } from "../../services/auth";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    if (user) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userName", user.userName || "Guest");
    } else {
      console.error("User object is undefined");
    }
  };

  const onSubmit = async (data) => {
    console.log(data)
    setIsSubmitting(true);

    try {
      const res = await apiLogIn({
        userName: data.username, 
        password: data.password,
      });
      console.log(res.data);

      addToLocalStorage(res.data.accessToken, res.data.user);

      toast.success(res.data.message);
      toast.success("Login successful!");

      setTimeout(() => {
        navigate("/mainPage");
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error("An error occured!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[50rem] md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"></p>

            <div className="relative">
              <label className="block mb-2 text-medium font-medium text-gray-900">
                Your username
              </label>
            <input
              placeholder="LizaCaro"
              type="text"
              id="username"
              className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500">{errors.username.message}</p>
            )}
          </div>
          <div className="mb-6 relative">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="••••••••"
              id="password"
              className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {passwordVisible ? <Eye /> : <EyeOff />}
            </button>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn flex items-center justify-center"
            >
              {isSubmitting ? <Loader /> : "LOG IN"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
