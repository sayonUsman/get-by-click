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
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-yellow-300 to-white">
      <Card className="w-72 sm:w-96 rounded-none">
        <CardHeader
          variant="gradient"
          color="deep-orange"
          className="mb-4 grid h-28 place-items-center rounded-none from-deep-orange-500 to-yellow-500"
        >
          <Typography variant="h3" className="text-blue-gray-900">
            Sign In
          </Typography>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody className="flex flex-col gap-4">
            <Input
              label="Name"
              type="text"
              size="lg"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required!</span>}

            <Input
              label="Email"
              type="email"
              size="lg"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required!</span>}

            <Input
              label="Phone"
              type="tel"
              size="lg"
              {...register("phone", { required: true })}
            />
            {errors.phone && <span>This field is required!</span>}

            <Input
              label="Password"
              type="password"
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
                <Link to="/sign-up">Sign up</Link>
              </span>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
