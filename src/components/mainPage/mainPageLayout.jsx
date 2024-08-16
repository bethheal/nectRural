import { Outlet, useLocation } from "react-router-dom";
import MainPageSideBar from "./mainPageSideBar";
import MainPageTop from "./mainPageTop";

const MainPageLayout = () => {
  const location = useLocation();
  const { pathname } = location;
  const excludeTopPaths = ["/mainPage/profile", "/settings", "mainPage/post"];

  return (
    <div>
      {!excludeTopPaths.includes(pathname) && <MainPageTop />}

      <div className="flex">
        <MainPageSideBar />  
        <div className="flex-grow p-4"> 
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainPageLayout;
