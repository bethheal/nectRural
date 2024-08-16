import React, { useState, useEffect } from "react";
import InstitutionForm from "../../components/auth/institutionForm";
import NgoForm from "../../components/auth/ngoForm";
import SchoolSection from "./schoolProve";
import NgoSection from "./ngoProve";

const Profile = () => {
  const [avatar, setAvatar] = useState(null);
  const [userChoice, setUserChoice] = useState("");

  useEffect(() => {
    const choice = localStorage.getItem("userChoice");
    setUserChoice(choice);
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-32 bg-mainPageColor shadow-2xl z-50 flex items-center justify-center">
        <label htmlFor="avatar-upload" className="relative cursor-pointer mt-36">
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <div
            className="w-60 h-60 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden"
            style={{ backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            {!avatar && (
              <div className="flex flex-col items-center">
                <span className="text-mainPageColor text-3xl mb-2">Upload</span>
                <span className="text-mainPageColor text-lg">Upload</span>
              </div>
            )}
          </div>
        </label>
      </div>

      <form className="max-w-3xl mx-auto mt-72">
        <div className="grid grid-cols-2 gap-10 font-roboto">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              placeholder="Name"
              type="text"
              id="name"
              className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
            />
          </div>
          <div>
            <label htmlFor="location" className="block mb-2">
              Location
            </label>
            <input
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
              placeholder="About..."
              id="About"
              className="h-40 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
            />
          </div>

          <div>
            <label htmlFor="contacts" className="block mb-2">
              Contacts
            </label>
            <input
              placeholder="0455647559"
              id="contacts"
              type="tel"
              className="h-16 w-full focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
            />
          </div>
        </div>

       

        {/* Conditionally render sections based on the user's choice */}
        {userChoice === "Institution" && <SchoolSection />}
        {userChoice === "NGO" && <NgoSection />}
        <button type="button" className="w-full flex items-center justify-center">
          SAVE
        </button>
      </form>
      <footer className="fixed bottom-0 left-0 w-full h-10 bg-mainPageColor shadow-2xl z-50 flex items-center justify-center"></footer>
    </div >
  );
};

export default Profile;
