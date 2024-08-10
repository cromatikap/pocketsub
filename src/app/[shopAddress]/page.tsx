"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useEffect, useState } from 'react';
import { useAccount, useReadContract, useWriteContract } from 'wagmi';
import dynamic from 'next/dynamic';
const UserInfo = dynamic(() => import('@/components/UserInfo'), { ssr: false });
const CheckInButton = dynamic(() => import('@/components/CheckInButton'), { ssr: false });
import { CONTRACT_ADDRESS, abi, processSubscriptions } from "@/utils";
import { HR } from 'flowbite-react';
import AddSubscriptionCard from '@/components/AddSubscriptionCard';
import { getETHtoUSD } from '@/getETHtoUSD';
import EmptyShop from '@/components/EmptyShop';
import { SubscriptionProps } from '@/types';
import LoadingSpinner from './LoadingSpinner';

const Page = ({ params }: { params: { shopAddress: string } }) => {
  const { isConnected, address } = useAccount();
  const [isOwner, setIsOwner] = useState(false);
  const [subscriptions, setSubscriptions] = useState<SubscriptionProps[]>([]);

  const { data, isLoading } = useReadContract({
    abi,
    address: CONTRACT_ADDRESS,
    functionName: "getShopSubscriptions",
    args: [params.shopAddress]
  });

  useEffect(() => {
    const ethToUsdRate = getETHtoUSD();

    if (data && ethToUsdRate) {
      const processedData = processSubscriptions(data, ethToUsdRate);
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

  return <>
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Store" walletAddress={params.shopAddress} />
      <UserInfo />
    </div>
    {isLoading
      ? <LoadingSpinner /> 
      : subscriptions.length > 0 
      ? <>
          <CheckInButton shopAddress={params.shopAddress} />
          <div className="flex flex-wrap justify-evenly">
            {subscriptions.map((sub, index) => (
              <SubscriptionCard data={sub} isOwner={isOwner} shopAddress={params.shopAddress} key={index} />
            ))}
          </div>
        </>
      : <EmptyShop />}
    {isOwner && <>
        <HR />
        <AddSubscriptionCard />
      </>}
  </>
}

export default Page;