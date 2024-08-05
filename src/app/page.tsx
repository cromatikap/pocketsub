import { Button, Card } from "flowbite-react";


export default function Home() {
  const ShopsList = [
    {
      name: "Ipal base of the world",
      address: "0xabcd...000",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
    },
    {
      name: "Ipal base of the world 1",
      address: "0xabcd...001",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
    },
    {
      name: "Ipal base of the world some large title here for test 2",
      address: "0xabcd...000000000000000000000000000000002",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
    }
  ];
  return (
    <>
      <div className="mb-4 flex flex-col gap-4 text-center">
        <h1>Pocket Sub</h1>
        <h2 className="text-pretty">on-chain standalone subscription market</h2>
      </div>
      <div className="w-full mb-4">
        <Button fullSized size="lg" >Create your shop</Button>
      </div>

      <div className="mb-4">
        <h2>Browser our community</h2>
      </div>
      <ul className="space-y-1 w-full overflow-y-auto rounded-lg">
        {ShopsList.map((shop, index) => (
          <Card href="#" key={index}>
            <h1 className="font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {shop.name}
            </h1>
            <h2 className="tracking-tight text-gray-900 dark:text-white truncate">
              {shop.address}
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-400 ">
              {shop.description}
            </p>
          </Card>
        ))}
      </ul>

    </>
  );

}
