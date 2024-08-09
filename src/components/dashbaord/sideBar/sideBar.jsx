import { NavLink } from 'react-router-dom';
import { k } from '../constants';

const SideBar = () => {
  return (
    <div className="h-screen w-36 bg-[#283FEA] text-white">
      <div className="flex flex-col gap-5 ">
        {k.NAVLINKS.map((link, index) => (
          <NavLink
            to={link.pathLink}  
            key={index}
            className="flex items-center gap-2 p-2 rounded hover:bg-white hover:w-60 hover:text-submitBgColor"
            activeClassName="bg-gray-700"  
          >
            {link.icon}
            <span>{link.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
