
import PageTitle from '@/components/PageTitle';
import UserInfo from '@/components/UserInfo';

export default function Page() {

  return <>
    <div className="flex justify-between items-start p-2">
      <PageTitle params={{ title: "Shop", walletAddress: "0x612d...ddc5" }} />
      <UserInfo />
    </div>
  </>
}