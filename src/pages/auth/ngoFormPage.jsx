import React from "react";
import { Button, Input } from "@material-tailwind/react";
import NgoSignupForm from "../../components/auth/ngoForm";
import NgoForm from "../../components/auth/ngoForm";

const NgoFormPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-center pr-24 font-marcellus text-5xl mb-6">
          nectRural
        </h2>
        <NgoForm />
      </div>
    </div>
  );
};

export default NgoFormPage;
