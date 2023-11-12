import { useRef } from "react";
import ItemCard from "./ItemCard";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrimaryCollectionsLayout = ({ collections }) => {
  const toastId = useRef(null);

  const newInfoToast = () => {
    toastId.current = toast.info("Added To Cart", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      draggable: false,
    });
  };

  const newErrorToast = () => {
    toastId.current = toast.error("Removed From Cart", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      draggable: false,
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 py-2">
        {collections?.map((collection) => (
          <ItemCard
            key={collection._id}
            collection={collection}
            toast={toast}
            toastId={toastId}
            newInfoToast={newInfoToast}
            newErrorToast={newErrorToast}
          ></ItemCard>
        ))}
      </div>

      <ToastContainer
        position="bottom-right"
        newestOnTop={false}
        rtl={false}
        theme="colored"
      />
    </>
  );
};

export default PrimaryCollectionsLayout;
