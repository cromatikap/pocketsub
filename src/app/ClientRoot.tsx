"use client";

import "./globals.css";
import Footer from "@/components/Footer";

import Web3AuthConnectorInstance from "@/components/Web3AuthConnectorInstance";
import { createConfig, http, useAccount, useConnect, WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { fetchETHtoUSD } from '@/getETHtoUSD';
import { useEffect } from "react";

const queryClient = new QueryClient() 

export const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
  connectors: [
    Web3AuthConnectorInstance([baseSepolia]),
  ],
});

const ClientRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    fetchETHtoUSD(); // Fetches the rate once when the app loads
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
        <Footer />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default ClientRoot;