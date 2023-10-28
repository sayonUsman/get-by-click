import { useLoaderData } from "react-router-dom";
import CollectionCart from "../../components/CollectionCart";

const Collection = () => {
  const collections = useLoaderData();

  return (
    <div className="container mx-auto mt-16 lg:mt-20 mb-5 px-2 lg:px-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {collections?.map((collection) => (
        <CollectionCart
          key={collection._id}
          collection={collection}
        ></CollectionCart>
      ))}
    </div>
  );
};

export default Collection;
