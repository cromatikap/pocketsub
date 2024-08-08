"use client";

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import QRScanner from "@/components/QRScanner";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";

const Page = ({ params }: { params: { shopAddress: string } }) => {

  const [qrscannerResult, setQRScannerResult] = useState<string>("");

  const handleScan = (qrValue: any) => {
    if (qrValue.length) {
      const value = qrValue[0].rawValue;
      setQRScannerResult(value);
    }
  };

  return (
    <>
      <div className="p-2">
        <PageTitle title="Check-in" walletAddress={params.shopAddress} />
      </div>
      <BackButton href={`/${params.shopAddress}`} name='Back to store'/>

      <div className="flex flex-col gap-8 p-8 m-auto items-center">
        <TextInput id="walletAddress" type="text"  value={qrscannerResult} onChange={(e) => setQRScannerResult(e.target.value)} />
        <QRScanner onScan={handleScan} />
      </div>
      
    </>
  );
}

export default Page;