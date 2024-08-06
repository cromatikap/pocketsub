"use client";

import { useWeb3Auth } from '@/components/Web3AuthProvider';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';

const UserInfo = () => {
  const { loggedIn, login, getAccounts } = useWeb3Auth();

  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (loggedIn) {
      getAccounts().then((accounts: string) => {
        setWalletAddress(accounts[0]);
      });
    }
  }, [loggedIn]);

  return loggedIn && walletAddress
    ? <DropDown label={walletAddress} />
    : <Button gradientMonochrome="lime" onClick={login}>Connect</Button>
}

export default UserInfo;