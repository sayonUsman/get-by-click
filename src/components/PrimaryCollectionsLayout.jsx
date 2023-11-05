import ItemCard from "./ItemCard";

const PrimaryCollectionsLayout = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 py-2">
      {collections?.map((collection) => (
        <ItemCard key={collection._id} collection={collection}></ItemCard>
      ))}
    </div>
  );
};

export default PrimaryCollectionsLayout;
