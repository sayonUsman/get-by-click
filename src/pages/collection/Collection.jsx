import { useLoaderData } from "react-router-dom";
import PrimaryCollectionsLayout from "../../components/PrimaryCollectionsLayout";

const Collection = () => {
  const collections = useLoaderData();

  return <PrimaryCollectionsLayout collections={collections} />;
};

export default Collection;
