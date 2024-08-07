import BackButton from "@/components/BackButton";
import QRCode from "react-qr-code";

export default function Page({ params }: { params: { shopAddress: string } }) {

  const userAddress = "0x123";

  return (
    <>
      <BackButton href={`/${params.shopAddress}`} name='Back to shop'/>
      <QRCode value={userAddress} className="max-w-lg h-auto w-full" />
      <p className="font-bold">Wallet Address {userAddress}</p>
    </>
  );
}
