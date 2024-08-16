import { Input } from '@material-tailwind/react'
import { Search } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar'; // Import the Avatar component from Material-UI or use your own

const MainPageTop = () => {
    const navigate = useNavigate(); // Ensure to import and use the navigate hook

    const getCurrentDate = () => {
        const options = { year: 'numeric', month: 'long',  };
        return new Date().toLocaleDateString(undefined, options);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-20 bg-mainPageColor shadow-2xl z-50">
            <div className="flex flex-row p-5 h-full w-full justify-between items-center">
                <h2 className="text-2xl font-marcellus text-center font-extrabold text-white">nectRural</h2>
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
                <div className="flex flex-row items-center gap-4">
                    {/* Avatar for profile */}
                    <button onClick={() => navigate("mainPage/profile")} className="focus:outline-none">
                        <Avatar alt="Profile Picture" src="/path/to/profile-picture.jpg" className="w-10 h-10" />
                    </button>

                    {/* Display the current date */}
                    <span className="text-white font-bold">
                        {getCurrentDate()}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainPageTop;
