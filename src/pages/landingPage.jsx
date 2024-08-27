import React from "react";
import { useNavigate } from "react-router-dom";
import { getStarted, landingAboutImage } from "../assets/images";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="relative w-full h-auto">
        <img
          src={getStarted}
          alt="Get Started image"
          className="mx-auto mb-4 w-full h-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-blue-950 to-submitBgColor opacity-40"></div>
      </div>

      {/* Header Section */}
      <div className="flex flex-row absolute top-5 w-full px-4 justify-between text-white">
        <div className="text-xl md:text-3xl font-marcellus">nectRural</div>
        <div className="flex space-x-2 md:space-x-5">
          <button
            onClick={() => navigate("/login")}
            aria-label="Login"
            className="text-sm md:text-base"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            aria-label="View Dashboard"
            className="text-sm md:text-base"
          >
            View Post
          </button>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col gap-6 md:gap-10 justify-end text-center px-4 py-20 md:py-40 absolute top-[5rem] md:top-[10rem] text-white">
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Optio est neque hic consequatur. Quibusdam tempora debitis quisquam,
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/signup")}
            aria-label="Get Started"
            className="btn w-40 md:w-56 items-center justify-center shadow-blue-600 shadow-sm text-black font-marcellus font-bold bg-white"
          >
            GET STARTED
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="relative mt-8 mx-4 md:mx-40 mb-10 flex flex-col md:flex-row gap-8 md:gap-x-32 h-auto md:h-[30rem] items-center">
        <div className="absolute h-[30rem] w-full md:w-[36%] bg-[#020939] rounded-tl-full"></div>
        <img
          src={landingAboutImage}
          alt="About IMG"
          className="relative rounded-tl-full h-full w-full md:w-1/2 object-cover"
        />
        <div className="relative z-30 ml-4 text-left text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          sapiente quaerat itaque fugiat recusandae incidunt soluta sint
          distinctio consequatur, praesentium illum eveniet! Dolor, totam
          placeat nesciunt minima incidunt ipsum recusandae.
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#020939] h-20 md:h-40 w-full bottom-0"></footer>
    </div>
  );
};

export default LandingPage;
