import { useEffect, useState } from "react";
import HeaderBanner from "../../components/HeaderBanner";
import TrendingCollectionBanner from "../../components/TrendingCollectionBanner";
import SectionTitle from "../../components/SectionTitle";
import NewSection from "../../components/NewSection";
import Loader from "../../components/Loader";

const Home = () => {
  const [newCollections, setNewCollections] = useState(null);
  const [popularCollections, setPopularCollections] = useState(null);
  const [coolCollections, setCoolCollections] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/collections")
      .then((res) => res.json())
      .then((data) => {
        setNewCollections(data.newCollections);
        setCoolCollections(data.coolCollections);
        setPopularCollections(data.popularCollections);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <HeaderBanner />
      <TrendingCollectionBanner />

      <SectionTitle title={"new arrivals"} />
      {newCollections ? (
        <NewSection
          collections={newCollections}
          btnText={"Check Out Now"}
          link={"/all/new-collections"}
        />
      ) : (
        <Loader />
      )}

      <SectionTitle title={"popular trending"} />
      {newCollections ? (
        <NewSection
          collections={popularCollections}
          btnText={"Explore More"}
          link={"/all/popular-collections"}
        />
      ) : (
        <Loader />
      )}

      <SectionTitle title={"what's cool"} />
      {newCollections ? (
        <NewSection
          collections={coolCollections}
          btnText={"Shop Now"}
          link={"/all/cool-collections"}
        />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
