export default function Page({ params }: { params: { shopAddress: string } }) {
  return(
    <>Identity page, shop address: {params.shopAddress}</>
  );
}