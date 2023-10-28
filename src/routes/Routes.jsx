import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import LoginCard from "../pages/login/Login";
import SignUpCard from "../pages/signup/SignUp";
import Collection from "../pages/collection/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
        loader: async () => fetch("http://localhost:5000/trending-collections"),
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
