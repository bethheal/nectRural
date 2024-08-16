import { Input } from "@material-tailwind/react";
import { PlusCircle, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TopPart = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-mainPageColor shadow-2xl z-50">
      <div className="flex flex-row p-5 h-full w-full justify-between items-center">
      <h2 className="text-2xl  font-marcellus text-center font-extrabold text-white ">nectRural</h2>
      <div className="relative w-96">
          <Input
            className="rounded-full w-full p-3 focus:outline-none border-none bg-[#FFFFFF] shadow-lg"
            placeholder="Search"
            type="text"
            id="search"
          />
          <div className="absolute text-mainPageColor top-1/2 transform -translate-y-1/2 right-4">
            <Search />
          </div>
        </div>
        <div className="flex flex-row h-9 font-bold rounded-full overflow-hidden shadow-lg">
          <button
            className="w-28 h-full px-4 py-2 flex flex-row gap-3 bg-white text-mainPageColor hover:bg-mainPageColor hover:text-white"
            onClick={() => navigate("/signup")}
          >
            Post <PlusCircle />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopPart;
