import { useLoaderData } from "react-router-dom";
import PrimaryCollectionsLayout from "../../components/PrimaryCollectionsLayout";

const AllCollections = () => {
  const allCollections = useLoaderData();

  return <PrimaryCollectionsLayout collections={allCollections} />;
};

export default AllCollections;
