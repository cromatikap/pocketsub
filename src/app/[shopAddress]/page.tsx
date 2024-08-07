"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import UserInfo from '@/components/UserInfo';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

const SubscriptionsList = [
  {
    image_url: "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder-700x700.png",
    title: "Pass 1 day",
    price: 9
  },
  {
    image_url: "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder-700x700.png",
    title: "Pass 1 month",
    price: 30
  },
  {
    image_url: "https://mkantwerpen.be/wp-content/uploads/2020/01/placeholder-700x700.png",
    title: "Pass 12 day",
    price: 300
  },
];

const Page = ({ params }: { params: { shopAddress: string } }) => {
  const { isConnected, address } = useAccount();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      if (isConnected && address) {
        setIsOwner(isConnected && address && address.toLowerCase() === params.shopAddress.toLowerCase());
      }
      else
        setIsOwner(false);
    }

    checkOwner();
  }, [isConnected, address, params.shopAddress]);

  return <>
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Shop" walletAddress={params.shopAddress} />
      <UserInfo />
    </div>
    {/* {isConnected && 
      <Button gradientMonochrome="cyan" href={`/${isOwner ? "check-in" : "identity"}/${params.shopAddress}`} className='m-4' size="xl">
        {isOwner ? "Check customer subscription" : "Check-in"}
      </Button>
    } */}
    <div className="flex flex-wrap justify-evenly">
      {SubscriptionsList.map((sub, index) => (
        <SubscriptionCard data={sub} isOwner={isOwner} key={index} />
      ))}
    </div>
  </>
}

export default Page;