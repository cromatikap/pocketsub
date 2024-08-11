import contract from "@/Pocketsub.json";
import web3 from "web3";

const { abi } = contract;

const CONTRACT_ADDRESS = "0xD180d0697F533D921F28A92Aa1cdE775Bbff4B95";

const shrinkWalletAddress = (walletAddress: string) => {
  const start = walletAddress.slice(0, 6);
  const end = walletAddress.slice(-4);
  return `${start}...${end}`;
}

const processSubscriptions = (data: any, ethToUsdRate: number) => {

  return data.map((item: any) => {
    const priceETH = web3.utils.fromWei(item.price, "ether");
    const priceUSD = (parseFloat(priceETH) * ethToUsdRate).toFixed(0);

    return {
      image_url: item.imageURL,
      title: item.resourceId,
      priceUSD: priceUSD,
      priceWEI: item.price
    }
  });
};

export { abi, CONTRACT_ADDRESS, shrinkWalletAddress, processSubscriptions };