import React from "react";
import AuthButtons from "../components/buttons";
import { useNavigate } from "react-router-dom";
import { landingAboutImage } from "../assets/images";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-full flex flex-col justify-center items-center">
      <div className="absolute top-2 right-4 flex space-x-4">
        <span onClick={() => navigate("/login")}>
          <AuthButtons text="login" />
        </span>
        <span onClick={() => navigate("/dashboard")}>
          <AuthButtons text="view" />
        </span>
      </div>

      <div className="text-center">
        <img src="" alt="section 1 image" className="mx-auto mb-4" />
        <span onClick={() => navigate("/signup")}>
          <AuthButtons text="GET STARTED" />
        </span>
      </div>

      <div className="mt-8 m-40 mb-10 flex flex-row h-[30rem] justify-between items-center">
        <img 
          src={landingAboutImage} 
          alt="About IMG" 
          className="h-full w-1/2 object-cover" 
        />
        <div className="ml-4 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sapiente quaerat itaque fugiat recusandae incidunt soluta sint distinctio consequatur, praesentium illum eveniet! Dolor, totam placeat nesciunt minima incidunt ipsum recusandae.</div>
      </div>

      <footer className="bg-[#020939] h-40 w-full  bottom-0"></footer>
    </div>
  );
};

export default LandingPage;
