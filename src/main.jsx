import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import FixedNavbar from "./components/Navbar";
import Header from "./components/Header";
import Collection from "./components/collection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <FixedNavbar />
      <Header></Header>
      <Collection></Collection>
    </ThemeProvider>
  </React.StrictMode>
);
