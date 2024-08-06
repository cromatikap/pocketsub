import BackButton from "@/components/BackButton";
import PageTitle from "@/components/PageTitle";

const Page = ({ params }: { params: { shopAddress: string } }) => {

  return(
    <>
    <PageTitle title="Check-in" walletAddress={params.shopAddress} />
    Check-in page, shop address: {params.shopAddress}
    <div>
      <BackButton href='/shopAddress' name='Back to shop'/>
    </div>
   
    </>
  );
}

export default Page;