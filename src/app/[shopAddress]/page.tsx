"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import UserInfo from '@/components/UserInfo';
import { useWeb3Auth } from '@/components/Web3AuthProvider';
import { useEffect, useState } from 'react';

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
  const { loggedIn, getAccounts } = useWeb3Auth();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      if (loggedIn) {
        const accounts = await getAccounts();
        setIsOwner(accounts[0].toLowerCase() === params.shopAddress.toLowerCase());
      }
    }

    checkOwner();
  }, [loggedIn]);

  return <>
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Shop" walletAddress={params.shopAddress} />
      <UserInfo />
    </div>
    <div className="flex flex-wrap justify-evenly">
      {SubscriptionsList.map((sub, index) => (
        <SubscriptionCard data={sub} isOwner={isOwner} key={index} />
      ))}
    </div>
  </>
}

export default Page;