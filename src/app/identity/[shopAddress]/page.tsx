import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";
import QRCode from "react-qr-code";

export default function Page({ params }: { params: { shopAddress: string } }) {

  const userAddress = "0x90d87CfCeF0d8058BfDb2862C00B5525556253F2";

  return (
    <>
      <div className="flex justify-between items-start p-2">
        <PageTitle title="Identity" />
        <BackButton href={`/${params.shopAddress}`} name='Back to store'/>
      </div>
      <div className="flex flex-col gap-8 p-8 m-auto items-center">
        <QRCode value={userAddress} className="max-w-lg h-auto w-full" />
        <div className="text-xs font-mono">{userAddress}</div>
      </div>
    </>
  );
}
