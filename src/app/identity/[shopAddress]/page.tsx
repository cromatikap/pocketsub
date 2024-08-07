import QRCode from "react-qr-code";

export default function Page({ params }: { params: { shopAddress: string } }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-8 my-10">
      <QRCode value={params.shopAddress} className="max-w-lg h-auto w-full" />
      <p className="font-bold">Wallet Address {params.shopAddress}</p>
    </div>
  );
}
