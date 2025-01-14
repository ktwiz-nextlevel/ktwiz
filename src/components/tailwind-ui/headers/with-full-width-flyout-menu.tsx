'use client'
import { useState, useCallback } from 'react'
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
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, UserIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { MENU_DATA, LNB_LIST } from '@/contants'
import LoginModal from '@/components/modal/login'
import SignupModal from '@/components/modal/sign-up'
import { ProfileDetail } from '@/types'
import { signout } from '@/app/login/actions'

interface HeaderProps {
  initialUser?: ProfileDetail | null
}

export function WithFullWidthFlyoutMenu({ initialUser }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpened, setIsOpend] = useState(false)
  const [isLoginPopupVisable, setIsLoginPopupVisable] = useState(false) // 로그인 팝업 토글
  const [isSignupPopupVisable, setIsSignupPopupVisable] = useState(false) // 회원가입 팝업 토글

  /** 로그아웃 */
  const handleLogout = async () => {
    try {
      await signout()
    } catch (error) {
      console.error('로그아웃 중 에러가 발생했습니다:', error)
    }
  }

  function handleMouseOver() {
    setIsOpend(true)
  }
  function handleMouseOut() {
    setIsOpend(false)
  }

  const getPaddingByIdx = useCallback((idx: number) => {
    const classes: Record<number, string> = {
      0: 'left-[-10px]',
      1: 'left-[6px]',
      2: 'left-[12px]',
      3: 'left-[12px]',
      4: 'left-[40px]',
    }
    return classes[idx] || 'left-2'
  }, [])

  return (
    <>
      <header
        className="group sticky top-0 isolate z-50 w-full bg-[--black-color-100] py-2 transition duration-300 ease-in-out hover:bg-white"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <nav
          aria-label="Global"
          className="items-between relative mx-auto flex justify-between p-4 lg:px-8"
        >
          {/* lg-로고 */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>

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
          <PopoverGroup className="absolute left-1/2 hidden -translate-x-1/2 lg:flex lg:gap-x-12">
            <Popover className="lg:flex lg:gap-x-4">
              {MENU_DATA.map((menu, idx, array) => (
                // GNB{4 === idx ? 'items-end justify-end' : 'items-center justify-center'}
                <PopoverButton
                  key={menu.gnb + idx}
                  className={`box-border flex w-[80px] items-center justify-center gap-x-1 bg-[--black-color-100] text-center text-base font-semibold text-white outline-none transition duration-300 ease-in-out hover:text-gray-900 focus:outline-none active:outline-none active:ring-0 group-hover:border-white group-hover:bg-white group-hover:text-gray-900`}
                >
                  {menu.gnb}
                </PopoverButton>
              ))}

              <PopoverPanel
                className={`${isOpened ? 'block' : 'hidden'} fixed left-1/2 top-[50px] -z-10 w-screen -translate-x-1/2 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in ${isOpened ? 'data-[enter]:duration-200 data-[enter]:ease-out' : 'data-[leave]:ease-in'} `}
                transition
              >
                <div className="relative mx-auto flex max-w-7xl justify-center gap-x-4 px-6 pb-10 lg:px-8 xl:gap-x-4">
                  {LNB_LIST?.map((menu, idx) => {
                    return (
                      <div
                        key={idx + 'lnb'}
                        className={`group relative ${getPaddingByIdx(idx)} w-[80px] text-sm/6`}
                        // className={`group relative left-2 w-[75px] text-sm/6`}
                      >
                        {menu?.map((lnb, idx) => (
                          <Link
                            key={lnb.name + idx}
                            href={lnb.href}
                            className="hover:text-blackborder mb-3 block text-sm font-normal text-gray-900 hover:font-bold"
                          >
                            {lnb.name}
                          </Link>
                        ))}
                      </div>
                    )
                  })}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          {/* login & signup*/}
          <div className="hidden space-x-4 lg:flex lg:flex-1 lg:items-center lg:justify-end">
            {initialUser ? (
              <>
                <span className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900">
                  {initialUser.nickname?.split('@')[0]} 님 안녕하세요!
                </span>
                <button
                  className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
                  onClick={handleLogout}
                >
                  로그아웃
                </button>
                <Link
                  href="/mypage"
                  className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
                >
                  <UserIcon className="h-6 w-6" />
                </Link>
              </>
            ) : (
              <>
                <button
                  className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
                  onClick={() => setIsLoginPopupVisable(true)}
                >
                  로그인
                </button>
                <span aria-hidden="true" className="text-[--gray-color-100]">
                  &nbsp; | &nbsp;
                </span>
                <button
                  className="text-sm/6 font-semibold text-[--gray-color-100] transition duration-300 ease-in-out hover:text-[--main-red-color] group-hover:text-gray-900"
                  onClick={() => setIsSignupPopupVisable(true)}
                >
                  회원가입
                </button>
              </>
            )}
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
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[--main-red-color]"
                    onClick={() => setIsLoginPopupVisable(true)}
                  >
                    로그인
                  </button>
                  <button
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 hover:text-[--main-red-color]"
                    onClick={() => setIsSignupPopupVisable(true)}
                  >
                    회원가입
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      {isLoginPopupVisable && (
        <LoginModal onClose={() => setIsLoginPopupVisable(false)} />
      )}
      {isSignupPopupVisable && (
        <SignupModal onClose={() => setIsSignupPopupVisable(false)} />
      )}
    </>
  )
}
