import React from 'react'
import AuthButtons from '../components/buttons'
import {  useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const Navigate = useNavigate();
  return (
    <div>LandingPage
    
    <span onClick={()=>Navigate("/signup")}>
    <AuthButtons 
    text="signup"
    
     />
    </span>
   
    <span onClick={()=>Navigate("/login")}>
    <AuthButtons
    text="login" />
    </span>
   
   <span onClick={()=>Navigate("/dashboard")}>
   <AuthButtons
    text="view" />
   </span>
    
    </div>
  )
}

export default LandingPage