"use client";

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import QRScanner from "@/components/QRScanner";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";

const Page = ({ params }: { params: { shopAddress: string } }) => {

  const [qrscannerResult, setQRScannerResult] = useState<any | null>(null);

  return (
    <>
      <PageTitle title="Check-in" walletAddress={params.shopAddress} />
      <BackButton href={`/${params.shopAddress}`} name='Back to shop'/>
      <QRScanner onScan={(result) => setQRScannerResult(result)} />

      <Label htmlFor="walletAddress" value="WalletAddress" />
      <TextInput id="walletAddress" type="text" sizing="md" value={JSON.stringify(qrscannerResult)} />
    </>
  );
}

export default Page;