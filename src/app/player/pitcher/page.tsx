'sever client'

import Banner from '@/components/common/banner/banner'
import { PLAYER_BANNER_DATA } from '@/contants/player'
import TabMenu from '@/components/common/tab-menu/tab-menu'

import PitcherPage from './pitcher-page'
export const metadata = {
  title: '투수',
  description:
    '투수의 이름, 포지션, 생년월일, 체격, 시즌 기록 등을 살펴보세요!',
}

export default function Pitcher() {
  return (
    <>
      <BannerTest />
      <PitcherPage />
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="투수"
        subtitle="투수 관련 정보 및 데이터를 확인하세요"
      />
      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
