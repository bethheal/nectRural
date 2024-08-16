import React from 'react'
import SignupForm from '../../components/auth/signupForm'
import { loginImage } from '../../assets/images'
import { ArrowBack } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
    <div className="flex flex-row-reverse justify-center items-center h-full w-full">
      <div className="w-1/2 h-full rounded-l-full overflow-hidden">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 p-60 flex flex-col bg-white">
      <button className=" font-normal text-left mb-10 " onClick={() => navigate("/")} >
           
           <ArrowBack/>
           Back
         </button>
        <h2 className="text-7xl font-marcellus text-center mb-9">
          nectRural
        </h2>
       <SignupForm/>
      </div>
    </div>
  </div>  )
}

export default SignupPage