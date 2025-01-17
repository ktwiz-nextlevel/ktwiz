import StadiumIframe from '@/components/wizpark/stadium-iframe'
import { Suspense } from 'react'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import WizparkSection from '@/components/wizpark/wizpark-section'
import WizparkDescription from '@/components/wizpark/wizpark-description'
import Image from 'next/image'

export const metadata = {
  title: 'KT Wiz / 구장 위치',
  description:
    '수원 kt wiz park 위치를 안내합니다. 구글 지도로 구장의 위치, 이동수단인 버스, 지하철 노선을 살펴보세요!',
}
export default function Page() {
  return (
    <>
      <Breadcrumb />
      <WizparkSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.8048142598!2d127.00709357666054!3d37.299759539379345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5db07ba6e26f%3A0xf8d00419ae70fbb8!2z7IiY7JuQS1TsnITspojtjIztgaw!5e0!3m2!1sko!2skr!4v1735822826125!5m2!1sko!2skr"
          width="1100"
          height="662"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Image
          src="/images/wiz-park/suwon-map.png"
          alt="suwon map"
          width={1100}
          height={475.38}
          className="mt-10"
        />
      </WizparkSection>
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
