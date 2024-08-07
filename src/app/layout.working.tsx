"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

// import { Web3AuthProvider } from "@/components/Web3AuthProvider";

import Web3AuthConnectorInstance from "@/components/Web3AuthProvider";
import { coinbaseWallet, walletConnect } from "wagmi/connectors";
import { createConfig, http, useAccount, useConnect, WagmiProvider } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient() 

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Pocket Sub",
//   description: "on-chain subscriptions market application",
// };

const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(),
  },
  connectors: [
    Web3AuthConnectorInstance([baseSepolia]),
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <Web3AuthProvider> */}
          <main className="flex min-h-screen flex-col justify-between">
            <div>
              {children}
            </div>
            <Footer />
          </main>
        {/* </Web3AuthProvider> */}
        {/* </WagmiProvider> */}
        </QueryClientProvider>
    </WagmiProvider>
      </body>
    </html>
  );
}
