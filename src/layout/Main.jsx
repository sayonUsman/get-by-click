import { Outlet } from "react-router-dom";
import FixedNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DefaultSpeedDial } from "../components/SpeedDial";

const Main = () => {
  return (
    <>
      <FixedNavbar />;
      <Outlet />
      <Footer />
      <DefaultSpeedDial />
    </>
  );
};

export default Main;
