import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const ExhibitionCard = ({ collection, btnText, link }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`${link}`, { replace: true });
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="mt-6 w-96 md:w-11/12 bg-gradient-to-b from-blue-gray-100 to-white rounded-none">
        <CardHeader
          color="blue-gray"
          floated={false}
          className="relative h-56 rounded-none"
        >
          <img
            src={collection?.url}
            alt={collection.title}
            className="w-full h-full"
          />
        </CardHeader>

        <CardBody>
          <Typography variant="small" color="black" className="mb-2">
            {collection.title}
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            variant="gradient"
            onClick={navigateTo}
            className="from-blue-gray-100 to-white text-black rounded-none"
          >
            {btnText}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ExhibitionCard;
