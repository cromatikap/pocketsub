import { Spinner } from "flowbite-react";

const LoadingSpinner = () => {
  return <div className="flex flex-col p-24 items-center justify-center">
    <Spinner aria-label="loading..." size="xl" />
  </div>
}

export default LoadingSpinner;