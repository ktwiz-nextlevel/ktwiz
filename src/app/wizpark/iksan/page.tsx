import StadiumIframe from '@/components/wizpark/stadium-iframe'
import { Suspense } from 'react'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import WizparkSection from '@/components/wizpark/wizpark-section'
import WizparkDescription from '@/components/wizpark/wizpark-description'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <Breadcrumb />
      <WizparkSection>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.8048142598!2d127.00709357666054!3d37.299759539379345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b5db07ba6e26f%3A0xf8d00419ae70fbb8!2z7IiY7JuQS1TsnITspojtjIztgaw!5e0!3m2!1sko!2skr!4v1735822826125!5m2!1sko!2skr"
          width="1100"
          height="662"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <Image
          src="/images/wiz-park/iksan-map.png"
          alt="iksan map"
          width={1100}
          height={383}
          className="mt-10"
        />
      </WizparkSection>
    </>
  )
}

function Breadcrumb() {
  return (
    <div className="mb-2 mt-[50px] flex w-full justify-end border-b-2 border-[#ec0a0b] p-2">
      <Breadcrumbs pages={['HOME', 'Suwon kt wiz park', '익산야구장']} />
    </div>
  )
}
