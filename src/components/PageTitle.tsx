"use client";

import { Clipboard } from "flowbite-react";

export default function PageTitle({ params }: { params: { title: string, walletAddress?: string } }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex flex-col w-full">
        <div>{params.title}</div>
        <div className="truncate">{params.walletAddress}</div>
      </div>
      {params.walletAddress && (
        <Clipboard.WithIcon
          theme={{ base: "inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700" }}
          valueToCopy={params.walletAddress} />
      )}
    </div>
  );
}