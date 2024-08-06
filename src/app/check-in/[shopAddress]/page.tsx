
const Page = ({ params }: { params: { shopAddress: string } }) => {
  return(
    <>Check-in page, shop address: {params.shopAddress}</>
  );
}

export default Page;