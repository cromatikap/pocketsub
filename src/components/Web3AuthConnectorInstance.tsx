"use client";

import { Web3AuthConnector } from "@web3auth/web3auth-wagmi-connector";
import { Web3Auth } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK, WALLET_ADAPTERS } from "@web3auth/base";
import { Chain } from "wagmi/chains";
import { MetamaskAdapter } from '@web3auth/metamask-adapter';
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";

const clientId = "BG5M9iC4rdpq6dRhLZVaSWBF_paF0V-0mL1IntPXa_5PO_Ama0u56E33MdukKSStBxajd-xxRydviLyM4BNkP3k";

// const chainConfig = {
//   chainId: "0x14A34",
//   rpcTarget: "https://sepolia.base.org",
//   chainNamespace: CHAIN_NAMESPACES.EIP155,
//   displayName: "Base Sepolia",
//   blockExplorerUrl: "https://sepolia.basescan.org",
//   ticker: "ETH",
//   tickerName: "ETH",
//   logo: "https://images.toruswallet.io/base.svg",
// };

const chainConfig = {
  chainId: "0x2105", //8453
  rpcTarget: "https://mainnet.base.org",
  chainNamespace: CHAIN_NAMESPACES.EIP155,
  displayName: "Base Mainnet",
  blockExplorerUrl: "https://basescan.org",
  ticker: "ETH",
  tickerName: "ETH",
  logo: "https://images.toruswallet.io/base.svg",
};

export const Web3AuthConnectorInstance = (chains: Chain[]) => {
  const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: { chainConfig },
  });

  const web3AuthInstance = new Web3Auth({
    clientId,
    chainConfig,
    privateKeyProvider,
    uiConfig: {
      appName: "Pocket Sub",
      logoLight: "/logo.png",
      logoDark: "/logo.png",
      primaryButton: "externalLogin"
    },
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    enableLogging: true,
  });

  web3AuthInstance.configureAdapter(new MetamaskAdapter({}));

  const walletServicesPlugin = new WalletServicesPlugin({
    walletInitOptions: {
      whiteLabel: {
        showWidgetButton: true,
      }
    }
  });
  web3AuthInstance.addPlugin(walletServicesPlugin);

  const modalConfig = {
    [WALLET_ADAPTERS.OPENLOGIN]: {
      label: "openlogin",
      // setting it to false will hide all social login methods from modal.
      showOnModal: true,
    },
  }

  return Web3AuthConnector({
    web3AuthInstance,
    modalConfig,
  });
};

export default Web3AuthConnectorInstance;