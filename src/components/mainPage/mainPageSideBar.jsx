import { useState } from "react";
import { k } from "../../components/dashbaord/constants";
import { NavLink } from "react-router-dom";

const MainPageSideBar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed top-32 left-0 h-[100vh] ${
        isHovered ? "w-40" : "w-20"
      } flex flex-col items-center transition-all duration-200 sidebar`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-4">
        {k.NAVLINKS.filter(link => link.pathLink !== "/dashboard").map(({ pathLink, text, icon }, index) => (
          <NavLink
            style={({ isActive }) => {
              return isActive ? { color: "#065CDC" } : {};
            }}
            to={pathLink}
            key={index}
            className="group flex items-center p-2 rounded transition-colors duration-300 hover:bg-mainPageColor hover:text-white relative"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              {icon}
            </div>
            <span
              className={`ml-2 text-lg font-medium whitespace-nowrap overflow-hidden transition-[max-width] duration-300 ${
                isHovered ? "max-w-[10rem]" : "max-w-0"
              }`}
            >
              {text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MainPageSideBar;