import StadiumIframe from '@/components/wizpark/stadium-iframe'
import { Suspense } from 'react'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import WizparkSection from '@/components/wizpark/wizpark-section'
import WizparkDescription from '@/components/wizpark/wizpark-description'

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <WizparkSection>
        <StadiumIframe />
      </WizparkSection>
      <WizparkDescription />
    </>
  )
}

function Breadcrumb() {
  return (
    <div className="mb-2 mt-[50px] flex w-full justify-end border-b-2 border-[#ec0a0b] p-2">
      <Breadcrumbs pages={['HOME', 'Suwon kt wiz park', '찾아오기']} />
    </div>
  )
}
