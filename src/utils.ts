const CONTRACT_ADDRESS = "0xccd89747Cbf7731E84Baa1C9f1Ec29922A8768D8";

const shrinkWalletAddress = (walletAddress: string) => {
  const start = walletAddress.slice(0, 6);
  const end = walletAddress.slice(-4);
  return `${start}...${end}`;
}

export { CONTRACT_ADDRESS, shrinkWalletAddress };