import { Button } from "flowbite-react";

const BackButton: React.FC<{ name: string; href: string; }> = (props) => {
    return <Button href={props.href}>{props.name}</Button>
}

export default BackButton;