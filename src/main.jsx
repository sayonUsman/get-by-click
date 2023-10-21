import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import FixedNavbar from "./components/Navbar";
import Header from "./components/Header";
import Collection from "./components/collection";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FixedNavbar />
      <Header></Header>
      <Collection></Collection>
      <Footer></Footer>
    </ThemeProvider>
  </React.StrictMode>
);
