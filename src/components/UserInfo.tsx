"use client";

import { useWeb3Auth } from '@/components/Web3AuthProvider';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function UserInfo() {
  const { loggedIn, login, getAccounts, logout } = useWeb3Auth();

  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    if (loggedIn) {
      getAccounts().then((accounts: string) => {
        setWalletAddress(accounts[0]);
      });
    }
  }, [loggedIn]);

  return loggedIn 
    ? <>
        {walletAddress}
        <Button onClick={logout}>Disconnect</Button>
      </>
    : <Button onClick={login}>Connect</Button>

}
