"use client";

import PageTitle from "@/components/PageTitle";
import QRScanner from "@/components/QRScanner";
import { Label, TextInput } from "flowbite-react";
import { useState } from "react";

const Page = ({ params }: { params: { shopAddress: string } }) => {

  const [qrscannerResult, setQRScannerResult] = useState<any | null>(null);

  return (
    <>
      <PageTitle title="Check-in page" walletAddress={params.shopAddress} />
      {/* back butto here */}
      <QRScanner onScan={(result) => setQRScannerResult(result)} />

      <div className="text-center">
        <div className="mb-2 block">
          <Label htmlFor="walletAddress" value="WalletAddress" />
        </div>
        <TextInput id="walletAddress" type="text" sizing="md" value={JSON.stringify(qrscannerResult)} disabled />
      </div>
    </>
  );
}

export default Page;