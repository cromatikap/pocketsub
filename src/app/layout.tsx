import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import ClientRoot from "./ClientRoot";
import { ToastContainer } from "react-toastify";

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
        <main className="flex min-h-screen flex-col justify-between">
          <ClientRoot>
            {children}
          </ClientRoot>
          <ToastContainer />
        </main>
      </body>
    </html>
  );
}
