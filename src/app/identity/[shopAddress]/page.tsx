import BackButton from "@/components/BackButton";

export default function Page({ params }: { params: { shopAddress: string } }) {
  return(
    <>Identity page, shop address: {params.shopAddress}
    <div>
      <BackButton href='/shopAddress' name='Back to shop'/>
    </div>
    </>
  );
}