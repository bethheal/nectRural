import { Button, Input } from '@material-tailwind/react'
import React from 'react'
import AuthButtons from '../buttons'

const NgoForm
 = () => {
  return (
    <form>
    <div className="grid grid-cols-2 font-roboto gap-10">
      <div>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <Input
          placeholder="Person or organization"
          type="text"
          id="name"
          className="h-16 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
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
          className="h-16 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
        />
      </div>

      <div className="col-start-1 col-end-4">
        <label htmlFor="About" className="block mb-2">
          About
        </label>
        <textarea
          placeholder="Describe the school..."
          id="About"
          className="h-40 focus:outline-none w-[470pt] border-none rounded-xl shadow-md bg-btnBgColor p-2"
        />
      </div>
      <div>
        <label htmlFor="contacts" className="block mb-2">
          Who are you
        </label>
        <select
          id="contacts"
          className="h-16 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
        >
          <option>Select your role</option>
          <option value="NGO">NGO</option>
          <option value="Individual">Individual</option>
          <option value="Philanthropist">Philanthropist</option>
        </select>
      </div>

      <div>
        <label htmlFor="contacts" className=" mb-2">
          Contacts
        </label>
        <Input
          placeholder="0455647559"
          id="contacts"
          type="tel"
          className="h-16 w-72 focus:outline-none border-none rounded-xl shadow-md bg-btnBgColor p-2"
        />
      </div>
    </div>
    <div className=" flex justify-center items-center">
      <AuthButtons
      text={"NEXT"}
      />
      
    </div>
  </form>  
  )
}

export default NgoForm
