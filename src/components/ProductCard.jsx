import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductCard({ collection }) {
  return (
    <div className="flex justify-center items-center">
      <Card className="w-96 rounded-none bg-gradient-to-b from-blue-gray-100 to-white my-1 shadow-md shadow-blue-gray-700">
        <CardHeader
          shadow={false}
          floated={false}
          className="relative h-72 rounded-none"
        >
          <img
            src={collection?.url}
            alt="card-image"
            className="h-full w-full"
          />
        </CardHeader>

        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              {collection.title}
            </Typography>

            <Typography
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              ${collection.price}
            </Typography>
          </div>

          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {collection.category} {collection.subcategory}
          </Typography>
        </CardBody>

        <CardFooter className="pt-0">
          <Button className="w-full rounded-none bg-white text-blue-gray">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
