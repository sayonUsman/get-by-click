import { Outlet } from "react-router-dom";
import FixedNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <FixedNavbar />;
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
