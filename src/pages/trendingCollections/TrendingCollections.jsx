import { useLoaderData } from "react-router-dom";
import TrendingCollectionCard from "../../components/TrendingCollectionCard";

const TrendingCollections = () => {
  const trendingCollections = useLoaderData();

  return (
    <div className="container mx-auto mt-16 lg:mt-20 mb-5 px-2 lg:px-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {trendingCollections?.map((trendingCollection) => (
        <TrendingCollectionCard
          key={trendingCollection._id}
          trendingCollection={trendingCollection}
        ></TrendingCollectionCard>
      ))}
    </div>
  );
};

export default TrendingCollections;
