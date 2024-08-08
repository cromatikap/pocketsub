"use client";
import { shrinkWalletAddress } from "@/utils";
import { Badge } from "flowbite-react";
import { GoCopy } from "react-icons/go";

const PageTitle: React.FC<{
  title: string;
  walletAddress?: string;
}> = (props) => {

  const copyToClipboard = () => {
    if(props.title === "Check-in")
      navigator.clipboard.writeText("https://pocketsub.io/check-in/" + props.walletAddress);
    else if(props.title === "Store")
      navigator.clipboard.writeText("https://pocketsub.io/" + props.walletAddress);
  }

  return (
    <div className="flex gap-2" onClick={copyToClipboard}>
      <div>
        <div className="font-bold text-2xl">{props.title}</div>
        <Badge color="success" size="xl" className="font-mono">
          {props.walletAddress && shrinkWalletAddress(props.walletAddress)}
        </Badge>
      </div>
      <div>
        {props.walletAddress && (<GoCopy size={28} />)}
      </div>
    </div>
  );
}

export default PageTitle;
