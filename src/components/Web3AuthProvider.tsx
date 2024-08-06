"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, IProvider } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { MetamaskAdapter } from '@web3auth/metamask-adapter';

const clientId = "BG5M9iC4rdpq6dRhLZVaSWBF_paF0V-0mL1IntPXa_5PO_Ama0u56E33MdukKSStBxajd-xxRydviLyM4BNkP3k";

const chainConfig = {
  chainId: "0x14A34",
  rpcTarget: "https://sepolia.base.org",
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: "Base Sepolia",
  blockExplorerUrl: "https://sepolia.basescan.org",
  ticker: "ETH",
  tickerName: "ETH",
  logo: "https://images.toruswallet.io/base.svg",
};

const Web3AuthContext = createContext<any>(null);

export const useWeb3Auth = () => useContext(Web3AuthContext);

const privateKeyProvider = new EthereumPrivateKeyProvider({
  config: { chainConfig },
});

const web3auth = new Web3Auth({
  clientId,
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,
  privateKeyProvider,
});

web3auth.configureAdapter(new MetamaskAdapter({}));

const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<IProvider | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        await web3auth.initModal();
        setProvider(web3auth.provider);

        if (web3auth.connected) {
          setLoggedIn(true);
        }
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    try {
      const web3authProvider = await web3auth.connect();
      setProvider(web3authProvider);
      if (web3auth.connected) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.log("web3auth modal closed");
    }
  };

  const logout = async () => {
    try {
      await web3auth.logout();
      setProvider(null);
      setLoggedIn(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const getAccounts = async (): Promise<string[]> => {
    if (!provider) {
      throw new Error('Provider not initialized');
    }
    try {
      const accounts = await provider.request({ method: 'eth_accounts' });
      return accounts as string[];
    } catch (error) {
      console.error('Failed to get accounts:', error);
      return [];
    }
  };

  return (
    <Web3AuthContext.Provider value={{ provider, loggedIn, login, logout, getAccounts }}>
      {children}
    </Web3AuthContext.Provider>
  );
};

export { Web3AuthProvider };