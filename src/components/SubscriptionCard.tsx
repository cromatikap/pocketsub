import { SubscriptionProps } from "@/types";
import { abi, CONTRACT_ADDRESS } from "@/utils";
import { Button, Card } from "flowbite-react";
import { RiNftLine, RiDeleteBin2Line } from "react-icons/ri";
import { useAccount, useWriteContract } from "wagmi";

const SubscriptionCard = ({isOwner, shopAddress, data}: { isOwner: boolean, shopAddress: string, data: SubscriptionProps}) => {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  console.log(data);

  const handleDelete = async () => {
    writeContract({
      abi,
      address: CONTRACT_ADDRESS,
      functionName: "deleteSubscription",
      args: [
        data.title
      ]
    });
  };

  const handleMint = async () => {
    writeContract({
      abi,
      address: CONTRACT_ADDRESS,
      functionName: "mint",
      args: [
        shopAddress,
        data.title,
        address
      ],
      value: data.priceWEI
    });
  }

  return (
    <Card
      className="max-w-sm m-4"
      imgAlt={data.title}
      imgSrc={data.image_url}
    >
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {data.title}
      </h5>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${data.priceUSD}
        </span>
        {isOwner
          ? <Button onClick={handleDelete} gradientMonochrome="pink" size="xl">
              <RiDeleteBin2Line onClick={handleDelete} className="mr-2 h-5 w-5" />
              Delete
            </Button>
          : <Button onClick={handleMint} size="sm" gradientMonochrome="cyan">
              <RiNftLine className="mr-2 h-5 w-5" />
              Mint subscription
            </Button>
        }
      </div>
    </Card>
  );
}

export default SubscriptionCard;