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
        href: '/ktwiz/about',
      },
      {
        name: '구단 BI',
        href: '/ktwiz/bi/symbol',
      },
      {
        name: '회원 정책',
        href: '/ktwiz/policy/regular',
      },
      {
        name: '스폰서',
        href: '/ktwiz/sponsor',
      },
      {
        name: '월페이퍼',
        href: '/ktwiz/wallpaper',
      },
    ],
  },
  {
    gnb: 'wiz park',
    href: '/wizpark',
    lnb: [
      {
        name: '수원 kt wiz park',
        href: '/wizpark/intro',
      },
      {
        name: '주차 예약',
        href: '/wizpark/parking',
      },
      {
        name: '찾아오기',
        href: '/wizpark/location',
      },
      {
        name: '익산야구장',
        href: '/wizpark/iksan',
      },
    ],
  },
  {
    gnb: 'Game',
    href: '/game',
    lnb: [
      {
        name: '정규리그',
        href: '/game/regular/schedule',
      },
      {
        name: '퓨쳐스리그',
        href: '/game/futures/schedule',
      },
    ],
  },
  {
    gnb: 'Player',
    href: '/player',
    lnb: [
      {
        name: '코칭스텝',
        href: '/player/coach',
      },
      {
        name: '투수',
        href: '/player/pitcher',
      },
      {
        name: '타자',
        href: '/player/catcher',
      },
      {
        name: '응원단',
        href: '/player/cheer',
      },
      {
        name: '응원가',
        href: '/player/song',
      },
      {
        name: '응원가 저작권',
        href: '/player/song-copyright',
      },
    ],
  },
  {
    gnb: 'Media',
    href: '/media',
    lnb: [
      {
        name: 'wiz 뉴스',
        href: '/media/wiznews',
      },
      {
        name: 'wiz 스토리',
        href: '/media/wizstory',
      },
      {
        name: '시구자 정보',
        href: '/media/firstpitch',
      },
      {
        name: 'wiz 포토',
        href: '/media/photos',
      },
      {
        name: '하이라이트',
        href: '/media/highlight',
      },
      {
        name: 'Live 영상모음',
        href: '/media/live/pts',
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
        href: '/ticket/reservation',
      },
      {
        name: '단체관람',
        href: '/ticket/group',
      },
      {
        name: '입장 및 좌석 정보',
        href: '/ticket/seatmap',
      },
    ],
  },
]
const LNB_LIST: LnbDataArray = MENU_DATA.map((menu) =>
  !menu.lnb ? null : menu.lnb,
)

export function WithFullWidthFlyoutMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpened, setIsOpend] = useState(false)
  function handleMouseOver() {
    // console.log('동작')
    setIsOpend(true)
  }
  function handleMouseOut() {
    // console.log('동작')
    setIsOpend(false)
  }
  // console.log('isOpened', isOpened)
  return (
    <header
      className="group relative isolate z-10 w-full bg-[--black-color-100] transition duration-300 ease-in-out hover:bg-white"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <nav
        aria-label="Global"
        className="items-between mx-auto flex justify-between p-6 lg:px-8"
      >
        {/* lg-로고 */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            {/* <div
              style={{ backgroundImage: "url('/images/img-logo-white.svg')" }}
              className="h-8 w-[100px] bg-contain bg-center bg-no-repeat duration-300 group-hover:bg-[url('/images/img-logo-black.png')]"
            /> */}
            <img
              alt="로고"
              src={
                isOpened
                  ? '/images/img-logo-black.svg'
                  : '/images/img-logo-white.svg'
              }
              className="block h-8 w-[80px]"
            />
          </Link>
        </div>
        {/* 오른쪽 햄버거 버튼 */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="focus -m-2.5 inline-flex items-center justify-center rounded-md bg-black p-2.5 text-gray-700 hover:border-[--main-red-color] focus:outline-[--main-red-color] group-hover:bg-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              aria-hidden="true"
              className="size-6 text-white group-hover:text-gray-800"
            />
          </button>
        </div>
        {/* lg-GNB */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="lg:flex lg:gap-x-4">
            {MENU_DATA.map((menu, idx) => (
              <PopoverButton
                key={menu.gnb + idx}
                className="box-border flex items-center gap-x-1 border-none bg-[--black-color-100] text-sm/4 font-semibold text-white outline-none transition duration-300 ease-in-out hover:text-gray-900 focus:outline-none active:outline-none active:ring-0 group-hover:border-white group-hover:bg-white group-hover:text-gray-900"
              >
                {menu.gnb}
              </PopoverButton>
            ))}
            {isOpened && (
              <PopoverPanel
                className={`absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in ${isOpened ? 'data-[enter]:duration-200 data-[enter]:ease-out' : 'data-[leave]:ease-in'} `}
                transition
              >
                <div className="mx-auto flex max-w-7xl justify-center gap-x-5 px-6 py-10 lg:px-8 xl:gap-x-5">
                  {LNB_LIST?.map((menu, idx) => (
                    <div
                      key={idx + 'lnb'}
                      className={`group relative ${idx === 2 ? 'left-6' : idx === 3 ? 'left-6' : idx === 4 ? 'left-6' : idx === 7 ? 'left-4' : 'left-2'} w-[70px] text-sm/6`}
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
              </PopoverPanel>
            )}
          </Popover>
        </PopoverGroup>
        {/* login & signup*/}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end">
          <Link
            href="/login"
            className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
          >
            로그인
          </Link>
          <span aria-hidden="true" className="text-[--gray-color-100]">
            &nbsp; | &nbsp;
          </span>
          <Link
            href="/signup"
            className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
          >
            회원가입
          </Link>
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
            {/* 로고 */}
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="로고"
                src="/images/img-logo-black.svg"
                className="h-8 w-auto"
              />
            </Link>
            {/* x 버튼 */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:border-[--main-red-color] active:outline-[--main-red-color]"
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
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg bg-white py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:border-red-300 focus:outline-[--main-red-color] active:outline-[--main-red-color]">
                      {menu.gnb}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-[open]:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {menu.lnb?.map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-red-500"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[--main-red-color]"
                >
                  로그인
                </Link>
                <Link
                  href="/singup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[--main-red-color]"
                >
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
