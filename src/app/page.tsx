import ShopCard from "@/components/ShopCard";
import { Button } from "flowbite-react";

const ShopsList = [
  {
    name: "Ipal base of the world",
    address: "0xa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
  },
  {
    name: "Ipal base of the world 1",
    address: "0xb",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
  },
  {
    name: "Ipal base of the world some large title here for test 2",
    address: "0xc",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed quam a dui tempor fringilla sed sed diam."
  }
];

export default function Home() {
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
      <ul>
        {ShopsList.map((shop, index) => (
          <ShopCard params={shop} key={index} />
        ))}
      </ul>

    </>
  );

}
