import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const TrendingCollectionCard = ({ trendingCollection }) => {
  return (
    <div className="flex justify-center items-center">
      <Card
        shadow={false}
        className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center rounded-none sm:rounded"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          style={{
            backgroundImage: `url(${trendingCollection?.url})`,
          }}
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>

        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography variant="h5" className="mb-4 text-gray-400">
            ${trendingCollection?.price}
          </Typography>

          <Button
            variant="gradient"
            className="rounded from-brown-500 to-gray-50 text-blue-gray-900"
          >
            Add To Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrendingCollectionCard;
