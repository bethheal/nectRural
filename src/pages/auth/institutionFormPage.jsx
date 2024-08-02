
import React from "react";
import InstitutionForm from "../../components/auth/institutionForm";

const InstitutionFormPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <h2 className="text-center pr-24 font-marcellus text-5xl mb-6">
          nectRural
        </h2>
        <InstitutionForm />
      </div>
    </div>
  );
};

export default InstitutionFormPage;
