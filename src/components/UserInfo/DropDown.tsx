"use client";

import { Dropdown } from "flowbite-react";
import { shrinkWalletAddress } from "@/utils";
import { useDisconnect } from "wagmi";

const DropDown: React.FC<{
  label: string
}> = (props) => {
  const { disconnect } = useDisconnect();

  return (
    <Dropdown label={shrinkWalletAddress(props.label)} gradientMonochrome="lime" dismissOnClick={true}>
      <Dropdown.Item onClick={() => disconnect()}>Logout</Dropdown.Item>
    </Dropdown>
  );
}

export default DropDown;