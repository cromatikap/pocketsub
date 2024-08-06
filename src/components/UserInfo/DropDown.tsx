"use client";

import { Dropdown } from "flowbite-react";
import { useWeb3Auth } from "../Web3AuthProvider";
import { shrinkWalletAddress } from "@/utils";

const DropDown: React.FC<{
  label: string
}> = (props) => {
  const { logout } = useWeb3Auth();

  return (
    <Dropdown label={shrinkWalletAddress(props.label)} dismissOnClick={false}>
      <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
    </Dropdown>
  );
}

export default DropDown;