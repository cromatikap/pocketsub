
"use client";

import { Footer as FooterFlowbite } from "flowbite-react";
import { BsGithub, BsTwitter, BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterFlowbite>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <FooterFlowbite.Title title="made by Ipal team" />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterFlowbite.Icon href="https://github.com/cromatikap/pocketsub" icon={BsGithub} />
          <FooterFlowbite.Icon href="https://t.me/LukkiinsightBTC" icon={BsTelegram} />
          <FooterFlowbite.Icon href="https://twitter.com/ipalNetwork" icon={BsTwitter} />
        </div>
      </div>
    </FooterFlowbite>
  );
}

export default Footer;