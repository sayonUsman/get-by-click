import { useLoaderData } from "react-router-dom";
import TrendingCollectionCard from "../../components/TrendingCollectionCard";

const TrendingCollections = () => {
  const trendingCollections = useLoaderData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 py-2">
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
