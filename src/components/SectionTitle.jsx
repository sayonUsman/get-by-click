import { Typography } from "@material-tailwind/react";

const SectionTitle = ({ title }) => {
  return (
    <Typography variant="h3" className="font-agba mt-5 md:mt-9 ml-2 md:ml-4">
      {title}
    </Typography>
  );
};

export default SectionTitle;
