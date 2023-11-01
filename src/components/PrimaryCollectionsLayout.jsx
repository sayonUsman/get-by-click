import { ProductCard } from "./ProductCard";

const PrimaryCollectionsLayout = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 py-2">
      {collections?.map((collection) => (
        <ProductCard key={collection._id} collection={collection}></ProductCard>
      ))}
    </div>
  );
};

export default PrimaryCollectionsLayout;
