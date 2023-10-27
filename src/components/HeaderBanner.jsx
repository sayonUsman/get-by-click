import banner from "../assets/Banner.png";
import { Button } from "@material-tailwind/react";

const HeaderBanner = () => {
  return (
    <div className="mt-12">
      <img src={banner} alt="Banner Image" className="w-full"></img>

      <Button
        variant="gradient"
        className="rounded from-deep-orange-500 to-yellow-500 text-blue-gray-900 -mt-20 ml-2 md:-mt-24 md:ml-4"
      >
        Shop Now!
      </Button>
    </div>
  );
};

export default HeaderBanner;
