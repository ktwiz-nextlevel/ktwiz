'sever client'

import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PLAYER_BANNER_DATA } from '@/contants/player'

import CustomSquadPage from './custom-squad-page'
export const metadata = {
  title: '커스텀 스쿼드',
  description:
    'kt wiz의 다음 스쿼드를 만들어 주세요! 드래그 앤 드랍 기능으로 쉽게 나만의 커스텀 스쿼드를 짤 수 있어요!',
}

export default function CustomSquad() {
  return (
    <>
      <BannerTest />
      <CustomSquadPage />
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="커스텀 스쿼드"
        subtitle="나만의 커스텀 스쿼드를 만들어 보세요!"
      />
      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
