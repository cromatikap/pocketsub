import { abi, CONTRACT_ADDRESS } from "@/utils";
import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import web3 from "web3";

const ONE_DAY_IN_SECONDS = 24 * 60 * 60;
const DEFAULT_IMAGE_URL = "https://arweave.net/9u0cgTmkSM25PfQpGZ-JzspjOMf4uGFjkvOfKjgQnVY";

const AddSubscriptionCard = () => {
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const [invalidPrice, setInvalidPrice] = useState(true);
  const [invalidName, setInvalidName] = useState(true);
  const [invalidDuration, setInvalidDuration] = useState(true);

  const { writeContract } = useWriteContract()

  const handleSubmit = () => {
    const img = imageURL === "" ? DEFAULT_IMAGE_URL : imageURL;

    writeContract({
      abi,
      address: CONTRACT_ADDRESS,
      functionName: "setSubscription",
      args: [
        name,
        web3.utils.toWei(price, "ether"),
        Number(duration) * ONE_DAY_IN_SECONDS,
        img
      ]
    });
  }

  const handleChangeImageURL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageURL(e.target.value);
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setInvalidName(e.target.value === "");
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
    const isValid = e.target.value !== "" && /^[0-9]+(\.[0-9]+)?$/.test(e.target.value);
    setInvalidPrice(!isValid);
  }

  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(e.target.value);
    setInvalidDuration(!/^[0-9]+$/.test(e.target.value));
  }

  return (
    <Card className="max-w-sm sm:m-auto m-4 my-4">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image_url" value="Image URL" />
          </div>
          <TextInput
            onChange={handleChangeImageURL}
            value={imageURL}
            id="image_url"
            type="text"
            placeholder="https://..."
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Subscription name" />
          </div>
          <TextInput
            onChange={handleChangeName}
            value={name}
            color={invalidName ? "failure" : "success"}
            id="name"
            type="text"
            placeholder="pass 1 week"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Subscription price (ETH)" />
          </div>
          <TextInput
            onChange={handleChangePrice}
            value={price}
            color={invalidPrice ? "failure" : "success"}
            id="price"
            type="text"
            placeholder=""
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="duration" value="Duration in day(s)" />
          </div>
          <TextInput
            onChange={handleChangeDuration}
            value={duration}
            color={invalidDuration ? "failure" : "success"}
            id="duration"
            type="number"
            placeholder=""
            required
          />
        </div>
        <Button gradientMonochrome="purple" onClick={handleSubmit} disabled={invalidPrice || invalidName || invalidDuration}>Create new subscription</Button>
      </form>
    </Card>
  );
}

export default AddSubscriptionCard;