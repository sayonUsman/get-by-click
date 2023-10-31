import { Outlet } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import { DefaultSpeedDial } from "../components/SpeedDial";

const Secondary = () => {
  return (
    <>
      <SideNavbar />

      <div className="pt-20 lg:pt-0 lg:ml-[20rem] px-3 lg:px-4">
        <Outlet />
      </div>

      <DefaultSpeedDial />
    </>
  );
};

export default Secondary;
