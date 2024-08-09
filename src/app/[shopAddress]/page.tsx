"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useEffect, useState } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import dynamic from 'next/dynamic';
const UserInfo = dynamic(() => import('@/components/UserInfo'), { ssr: false });
const CheckInButton = dynamic(() => import('@/components/CheckInButton'), { ssr: false });
import { CONTRACT_ADDRESS, abi, processSubscriptions } from "@/utils";
import { Button, HR } from 'flowbite-react';
import AddSubscriptionCard from '@/components/AddSubscriptionCard';

interface SubscriptionProps {
  image_url: string;
  title: string;
  price: number;
}

const Page = ({ params }: { params: { shopAddress: string } }) => {
  const { isConnected, address } = useAccount();
  // const { writeContract } = useWriteContract()
  const [isOwner, setIsOwner] = useState(false);
  const [subscriptions, setSubscriptions] = useState<SubscriptionProps[]>([]);

  const { data, isLoading } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "getShopSubscriptions",
    args: [params.shopAddress]
  });

  useEffect(() => {
    if (data) {
      const processedData = processSubscriptions(data);
      setSubscriptions(processedData);
    }

  }, [data]);

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

  // const testWrite = () => {
  //   writeContract({
  //     abi,
  //     address: CONTRACT_ADDRESS,
  //     functionName: "setAccess",
  //     args: ["resourceId", 15, 1]
  //   });
  // }

  return <>
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Store" walletAddress={params.shopAddress} />
      <UserInfo />
    </div>
    {/* <Button onClick={testWrite}>dev test write contract</Button> */}
    <CheckInButton shopAddress={params.shopAddress} />
    {isLoading ? (<p>Loading...</p>) : (
      <div className="flex flex-wrap justify-evenly">
        {subscriptions.map((sub, index) => (
          <SubscriptionCard data={sub} isOwner={isOwner} key={index} />
        ))}
      </div>
    )}
    <HR />
    {isOwner && <AddSubscriptionCard />}
  </>
}

export default Page;