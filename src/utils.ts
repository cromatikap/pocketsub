import contract from "@/pocketsub.json";

const { abi } = contract;

const CONTRACT_ADDRESS = "0x78F120AA24493637fc6Be69C946F98AF1C84A528";

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