"use client";
import { shrinkWalletAddress } from "@/utils";
import { GoCopy } from "react-icons/go";

const PageTitle: React.FC<{
  title: string;
  walletAddress?: string;
}> = (props) => {

  const copyToClipboard = () => {
    alert("todo")
  }

  return (
    <div className="flex" onClick={copyToClipboard}>
      <div>
        <div>{props.title}</div>
        <div>{props.walletAddress && shrinkWalletAddress(props.walletAddress)}</div>
      </div>
      <div>
        {props.walletAddress && (<GoCopy size={24} />)}
      </div>
    </div>
  );
}

export default PageTitle;
