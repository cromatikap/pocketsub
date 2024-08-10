"use client";

import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import QRScanner from "@/components/QRScanner";
import { Spinner } from "flowbite-react";

import { TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { readContract } from "@wagmi/core";
import { abi, CONTRACT_ADDRESS } from "@/utils";
import {config} from "@/app/ClientRoot";
import { toast } from "react-toastify";

const Page = ({ params }: { params: { shopAddress: string } }) => {
  const [qrscannerResult, setQRScannerResult] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleScan = (qrValue: any) => {
    if (qrValue.length) {
      const value = qrValue[0].rawValue;
      setQRScannerResult(value);
    }
  };

  useEffect(() => {
    const checkAccess = async () => {
      setIsLoading(true);
      const result = await readContract(config, {
        abi,
        address: CONTRACT_ADDRESS,
        functionName: "hasAccess",
        args: [
          params.shopAddress,
          qrscannerResult
        ],
      })
      setIsLoading(false);
      setQRScannerResult("");
      result ? toast.success("Access granted") : toast.error("Access denied");
    };

    if(/^(0x)?[0-9a-fA-F]{40}$/.test(qrscannerResult))
      checkAccess();
  }, [qrscannerResult]);

  return (
    <>
      {isLoading && <div className="flex items-center justify-center opacity-80 z-20 h-screen w-screen left-0 fixed bg-gray-400">
        <Spinner size="xl" />
      </div>}
      <div className="flex justify-between items-start p-2">
        <PageTitle title="Check-in" walletAddress={params.shopAddress} />
        <BackButton href={`/${params.shopAddress}`} name='Back to store'/>
      </div>
      <div className="flex flex-col gap-4 p-4 m-auto items-stretch">
        <TextInput placeholder="wallet address" type="text" value={qrscannerResult} onChange={(e) => setQRScannerResult(e.target.value)} />
        <QRScanner onScan={handleScan} />
      </div>
    </>
  );
}

export default Page;