import { ArrowBack } from "@mui/icons-material";
import { loginImage } from "../../assets/images";

import LoginForm from "../../components/auth/loginForm";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
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
        
        <div className="w-1/2 p-52 flex flex-col bg-white">
        <button className=" font-normal text-left mb-10 " onClick={() => navigate("/")} >
           
          <ArrowBack/>
          Back
        </button>
        <h2 className="text-7xl font-marcellus text-center mb-2">
            nectRural
          </h2>
          <LoginForm />
          <p className="flex ml-10 justify-center text-sm mb-0">
        Already have an account?
        <Link
          className="font-bold text-submitBgColor hover:text-slate-900 transition-colors duration-300"
          to="/signup"
        >
          Sign up
        </Link>
      </p>
        </div>
       
      </div>
     
    </div>
  );
};

export default LoginPage;
