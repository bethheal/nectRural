import { Outlet } from "react-router-dom";
import SideBar from "../sideBar/sideBar";
import TopPart from "../topPart";

const DashboardLayout = () => {
  return (
    <div>
      <TopPart/>
    
    <div className="flex ">
      {/* <SideBar /> */}
    <div >

        <Outlet />
      </div>
      </div>
      </div>
  );
};

export default DashboardLayout;
