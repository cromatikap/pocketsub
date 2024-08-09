import contract from "@/pocketsub-contract.json";

const { abi } = contract;

const CONTRACT_ADDRESS = "0xE691973EC4eb9e8D0405ec9d15b4F26dd13A6633";

const shrinkWalletAddress = (walletAddress: string) => {
  const start = walletAddress.slice(0, 6);
  const end = walletAddress.slice(-4);
  return `${start}...${end}`;
}

const processSubscriptions = (data: any) => {
  return data.map((item: any) => ({
    image_url: item.imageURL,
    title: item.resourceId,
    price: Number(item.price)
  }));
};


export { abi, CONTRACT_ADDRESS, shrinkWalletAddress, processSubscriptions };