import { useNavigate } from "react-router-dom";
import banner from "../assets/collection-banner.png";
import { Button } from "@material-tailwind/react";

const TrendingCollectionBanner = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/trending-collections", { replace: true });
  };

  return (
    <div className="sm:mt-3 md:mt-5 lg:mt-7">
      <img src={banner} alt="Banner Image" className="w-full"></img>

      <Button
        variant="gradient"
        onClick={navigateTo}
        className="rounded from-brown-500 to-gray-50 text-blue-gray-900 font-blod -mt-20 ml-2 md:-mt-24 md:ml-4"
      >
        Explore Now!
      </Button>
    </div>
  );
};

export default TrendingCollectionBanner;
