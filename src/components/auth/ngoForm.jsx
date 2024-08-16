import { Button, Input } from '@material-tailwind/react';
import React from 'react';
import AuthButtons from '../buttons';
import { useNavigate } from 'react-router-dom';

const NgoForm = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/mainPage/profile");  };
  return (
    <form className="max-w-3xl mx-auto mt-8">
      <div className="grid grid-cols-2 gap-10 font-roboto">
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <Input
            placeholder="Person or organization"
            type="text"
            id="name"
            className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-2">
            Location
          </label>
          <Input
            type="text"
            placeholder="Enter Location"
            id="location"
            className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="About" className="block mb-2">
            About
          </label>
          <textarea
            placeholder="Describe the organization..."
            id="About"
            className="h-40 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
        </div>
        <div>
          <label htmlFor="contacts" className="block mb-2">
            Who are you
          </label>
          <select
            id="contacts"
            className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          >
            <option>Select your role</option>
            <option value="NGO">NGO</option>
            <option value="Individual">Individual</option>
            <option value="Philanthropist">Philanthropist</option>
          </select>
        </div>

        <div>
          <label htmlFor="contacts" className="block mb-2">
            Contacts
          </label>
          <Input
            placeholder="0455647559"
            id="contacts"
            type="tel"
            className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
        </div>

     
      </div>
      <button
  type="button" 
  className="w-full flex items-center justify-center"
  onClick={handleSubmit}
>
GET STARTED</button>

    </form>
  );
};

export default NgoForm;
