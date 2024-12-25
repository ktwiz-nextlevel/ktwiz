'use client'

import clsx from 'clsx'

const variantClasses = {
  default: (isActive: boolean) =>
    isActive ? 'text-[--main-red-color]' : 'text-gray-500 hover:text-gray-700',
  underline: (isActive: boolean) =>
    isActive
      ? 'border-b-2 border-[--main-red-color] text-[--main-red-color]'
      : 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
  filled: (isActive: boolean) =>
    `rounded-md px-3 py-2 
    ${isActive ? 'bg-[--main-red-color] text-white' : 'text-gray-500 hover:text-gray-800'}`,
}

interface Tab {
  name: string
  key: string
}

interface TabMenuProps {
  tabs: Tab[]
  activeKey: string // 현재 활성화된 탭을 식별하기 위한 key 값
  onTabClick: (key: string) => void // 탭을 클릭했을 때 호출되는 함수
  variant?: 'default' | 'underline' | 'filled' // 탭 스타일 변형 옵션
  navClassName?: string
  tabClassName?: (isActive: boolean) => string
}

export default function TabMenu({
  tabs,
  activeKey,
  onTabClick,
  variant = 'default',
  navClassName,
  tabClassName,
}: TabMenuProps) {
  return (
    <nav className={clsx('-mb-px flex space-x-8', navClassName)}>
      {tabs.map((tab) => {
        // activeKey가 탭의 key와 동일할 경우 활성화 상태로 간주합니다.
        const isActive = activeKey === tab.key
        return (
          <button
            key={tab.key}
            onClick={() => onTabClick(tab.key)}
            className={clsx(
              'whitespace-nowrap px-3 py-2 text-xs font-medium sm:text-sm',
              variantClasses[variant](isActive), // variant 기반 스타일 적용
              tabClassName?.(isActive), // 추가적인 탭별 스타일 적용
            )}
          >
            {tab.name}
          </button>
        )
      })}
    </nav>
  )
}
