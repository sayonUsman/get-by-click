import { Spinner } from "@material-tailwind/react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-48">
      <Spinner className="h-8 w-8" />
    </div>
  );
}
