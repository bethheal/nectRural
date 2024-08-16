import { Button } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const NgoForm = () => {
  const navigate = useNavigate();
  
  const handleSubmit = () => {
    navigate("/mainPage/profile");
  };

  return (
    <form className="max-w-4xl mx-auto mt-12 p-8 bg-white ">
      <h2 className="text-3xl font-extrabold mb-8 text-gray-900">Organization Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-800">
            Name
          </label>
          <input
            placeholder="Person or organization"
            type="text"
            id="name"
            className="w-full h-14 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-800">
            Location
          </label>
          <input
            type="text"
            placeholder="Enter Location"
            id="location"
            className="w-full h-14 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label htmlFor="about" className="block mb-2 text-sm font-medium text-gray-800">
            About
          </label>
          <textarea
            placeholder="Describe the organization..."
            id="about"
            className="w-full h-36 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="role" className="block focus:outline-none mb-2 text-sm font-medium text-gray-800">
            Who are you
          </label>
          <select
            id="role"
            className="w-full h-14 focus:outline-none  bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Select your role</option>
            <option value="NGO">NGO</option>
            <option value="Individual">Individual</option>
            <option value="Philanthropist">Philanthropist</option>
          </select>
        </div>

        <div>
          <label htmlFor="contacts" className="block mb-2 text-sm font-medium text-gray-800">
            Contacts
          </label>
          <input
            placeholder="0455647559"
            id="contacts"
            type="tel"
            className="w-full h-14 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button 
          type="button" 
          onClick={handleSubmit} 
          className="btn bg-blue-600 px-8 py-4 text-white rounded-lg shadow-sm"
        >
          NEXT
        </button>
      </div>
    </form>
  );
};

export default NgoForm;
