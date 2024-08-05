import { Card } from "flowbite-react";

export default function Page({ params }: { params: { name: string, address: string, description: string } }) {
  return (
    <Card href="#">
      <h1 className="font-bold tracking-tight text-gray-900 dark:text-white truncate">
        {params.name}
      </h1>
      <h2 className="tracking-tight text-gray-900 dark:text-white truncate">
        {params.address}
      </h2>
      <p className="text-sm text-gray-700 dark:text-gray-400 ">
        {params.description}
      </p>
    </Card>
  );
}