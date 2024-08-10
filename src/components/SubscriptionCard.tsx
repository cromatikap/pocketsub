import { abi, CONTRACT_ADDRESS } from "@/utils";
import { Button, Card } from "flowbite-react";
import { RiNftLine, RiDeleteBin2Line } from "react-icons/ri";
import { useWriteContract } from "wagmi";

const SubscriptionCard = ({isOwner, data}: { isOwner: boolean, data: {image_url: string, title: string, price: number}}) => {
  const { writeContract } = useWriteContract()

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
          ${data.price}
        </span>
        {isOwner
          ? <Button onClick={handleDelete} gradientMonochrome="pink" size="xl">
              <RiDeleteBin2Line onClick={handleDelete} className="mr-2 h-5 w-5" />
              Delete
            </Button>
          : <Button size="xl" gradientMonochrome="cyan">
              <RiNftLine className="mr-2 h-5 w-5" />
              Mint subscription
            </Button>
        }
      </div>
    </Card>
  );
}

export default SubscriptionCard;