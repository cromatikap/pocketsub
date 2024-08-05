export default function Page({ params }: { params: { shopAddress: string } }) {
  return <>
    Shop page, wallet address: {params.shopAddress}
  </>
}