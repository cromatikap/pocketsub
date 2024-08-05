import ShopCard from "@/components/ShopCard";
import { Button, HR } from "flowbite-react";

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
      <h1>Pocket Sub</h1>
      <h2 className="text-pretty">on-chain standalone subscription market</h2>
      <Button fullSized>Create your shop</Button>
      <HR />
      <h3>Browse our community</h3>
      <ul>
        {ShopsList.map((shop, index) => (
          <ShopCard params={shop} key={index} />
        ))}
      </ul>
    </>
  );

}
