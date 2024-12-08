'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from '@heroicons/react/20/solid'
import { ClientPageRoot } from 'next/dist/client/components/client-page'
import Link from 'next/link'
interface LnbData {
  name: string
  href: string
}
interface MenuData {
  gnb: string
  href: string
  lnb: LnbData[] | null
}

type LnbDataArray = (LnbData[] | null)[]

const MENU_DATA: MenuData[] = [
  {
    gnb: 'Kt wiz',
    href: '/ktwiz',
    lnb: [
      {
        name: 'kt wiz는?',
        href: '/about',
      },
      {
        name: '구단 BI',
        href: '/bi/symbol',
      },
      {
        name: '회원 정책',
        href: '/policy/regular',
      },
      {
        name: '스폰서',
        href: '/sponsor',
      },
      {
        name: '월페이퍼',
        href: '/wallpaper',
      },
    ],
  },
  {
    gnb: 'wiz park',
    href: '/wizpark',
    lnb: [
      {
        name: '수원 kt wiz park',
        href: '/intro',
      },
      {
        name: '주차 예약',
        href: '/parking',
      },
      {
        name: '찾아오기',
        href: '/location',
      },
      {
        name: '익산야구장',
        href: '/iksan',
      },
    ],
  },
  {
    gnb: 'Game',
    href: '/game',
    lnb: [
      {
        name: '정규리그',
        href: '/regular/schedule',
      },
      {
        name: '퓨쳐스리그',
        href: '/futures/schedule',
      },
    ],
  },
  {
    gnb: 'Player',
    href: '/player',
    lnb: [
      {
        name: '코칭스텝',
        href: '/coach',
      },
      {
        name: '투수',
        href: '/pitcher',
      },
      {
        name: '타자',
        href: '/catcher',
      },
      {
        name: '응원단',
        href: '/cheer',
      },
      {
        name: '응원가',
        href: '/song',
      },
      {
        name: '응원가 저작권',
        href: '/song-copyright',
      },
    ],
  },
  {
    gnb: 'Media',
    href: '/media',
    lnb: [
      {
        name: 'wiz 뉴스',
        href: '/wiznews',
      },
      {
        name: 'wiz 스토리',
        href: '/wizstory',
      },
      {
        name: '시구자 정보',
        href: '/firstpitch',
      },
      {
        name: 'wiz 포토',
        href: '/photos',
      },
      {
        name: '하이라이트',
        href: '/highlight',
      },
      {
        name: 'Live 영상모음',
        href: '/live/pts',
      },
    ],
  },
  {
    gnb: 'Shop',
    href: '/shop',
    lnb: null,
  },
  {
    gnb: '스폰서',
    href: 'https://b2b.ktwiz.co.kr/',
    lnb: null,
  },
  {
    gnb: '티켓구매',
    href: '/ticket',
    lnb: [
      {
        name: '티켓 예매',
        href: '/reservation',
      },
      {
        name: '단체관람',
        href: '/group',
      },
      {
        name: '입장 및 좌석 정보',
        href: '/seatmap',
      },
    ],
  },
]
const LNB_LIST: LnbDataArray = MENU_DATA.map((menu) =>
  !menu.lnb ? null : menu.lnb,
)
console.log(LNB_LIST)

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding where your traffic is coming from',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers with our engagement tool',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: SquaresPlusIcon,
  },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function WithFullWidthFlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpened, setIsOpend] = useState(false)
  function handleMouseOver() {
    console.log('동작')
    setIsOpend(true)
  }
  console.log('isOpened', isOpened)
  return (
    <header className="relative isolate z-10 w-full bg-white">
      <nav
        aria-label="Global"
        className="items-between mx-auto flex max-w-7xl justify-between p-6 lg:px-8"
      >
        {/* lg-로고 */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="로고"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        {/* lg-GNB */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="lg:flex lg:gap-x-1" onMouseOver={handleMouseOver}>
            {MENU_DATA.map((menu, idx) => (
              <PopoverButton
                key={menu.gnb + idx}
                className="box-border flex items-center gap-x-1 bg-white text-sm/4 font-semibold text-gray-900 outline-none hover:border-white active:outline-none active:ring-0"
              >
                {menu.gnb}
              </PopoverButton>
            ))}
            {isOpened && (
              <PopoverPanel
                className={`absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in ${isOpened ? 'data-[enter]:duration-200 data-[enter]:ease-out' : 'data-[leave]:ease-in'} `}
                transition
              >
                <div className="mx-auto flex max-w-7xl justify-center gap-x-3 px-6 py-10 lg:px-8 xl:gap-x-3">
                  {LNB_LIST?.map((menu, idx) => (
                    <div
                      key={idx + 'lnb'}
                      className="group relative left-2 w-[70px] text-sm/6 hover:bg-gray-50 lg:w-[70px]"
                    >
                      {menu?.map((lnb, idx) => (
                        <Link
                          key={lnb.name + idx}
                          href={lnb.href}
                          className="mb-3 block text-xs font-normal text-gray-900 hover:font-bold hover:text-black"
                        >
                          {lnb.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50">
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div> */}
                  </div>
                </div>
              </PopoverPanel>
            )}
          </Popover>
        </PopoverGroup>
        {/* login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* sm */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {MENU_DATA.map((menu, idx) => (
                  <Disclosure as="div" className="-mx-3" key={menu.gnb + idx}>
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg bg-white py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900">
                      {menu.gnb}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
