import StadiumIframe from '@/components/wizpark/stadium-iframe'
import { Suspense } from 'react'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import WizparkSection from '@/components/wizpark/wizpark-section'
import WizparkDescription from '@/components/wizpark/wizpark-description'
import IframeBanner from '@/components/wizpark/iframe-banner'
export const metadata = {
  title: 'KT Wiz / 구장소개',
  description:
    '수원 구장을 소개합니다. 3D 구장 모델링을 통해 쉽고 재미있게 수원 구장 구조를 살펴보세요!',
}
export default function Page() {
  return (
    <>
      <Breadcrumb />
      <WizparkDescription />
      <WizparkSection>
        <StadiumIframe />
      </WizparkSection>
    </>
  )
}

function Breadcrumb() {
  return (
    <div className="mb-2 mt-[50px] flex w-full justify-end border-b-2 border-[#ec0a0b] p-2">
      <Breadcrumbs
        pages={['HOME', 'Suwon kt wiz park', 'kt wiz park', '구장 소개']}
      />
    </div>
  )
}
