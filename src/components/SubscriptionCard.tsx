import { Card } from "flowbite-react";

const SubscriptionCard = ({isOwner, data}: { isOwner: boolean, data: {image_url: string, title: string, price: number}}) => {
  console.log(isOwner);
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
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Mint subscription
        </a>
      </div>
    </Card>
  );
}

const debug = {
  border: '1px solid red',
  padding: '5px',
  margin: '5px'
}

export default SubscriptionCard;