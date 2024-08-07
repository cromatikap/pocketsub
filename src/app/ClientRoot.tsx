"use client";

import "./globals.css";
import Footer from "@/components/Footer";

import Web3AuthConnectorInstance from "@/components/Web3AuthProvider";
import { createConfig, http, useAccount, useConnect, WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient() 

const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
  connectors: [
    Web3AuthConnectorInstance([baseSepolia]),
  ],
});

const ClientRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
        <Footer />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default ClientRoot;