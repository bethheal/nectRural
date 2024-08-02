import { Input } from "@material-tailwind/react";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import AuthButtons from "../buttons";

const SignupForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassVisible, setConfirmPassVisible] = useState(false);

  return (
    <form>
      <div className="mb-6">
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <Input
          placeholder="username"
          type="text"
          id="username"
          className="h-14 w-[19rem] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-4"
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
          className="h-14 w-[19rem] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-4"
        />
        <button
          type="button"
          onClick={() => setPasswordVisible(!passwordVisible)}
          className="absolute left-64 transform -translate-y-9"
        >
          {passwordVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>

      <div className="mb-6 relative">
        <label htmlFor="confirmPassword" className="block mb-2">
          Confirm Password
        </label>
        <Input
          type={confirmPassVisible ? "text" : "password"}
          placeholder="confirm password"
          id="confirmPassword"
          className="h-14 w-[19rem] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-4"
        />
        <button
          type="button"
          onClick={() => setConfirmPassVisible(!confirmPassVisible)}
          className="absolute left-64 transform -translate-y-9"
        >
          {confirmPassVisible ? <Eye /> : <EyeOff />}
        </button>
      </div>
      <div className=" flex  justify-center items-center">
        <AuthButtons text="SIGN UP" />
      </div>
    </form>
  );
};

export default SignupForm;
