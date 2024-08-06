const shrinkWalletAddress = (walletAddress: string) => {
  const start = walletAddress.slice(0, 6);
  const end = walletAddress.slice(-4);
  return `${start}...${end}`;
}

export { shrinkWalletAddress };