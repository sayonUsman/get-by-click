import banner from "../assets/collection-banner.png";
import { Button } from "@material-tailwind/react";

const Collection = () => {
  return (
    <div className="sm:mt-3 md:mt-5 lg:mt-7">
      <img src={banner} alt="Banner Image" className="w-full"></img>

      <Button
        variant="gradient"
        className="rounded from-brown-500 to-gray-50 text-blue-gray-900 font-blod -mt-20 ml-2 md:-mt-24 md:ml-4"
      >
        Shop Now!
      </Button>
    </div>
  );
};

export default Collection;
