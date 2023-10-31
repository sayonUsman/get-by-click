import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import LoginCard from "../pages/login/Login";
import SignUpCard from "../pages/signup/SignUp";
import TrendingCollections from "../pages/trendingCollections/TrendingCollections";
import Secondary from "../layout/Secondary";
import AllCollections from "../pages/allCollections/allCollections";

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
    path: "/all",
    element: <Secondary />,
    children: [
      {
        path: "trending-collections",
        element: <TrendingCollections />,
        loader: async () => fetch("http://localhost:5000/trending-collections"),
      },
      {
        path: "all-collections",
        element: <AllCollections />,
        loader: async () => fetch("http://localhost:5000/all-collections"),
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
