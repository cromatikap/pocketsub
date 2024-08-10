"use client";

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import QRCode from "react-qr-code";
import { useAccount } from "wagmi";

export default function Page({ params }: { params: { shopAddress: string } }) {

  const { address } = useAccount();

  return (
    <>
      <div className="flex w-full justify-between items-start p-2">
        <PageTitle title="Identity" />
        <BackButton href={`/${params.shopAddress}`} name='Back to store'/>
      </div>
      {address &&
        <div className="flex flex-col gap-8 p-8 m-auto items-center">
          <QRCode value={address} className="max-w-lg h-auto w-full" />
          <div className="text-xs font-mono">{address}</div>
        </div>
      }
    </>
  );
}
