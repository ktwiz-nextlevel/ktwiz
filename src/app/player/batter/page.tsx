'sever client'

import BatterPage from './batter-page'
import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import { PLAYER_BANNER_DATA } from '@/contants/player'

export const metadata = {
  title: '타자',
  description:
    '타자의 이름, 포지션, 생년월일, 체격, 시즌 기록 등을 살펴보세요!',
}

export default function Batter() {
  return (
    <>
      <BannerTest />
      <BatterPage />
    </>
  )
}

const BannerTest = () => {
  return (
    <Banner>
      <Banner.Heading
        title="타자"
        subtitle="타자 관련 정보 및 데이터를 확인하세요"
      />

      <TabMenu tabs={PLAYER_BANNER_DATA['/player'].tabs} />
    </Banner>
  )
}
