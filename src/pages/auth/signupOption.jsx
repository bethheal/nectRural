import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpImage } from "../../assets/images";

const SignupOption = () => {
  const navigate = useNavigate();
  const [userChoice, setUserChoice] = useState("");

  const handleChoice = (choice) => {
    setUserChoice(choice);
    localStorage.setItem("userChoice", choice); // Store choice in localStorage
    if (choice === "Institution") {
      navigate("/institution-form");
    } else if (choice === "NGO") {
      navigate("/ngo-form");
    }
  };

  return (
    <div className="flex  h-screen">
      <div className="flex flex-row justify-center font-marcellus items-center  h-full rounded-lg w-11/12">
        <div className="w-1/2 h-screen rounded-r-full overflow-hidden">
          <img src={signUpImage} alt="Signup" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-10 flex flex-col">
          <h2 className="text-7xl font-bold text-center mb-9 pr-10">nectRural</h2>
          <div className="text-medium font-normal text-center mb-9 pr-20">
            <span>Are you an </span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xl">
            <span
              onClick={() => handleChoice("Institution")}
              className="flex justify-center items-center h-20 w-52 border-none rounded-2xl shadow-md bg-btnBgColor hover:bg-submitBgColor hover:text-white cursor-pointer"
            >
              Institution
            </span>
            <span
              onClick={() => handleChoice("NGO")}
              className="flex justify-center items-center h-20 w-52 border-none rounded-2xl shadow-md bg-btnBgColor hover:bg-submitBgColor hover:text-white cursor-pointer"
            >
              NGO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupOption;
