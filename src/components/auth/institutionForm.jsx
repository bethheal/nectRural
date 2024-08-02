import React from 'react'
import AuthButtons from '../buttons'


const InstitutionForm = () => {
  return (
    <form>
    <div className="grid grid-cols-2 font-roboto gap-10">
    <div>
        <label htmlFor="nameOfInstitution" className="block mb-2">
          Name of Institution
        </label>
        <input
          placeholder="Enter Institution"
          type="text"
          id="nameOfInstitution"
          className="h-14 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
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
          className="h-14 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
      </div>
      <div className="col-start-1 col-end-4">
        <label htmlFor="About" className="block mb-2 " >
          About
        </label>
        <textarea
          placeholder="Describe the school..."
          id="About"
          className="h-40 w-[470pt] focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
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
          className="h-14 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
      </div>
      <div>
        <label htmlFor="googleMapUrl" className="block mb-2">
          Google Map URL
        </label>
        <input
          placeholder="https://location.com"
          pattern="https://.*"
          id="googleMapUrl"
          type="url"
          className="h-14 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
          />
      </div>
    </div>
    <div className=" flex justify-center items-center">
    <AuthButtons
    text="NEXT"
    />
      
    </div>
  </form> 
   )
}

export default InstitutionForm