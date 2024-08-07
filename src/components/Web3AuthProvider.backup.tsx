"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, IProvider, WALLET_ADAPTERS } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { MetamaskAdapter } from '@web3auth/metamask-adapter';
import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";

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
  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  privateKeyProvider,
  uiConfig: {
    appName: "Pocket Sub",
    logoLight: "/logo.png",
    logoDark: "/logo.png",
    primaryButton: "externalLogin"
  },
});

const walletServicesPlugin = new WalletServicesPlugin({
  walletInitOptions: {
    whiteLabel: {
      showWidgetButton: true,
    }
  }
});

web3auth.addPlugin(walletServicesPlugin);

web3auth.configureAdapter(new MetamaskAdapter({}));

const modalConfig = {
  [WALLET_ADAPTERS.OPENLOGIN]: {
    label: "openlogin",
    loginMethods: {
      facebook: {
        // it will hide the facebook option from the Web3Auth modal.
        name: "facebook login",
        showOnModal: false,
      },
    },
    // setting it to false will hide all social login methods from modal.
    showOnModal: true,
  },
}

Web3AuthConnector(web3auth)

export const Web3AuthProvider = ({ children }: { children: React.ReactNode }) => {
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

  const isConnected = (): boolean => {
    return web3auth.connected;
  }

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
    <Web3AuthContext.Provider value={{ provider, loggedIn, login, logout, getAccounts, isConnected }}>
      {children}
    </Web3AuthContext.Provider>
  );
};
