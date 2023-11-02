import { Typography } from "@material-tailwind/react";

const UpcomingFeatureCard = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Typography
        variant="h6"
        className="font-agba sm:text-xl md:text-2xl xl:text-3xl"
      >
        This Feature will Coming Soon.
      </Typography>
    </div>
  );
};

export default UpcomingFeatureCard;
