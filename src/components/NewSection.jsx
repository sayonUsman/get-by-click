import ExhibitionCard from "./ExhibitionCard";

const NewSection = ({ collections, btnText, link }) => {
  return (
    <div className="flex justify-center items-center mt-7 lg:mt-9 mb-9 md:mb-12 lg:mb-16 px-2 md:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
        {collections?.map((collection) => (
          <ExhibitionCard
            key={collection._id}
            collection={collection}
            btnText={btnText}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewSection;
