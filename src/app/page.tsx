"use client";

import ShopCard from "@/components/ShopCard";
import { Button, HR } from "flowbite-react";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

import Web3AuthConnectorInstance from "@/components/Web3AuthConnectorInstance";
import { useAccount, useConnect } from "wagmi";
import { baseSepolia } from "wagmi/chains";

const ShopsList = [
  {
    name: "Xtrem Fitness",
    address: "0xeEEe8f7922E99ce6CEd5Cb2DaEdA5FE80Df7C95e",
    description: "State-of-the-art gym with modern equipment, personal trainers, and a variety of fitness classes to help you achieve your health goals."
  },
  {
    name: "CoolHub coworking",
    address: "0x90d87CfCeF0d8058BfDb2862C00B5525556253F2",
    description: "A vibrant coworking space offering high-speed internet, private offices, meeting rooms, and a collaborative environment for startups and freelancers."
  },
  {
    name: "BookLovers Club",
    address: "0x746D791F5D5853894F6888cA735528Bb19DE1912",
    description: "Book club offering monthly book selections"
  }
];

const Home = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const [isLoading, setIsLoading] = useState(false);
  const [redirectRequested, setRedirectRequested] = useState(false);
  
  useEffect(() => {
    if (isConnected && redirectRequested) {
      window.location.href = `/${address}`;
    }
  }, [isConnected, redirectRequested, address]);


  const handleCreateShop = async () => {
    if (!isConnected) {
      setIsLoading(true);
      connect({ connector: Web3AuthConnectorInstance([baseSepolia]) });
      setRedirectRequested(true);
    } else {
      window.location.href = `/${address}`;
    }
  };

  return (
    <>
      <h1>Pocket Sub</h1>
      <h2>Subscriptions marketplace</h2>
        <Button onClick={handleCreateShop} className="m-auto" size="xl" gradientMonochrome="lime">
          {isLoading ? <Spinner /> : <>Manage your store</>}
        </Button>
      <HR />
      <div className="flex flex-wrap justify-evenly">
        {ShopsList.map((shop, index) => (
          <ShopCard data={shop} key={index} />
        ))}
      </div>
    </>
  );
}

export default Home;