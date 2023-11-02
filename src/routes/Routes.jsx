import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import LoginCard from "../pages/login/Login";
import SignUpCard from "../pages/signup/SignUp";
import TrendingCollections from "../pages/trendingCollections/TrendingCollections";
import Secondary from "../layout/Secondary";
import AllCollections from "../pages/allCollections/allCollections";
import Collection from "../pages/collection/Collection";
import UpcomingFeatureCard from "../components/UpComingFeatureCard";

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
        path: "/gift-carts",
        element: <UpcomingFeatureCard />,
      },
      {
        path: "/track-order",
        element: <UpcomingFeatureCard />,
      },
      {
        path: "/returns",
        element: <UpcomingFeatureCard />,
      },
      {
        path: "/help-center",
        element: <UpcomingFeatureCard />,
      },
      {
        path: "/wishlist",
        element: <UpcomingFeatureCard />,
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
      {
        path: "new-collections",
        element: <Collection />,
        loader: async () => fetch("http://localhost:5000/new-collections"),
      },
      {
        path: "popular-collections",
        element: <Collection />,
        loader: async () => fetch("http://localhost:5000/popular-collections"),
      },
      {
        path: "cool-collections",
        element: <Collection />,
        loader: async () => fetch("http://localhost:5000/cool-collections"),
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
