import { Button, Card, Label, TextInput } from "flowbite-react";

const AddSubscriptionCard = () => {
  return (
    <Card className="max-w-sm sm:m-auto m-4 my-4">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image_url" value="Image URL" />
          </div>
          <TextInput id="image_url" type="text" placeholder="image url" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Subscription name" />
          </div>
          <TextInput id="name" type="text" placeholder="" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Subscription price (ETH)" />
          </div>
          <TextInput id="price" type="text" placeholder="" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="duration" value="Duration in day(s)" />
          </div>
          <TextInput id="duration" type="number" placeholder="" required />
        </div>
        <Button gradientMonochrome="purple">Create new subscription</Button>
      </form>
    </Card>
  );
}

export default AddSubscriptionCard;