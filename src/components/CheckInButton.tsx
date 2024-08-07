"use client";

import { Button } from 'flowbite-react';
import { useAccount } from 'wagmi';
import { useEffect, useState } from 'react';

const CheckInButton = ({ shopAddress }: { shopAddress: string }) => {
  const { isConnected, address } = useAccount();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const checkOwner = async () => {
      if (isConnected && address) {
        setIsOwner(address.toLowerCase() === shopAddress.toLowerCase());
      } else {
        setIsOwner(false);
      }
    };

    checkOwner();
  }, [isConnected, address, shopAddress]);

  return (
    <>
      {isConnected && (
        <Button
          gradientMonochrome="cyan"
          href={`/${isOwner ? "check-in" : "identity"}/${shopAddress}`}
          className="m-4"
          size="xl"
        >
          {isOwner ? "Check customer subscription" : "Check-in"}
        </Button>
      )}
    </>
  );
};

export default CheckInButton;