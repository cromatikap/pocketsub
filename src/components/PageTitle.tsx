"use client";

import { GoCopy } from "react-icons/go";

export default function PageTitle({ params }: { params: { title: string, walletAddress?: string } }) {

  const copyToClipboard = () => {
    alert("todo")
  }

  return (
    <div className="flex" onClick={copyToClipboard}>
      <div>
        <div>{params.title}</div>
        <div>{params.walletAddress}</div>
      </div>
      <div>
        <GoCopy size={24} />
      </div>
    </div>
  );
}
