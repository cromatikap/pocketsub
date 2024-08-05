import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Web3AuthProvider } from "@/components/Web3AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pocket Sub",
  description: "on-chain subscriptions market application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3AuthProvider>
          <main className="flex min-h-screen flex-col justify-between">
            {children}
          </main>
        </Web3AuthProvider>
      </body>
    </html>
  );
}
