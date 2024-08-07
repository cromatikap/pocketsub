import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const BackButton: React.FC<{ name: string; href: string; }> = (props) => {
  return <Button href={props.href}>
    <HiOutlineArrowLeft className="mr-2 h-5 w-5" />
    {props.name}
  </Button>
}

export default BackButton;