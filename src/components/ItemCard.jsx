import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({
  item,
  toast,
  toastId,
  newSuccessToast,
  newInfoToast,
  newErrorToast,
}) {
  const [isAdded, setIsAdded] = useState();
  const navigate = useNavigate();
  let userInfo = localStorage.getItem("user-info");

  if (userInfo) {
    userInfo = JSON.parse(userInfo);
  } else {
    userInfo = false;
  }

  const handleAddToCart = (event, item) => {
    if (userInfo) {
      setIsAdded(!isAdded);

      if (event.target.innerText === "ADD TO CART") {
        const itemDetails = {
          customerEmail: userInfo.email,
          itemId: item._id,
          title: item.title,
          url: item.url,
          price: item.price,
          category: item.category,
          subcategory: item.subcategory,
        };

        fetch("http://localhost:5000/selected-item", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(itemDetails),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data._id) {
              if (toast.isActive(toastId.current)) {
                toast.update(toastId.current, {
                  render: "Added To Cart",
                  type: "success",
                  autoClose: 5000,
                  hideProgressBar: false,
                  pauseOnHover: true,
                  closeOnClick: false,
                  draggable: false,
                });
              } else {
                newSuccessToast();
              }
            } else if (data.isAdded) {
              if (toast.isActive(toastId.current)) {
                toast.update(toastId.current, {
                  render: "This Item Already Added",
                  type: "info",
                  autoClose: 5000,
                  hideProgressBar: false,
                  pauseOnHover: true,
                  closeOnClick: false,
                  draggable: false,
                });
              } else {
                newInfoToast();
              }
            }
          })
          .catch((err) => {
            toast.update(toastId.current, {
              render: err.message,
              type: "error",
              autoClose: 5000,
              hideProgressBar: false,
              pauseOnHover: true,
              closeOnClick: false,
              draggable: false,
            });
          });
      } else if (event.target.innerText === "REMOVE FROM CART") {
        fetch(`http://localhost:5000/delete-item/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              if (toast.isActive(toastId.current)) {
                toast.update(toastId.current, {
                  render: "Removed From Cart",
                  type: "error",
                  autoClose: 5000,
                  hideProgressBar: false,
                  pauseOnHover: true,
                  closeOnClick: false,
                  draggable: false,
                });
              } else {
                newErrorToast();
              }
            }
          })
          .catch((err) => {
            toast.update(toastId.current, {
              render: err.message,
              type: "error",
              autoClose: 5000,
              hideProgressBar: false,
              pauseOnHover: true,
              closeOnClick: false,
              draggable: false,
            });
          });
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-96 rounded-none bg-gradient-to-b from-blue-gray-100 to-white my-1 shadow-md shadow-blue-gray-700">
        <CardHeader
          shadow={false}
          floated={false}
          className="relative h-72 rounded-none"
        >
          <img src={item?.url} alt="card-image" className="h-full w-full" />
        </CardHeader>

        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              {item.title}
            </Typography>

            <Typography
              color="blue-gray"
              variant="small"
              className="font-medium"
            >
              ${item.price}
            </Typography>
          </div>

          <div className="mb-2 flex items-center justify-between">
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {item.category} {item.subcategory}
            </Typography>

            {item.offer && (
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-orange-900"
              >
                {item.offer}% OFF
              </Typography>
            )}
          </div>
        </CardBody>

        <CardFooter className="pt-0">
          <Button
            onClick={(event) => handleAddToCart(event, item)}
            className={`w-full rounded-none bg-white text-blue-gray ${
              isAdded && "shadow-md shadow-deep-orange-500"
            }`}
          >
            {isAdded ? "Remove from Cart" : "Add to Cart"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
