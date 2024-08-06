"use client";

import PageTitle from '@/components/PageTitle';
import SubscriptionCard from '@/components/SubscriptionCard';
import UserInfo from '@/components/UserInfo';
import { useWeb3Auth } from '@/components/Web3AuthProvider';

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

  const { isConnected } = useWeb3Auth();

  return <>
    {params.shopAddress}
    {isConnected() ? "Connected" : "Not connected"}
    <div className="flex justify-between items-start p-2">
      <PageTitle title="Shop" walletAddress="0x612d...ddc5" />
      <UserInfo />
    </div>
    <div className="flex flex-wrap justify-evenly">
      {SubscriptionsList.map((sub, index) => (
        <SubscriptionCard data={sub} isOwner={true} key={index} />
      ))}
    </div>
  </>
}

export default Page;