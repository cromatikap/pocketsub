let ETHtoUSD: null | number = null;

export const fetchETHtoUSD = async () => {
  if (ETHtoUSD === null) {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
      const json = await response.json();
      ETHtoUSD = json.ethereum.usd;
    } catch (error) {
      console.error("Failed to fetch ETH to USD conversion rate", error);
    }
  }
  return ETHtoUSD;
};

export const getETHtoUSD = () => ETHtoUSD;
