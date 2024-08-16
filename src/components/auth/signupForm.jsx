import { Input } from "@material-tailwind/react";
import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import AuthButtons from "../buttons";
import Loader from "./loader";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import {
  apiSignUp,
  apiCheckUsernameExists,
  apiCheckEmailExists,
} from "../../services/auth";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const [isEmailLoading, setIsEmailLoading] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(false);
  const [emailNotAvailable, setEmailNotAvailable] = useState(false);
  const navigate = useNavigate();

  const checkUsername = async (userName) => {
    setIsUsernameLoading(true);
    try {
      const res = await apiCheckUsernameExists(userName);
      const user = res.data.user;
      if (user) {
        setUsernameNotAvailable(true);
        setUsernameAvailable(false);
      } else {
        setUsernameAvailable(true);
        setUsernameNotAvailable(false);
      }
    } catch (error) {
      toast.error("An error occurred while checking username. Please try again!");
    } finally {
      setIsUsernameLoading(false);
    }
  };

  const checkEmail = async (email) => {
    setIsEmailLoading(true);
    try {
      const res = await apiCheckEmailExists(email);
      const user = res.data.user;
      if (user) {
        setEmailNotAvailable(true);
        setEmailAvailable(false);
      } else {
        setEmailAvailable(true);
        setEmailNotAvailable(false);
      }
    } catch (error) {
      toast.error("An error occurred while checking email. Please try again!");
    } finally {
      setIsEmailLoading(false);
    }
  };

  const userNameWatch = watch("userName");
  const emailWatch = watch("email");
  const passwordWatch = watch("password");
  const confirmPasswordWatch = watch("confirmPassword");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        await checkUsername(userNameWatch);
      }
    }, 1000);
    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [userNameWatch]);

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (emailWatch) {
        await checkEmail(emailWatch);
      }
    }, 1000);
    debouncedSearch();
    return () => debouncedSearch.cancel();
  }, [emailWatch]);

  useEffect(() => {
    if (passwordWatch !== confirmPasswordWatch) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match!",
      });
    } else {
      clearErrors("confirmPassword");
    }
  }, [passwordWatch, confirmPasswordWatch, setError, clearErrors]);

  const onSubmit = async (data) => {
    if (passwordWatch !== confirmPasswordWatch) {
      toast.error("Passwords do not match!");
      return;
    }

    setIsSubmitting(true);
    let payload = {
      email: data.email,
      userName: data.userName,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };

    try {
      const res = await apiSignUp(payload); // Pass payload to apiSignUp
      toast.success("Signup successful!"); // Success toast message
      navigate("/login");
    } catch (error) {
      toast.error("An error occurred during signup. Please try again!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[50rem] md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"></p>

            <div className="relative">
              <label className="block mb-2 text-medium font-medium text-gray-900">
                Your username
              </label>
              <div className="relative">
                <input
                  placeholder="LizaCaro"
                  type="text"
                  id="username"
                  className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5 pr-24"
                  {...register("userName", {
                    required: "Username is required",
                    minLength: {
                      value: 8,
                      message: "Username must be at least 8 characters",
                    },
                  })}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                  {isUsernameLoading && <Loader />}
                  {usernameAvailable && !isUsernameLoading && (
                    <span className="text-green-500 text-xs">Username Available!</span>
                  )}
                  {usernameNotAvailable && !isUsernameLoading && (
                    <span className="text-red-500 text-xs">Username Not Available!</span>
                  )}
                </div>
              </div>
              {errors.userName && (
                <p className="text-red-500 mt-2">{errors.userName.message}</p>
              )}
            </div>

            <div className="mb-6 relative">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <div className="relative">
                <input
                  placeholder="Email"
                  type="email"
                  id="email"
                  className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5 pr-24"
                  {...register("email", { required: "Email is required" })}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
                  {isEmailLoading && <Loader />}
                  {emailAvailable && !isEmailLoading && (
                    <span className="text-green-500 text-xs">Email Available!</span>
                  )}
                  {emailNotAvailable && !isEmailLoading && (
                    <span className="text-red-500 text-xs">Email Not Available</span>
                  )}
                </div>
              </div>
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6 relative">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5 pr-12"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password length must be at least 8 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {passwordVisible ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 mt-2">{errors.password.message}</p>
              )}
            </div>

            <div className="mb-6 relative">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  placeholder="••••••••"
                  type={confirmPassVisible ? "text" : "password"}
                  id="confirmPassword"
                  className="focus:outline-none border-none bg-textColor text-gray-900 text-medium rounded-lg block w-full p-5 pr-12"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === passwordWatch || "Passwords do not match!",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setConfirmPassVisible(!confirmPassVisible)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  {confirmPassVisible ? <Eye /> : <EyeOff />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 mt-2">{errors.confirmPassword.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="btn flex items-center justify-center w-full"
            >
              {isSubmitting ? <Loader /> : "CREATE AN ACCOUNT"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
