import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";
import { DefaultSpeedDial } from "../../components/SpeedDial";

export default function LoginCard() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastId = useRef(null);
  const navigate = useNavigate();
  const newToast = () =>
    (toastId.current = toast.info("Please wait...", {
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      draggable: false,
    }));

  const onSubmit = (userData) => {
    newToast();

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((existingUserData) => {
        if (existingUserData.isLoginSuccess) {
          const userInfo = {
            isLoginSuccess: true,
            email: userData.email,
          };

          localStorage.setItem("user-info", JSON.stringify(userInfo));
          reset();
          navigate("/", { replace: true });
          window.location.reload(false);
        } else {
          toast.update(toastId.current, {
            render: "Authentication failed",
            type: "error",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            closeOnClick: false,
            draggable: false,
          });
        }
      })
      .catch((error) => {
        toast.update(toastId.current, {
          render: error.message,
          type: "error",
          autoClose: 5000,
          hideProgressBar: false,
          pauseOnHover: true,
          closeOnClick: false,
          draggable: false,
        });
      });
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-yellow-300 to-white">
        <Card className="w-72 sm:w-96 rounded-none">
          <CardHeader
            variant="gradient"
            color="deep-orange"
            className="mb-4 grid h-28 place-items-center rounded-none from-deep-orange-500 to-yellow-500"
          >
            <Typography variant="h5" className="text-blue-gray-900">
              GET BY CLICK
            </Typography>
          </CardHeader>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Email"
                type="email"
                autoComplete="email"
                size="lg"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required!</span>}

              <Input
                label="Password"
                type="password"
                autoComplete="current-password"
                size="lg"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required!</span>}

              <div className="-ml-2.5">
                <Checkbox label="Remember Me" />
              </div>
            </CardBody>

            <CardFooter className="pt-0">
              <Button
                variant="gradient"
                fullWidth
                className="from-yellow-500 to-deep-orange-500 text-blue-gray-900 rounded-none"
              >
                <input type="submit" value="SIGN IN" className="w-full" />
              </Button>

              <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <span className="ml-1 font-bold">
                  <Link to="/sign-up">SIGN UP</Link>
                </span>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </div>

      <ToastContainer
        position="bottom-right"
        newestOnTop={false}
        rtl={false}
        theme="colored"
      />

      <DefaultSpeedDial />
    </>
  );
}
