import { Input , } from "@material-tailwind/react";
import { MenuIcon, Search } from "lucide-react";
import SideBar from "./sideBar/sideBar";
import { IconButton } from "@mui/material";
const TopPart = () => {
  return (
    <div>
      <div className="flex flex-row p-4 w-auto h-24  justify-between items-center bg-submitBgColor">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className="relative w-96">
          <Input
            className="rounded-full w-full p-3 focus:outline-none border-none bg-textColor shadow-md"
            placeholder="Search"
            type="text"
            id="search"
          />
          <div className="absolute text-submitBgColor top-1/2 transform -translate-y-1/2 right-4">
            <Search />
          </div>
        </div>
        <div className="flex flex-row h-9 rounded-full overflow-hidden shadow-md">
          <button className="w-1/2 px-4 bg-[#142ef0] text-textColor hover:bg-[#040e58] hover:text-white">
            Signup
          </button>
          <button className="w-1/2 px-4 bg-textColor hover:bg-submitBgColor hover:text-textColor">
            Login
          </button>
        </div>
      </div>
      <SideBar />
    </div>
   )
}

export default TopPart