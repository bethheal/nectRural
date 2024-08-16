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
    <div className=" min-h-screen">
      <div className="fixed top-0 left-0 w-full h-32 bg-mainPageColor shadow-2xl z-50 flex items-center justify-center">
        <label
          htmlFor="avatar-upload"
          className="relative cursor-pointer mt-24"
        >
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <div
            className="w-32 h-32 rounded-full border-4 border-white bg-gray-300 flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage: `url(${avatar})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!avatar && (
              <div className="flex flex-col items-center">
                <span className="text-mainPageColor text-sm">Upload</span>
              </div>
            )}
          </div>
        </label>
      </div>

      <form className="max-w-4xl mx-auto mt-32 p-8 bg-white rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              placeholder="Name"
              type="text"
              id="name"
              className="w-full h-14 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
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
            <label
              htmlFor="about"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
              About
            </label>
            <textarea
              placeholder="About..."
              id="about"
              className="w-full h-36 focus:outline-none bg-gray-200 border border-gray-300 rounded-lg shadow-sm p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="contacts"
              className="block mb-2 text-sm font-medium text-gray-800"
            >
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

        {/* Conditionally render sections based on the user's choice */}
        {userChoice === "Institution" && <SchoolSection />}
        {userChoice === "NGO" && <NgoSection />}

        <button
          type="submit"
          className="btn flex items-center justify-center w-full"
        >
          SAVE
        </button>
      </form>
      <footer className="w-full h-40 bg-mainPageColor shadow-2xl mt-20 ml-16"></footer>
    </div>
  );
};

export default Profile;
