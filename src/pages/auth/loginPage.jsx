import { ArrowBack } from "@mui/icons-material";
import { loginImage } from "../../assets/images";
import LoginForm from "../../components/auth/loginForm";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Image Section */}
      <div className="md:w-1/2 h-1/3 md:h-full rounded-l-full overflow-hidden">
        <img
          src={loginImage}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Form Section */}
      <div className="flex flex-col justify-center items-center md:w-1/2 p-8 md:p-20 bg-white">
        <button
          className="flex items-center text-left mb-10"
          onClick={() => navigate("/")}
        >
          <ArrowBack className="mr-2" />
          Back
        </button>
        <h2 className="text-4xl md:text-7xl font-marcellus text-center mb-6">
          nectRural
        </h2>
        <div className="w-full md:w-3/4">
          <LoginForm />
        </div>
        <p className="flex justify-center text-sm mt-6">
          Don't have an account?
          <Link
            className="font-bold text-submitBgColor hover:text-slate-900 transition-colors duration-300 ml-2"
            to="/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
