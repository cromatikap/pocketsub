"use client";

import { useWeb3Auth } from '@/components/Web3AuthProvider';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';

const UserInfo = () => {
  const { loggedIn, login, getAccounts } = useWeb3Auth();

  const [isLoading, setIsLoading] = useState(true);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const getWalletAddress = async () => {
      if (loggedIn) {
        const accounts = await getAccounts();
        setWalletAddress(accounts[0]);
        setIsLoading(false);
      }
      else
        setIsLoading(false);
    };

    getWalletAddress();
  }, [loggedIn]);

  return loggedIn && walletAddress
    ? <DropDown label={walletAddress} />
    : <Button gradientMonochrome="lime" onClick={login} disabled={isLoading}>Connect</Button>
}

export default UserInfo;