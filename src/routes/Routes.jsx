import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import LoginCard from "../pages/login/Login";
import SignUpCard from "../pages/signup/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginCard />,
  },

  {
    path: "/sign-up",
    element: <SignUpCard />,
  },
]);

export default router;
