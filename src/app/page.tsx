"use client";

import ShopCard from "@/components/ShopCard";
import { useWeb3Auth } from "@/components/Web3AuthProvider";
import { Button, HR } from "flowbite-react";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

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

const Home = () => {
  const { loggedIn, getAccounts, login } = useWeb3Auth();
  const [isLoading, setIsLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const getWalletAddress = async () => {
      if (loggedIn) {
        const accounts = await getAccounts();
        setWalletAddress(accounts[0]);
      }
      setIsLoading(false);
    }

    getWalletAddress();
  }, [loggedIn]);

  const handleCreateShop = async () => {
    if (!loggedIn){
      await login();
      const accounts = await getAccounts();
      window.location.href = `/${accounts[0]}`;
    }
    else
      window.location.href = `/${walletAddress}`;
  }

  return (
    <>
      <h1>Pocket Sub</h1>
      <h2>on-chain subscription market</h2>
        <Button onClick={handleCreateShop} className="m-auto" size="xl" gradientMonochrome="lime">
          {isLoading ? <Spinner /> : <>Create your shop</>}
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