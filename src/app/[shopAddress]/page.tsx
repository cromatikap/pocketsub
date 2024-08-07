"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useEffect, useState } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import dynamic from 'next/dynamic';
const UserInfo = dynamic(() => import('@/components/UserInfo'), { ssr: false });
const CheckInButton = dynamic(() => import('@/components/CheckInButton'), { ssr: false });
import { CONTRACT_ADDRESS, abi } from "@/utils";
import { Button } from 'flowbite-react';

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
  const { writeContract } = useWriteContract()
  const [isOwner, setIsOwner] = useState(false);

  const result = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "name"
  });

  console.log(result.data)

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

  const testWrite = () => {
    writeContract({
      abi,
      address: CONTRACT_ADDRESS,
      functionName: "setAccess",
      args: ["resourceId", 15, 1]
    });
  }

  return <>
    <Button onClick={testWrite}>test write contract</Button>
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Shop" walletAddress={params.shopAddress} />
      <UserInfo />
    </div>
    <CheckInButton shopAddress={params.shopAddress} />
    <div className="flex flex-wrap justify-evenly">
      {SubscriptionsList.map((sub, index) => (
        <SubscriptionCard data={sub} isOwner={isOwner} key={index} />
      ))}
    </div>
  </>
}

export default Page;