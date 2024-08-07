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
      <PageTitle title="Check-in" walletAddress={params.shopAddress} />
      <BackButton href={`/${params.shopAddress}`} name='Back to shop'/>
      
      <Label htmlFor="walletAddress" value="WalletAddress" />
      <TextInput id="walletAddress" type="text" sizing="md" value={qrscannerResult} onChange={(e) => setQRScannerResult(e.target.value)} />
      
      <QRScanner onScan={handleScan} />
      
    </>
  );
}

export default Page;