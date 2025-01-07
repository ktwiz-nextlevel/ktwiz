import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import WizparkSection from '@/components/wizpark/wizpark-section'
import WizparkDescription from '@/components/wizpark/wizpark-description'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <WizparkSection>
        <Image
          src="/images/wiz-park/wiz-park-logo.png"
          alt="wiz park logo"
          width={341}
          height={61}
          className="mb-8 flex-col"
        />
        <Image
          src="/images/wiz-park/wiz-park-seat.png"
          alt="wiz park seat"
          width={1100}
          height={1955.64}
          className="flex-col"
        />
      </WizparkSection>
    </>
  )
}

function Breadcrumb() {
  return (
    <div className="mb-2 mt-[50px] flex w-full justify-end border-b-2 border-[#ec0a0b] p-2">
      <Breadcrumbs
        pages={['HOME', 'Suwon kt wiz park', 'kt wiz park', '구장 안내도']}
      />
    </div>
  )
}
