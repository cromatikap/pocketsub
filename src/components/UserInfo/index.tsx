"use client";

import Web3AuthConnectorInstance from '@/components/Web3AuthProvider';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import DropDown from './DropDown';
import { useAccount, useConnect } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';

const UserInfo = () => {
  const { isConnected, address } = useAccount();
  const { connect } = useConnect();

  return isConnected && address
    ? <DropDown label={address} />
    : <Button gradientMonochrome="lime" onClick={() => connect({connector: Web3AuthConnectorInstance([baseSepolia])})}>Connect</Button>
}

export default UserInfo;