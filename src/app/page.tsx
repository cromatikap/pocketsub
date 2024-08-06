import ShopCard from "@/components/ShopCard";
import { Button, HR } from "flowbite-react";

const ShopsList = [
  {
    name: "Xtrem Fitness",
    address: "0xa",
    description: "State-of-the-art gym with modern equipment, personal trainers, and a variety of fitness classes to help you achieve your health goals."
  },
  {
    name: "CoolHub coworking",
    address: "0xb",
    description: "A vibrant coworking space offering high-speed internet, private offices, meeting rooms, and a collaborative environment for startups and freelancers."
  },
  {
    name: "BookLovers Club",
    address: "0xc",
    description: "Book club offering monthly book selections"
  }
];

export default function Home() {
  return (
    <>
      <h1>Pocket Sub</h1>
      <h2>on-chain subscription market</h2>
      <Button className="m-auto" size="xl" gradientMonochrome="lime">Create your shop</Button>
      <HR />
      <div className="flex flex-wrap justify-evenly">
        {ShopsList.map((shop, index) => (
          <ShopCard params={shop} key={index} />
        ))}
      </div>
    </>
  );

}
