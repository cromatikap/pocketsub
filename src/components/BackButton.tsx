import { Button } from "flowbite-react";
import { HiOutlineArrowLeft } from "react-icons/hi";

const BackButton: React.FC<{ name: string; href: string; }> = (props) => {
  return <div className="flex m-2">
    <Button href={props.href} size="xs">
      <HiOutlineArrowLeft className="mr-2 h-4 w-4" />
      {props.name}
    </Button>
  </div> 
}

export default BackButton;