'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import TabMenu from '../tab-menu'

//이 컴포넌트는 TabMenu컴포넌트를 두 가지 목적(페이지 이동용, 상태 전환용)으로 동시에 사용하는 예시를 제공합니다.
export default function TabMenuExample() {
  const router = useRouter()

  // 현재 브라우저 경로를 가져옵니다.
  const pathname = usePathname()

  // 상태로 관리할 탭의 활성화 상태를 저장하는 state입니다.
  const [activeTab, setActiveTab] = useState<string>('wiz타자')

  // 페이지 이동 목적으로 사용할 탭 목록입니다.
  const tabs = [
    { name: 'Wiz 뉴스', key: '/media/wiznews' },
    { name: 'Wiz 보도자료', key: '/media/wizpress' },
  ]

  // 상태 변경 목적으로 사용할 탭 목록입니다.
  const tabs2 = [
    { name: 'kt wiz 타자', key: 'wiz타자' },
    { name: '전체 타자 순위', key: '전체타자순위' },
  ]

  /**
   * 탭 클릭 시 호출되는 핸들러입니다.
   * key가 '/'로 시작한다면 페이지 경로로 간주하고 router.push를 통해 페이지 이동을 수행하고
   * 그렇지 않을 경우, 상태 변화가 필요한 탭으로 보고 setActiveTab을 통해 state를 변경합니다.
   */
  const handleTabChange = (key: string) => {
    if (key.startsWith('/')) {
      router.push(key)
    } else {
      setActiveTab(key)
    }
  }

  /**
   * 페이지 이동 목적으로 사용할 때, 현재 경로(pathname)가 특정 탭의 key로 시작하는지 검사하여
   * 해당 탭을 활성화하기 위한 key값을 추출합니다.
   * 즉, 중첩된 하위 경로에서도 상위 탭이 활성화 상태를 유지하도록 하는 로직입니다.
   */
  const activeKeyForPage =
    tabs.find((t) => pathname.startsWith(t.key))?.key || ''

  return (
    <div>
      <div className="flex justify-center">
        {/* 
          페이지 이동을 위해 사용할 TabMenu 컴포넌트입니다.
          - tabs: 페이지 이동 탭 목록
          - activeKey: 현재 브라우저 경로와 일치하거나 포함하는 탭을 활성화할 key 전달
            (페이지 이동용 탭을 사용할 때는 반드시 activeKeyForPage를 전달해주세요)
          - onTabClick: 탭 클릭 시 페이지를 이동시키는 핸들러
          - variant: 다양한 스타일 변형을 적용할 수 있는 옵션
        */}
        <TabMenu
          tabs={tabs}
          activeKey={activeKeyForPage}
          onTabClick={handleTabChange}
          variant="underline"
        />
      </div>
      <div>
        {/* 
          상태 변경을 위해 사용할 TabMenu 컴포넌트입니다.
          - tabs: 상태 변경 탭 목록
          - activeKey: 현재 activeTab 상태 값 전달
          - onTabClick: 탭 클릭 시 activeTab을 변경하는 핸들러
          - navClassName: <nav> 요소에 추가 스타일 적용
          - tabClassName: variant 스타일 이외에 적용하고 싶은 탭 스타일이 있을 때 사용하거나
            variant를 통해 전체 스타일 톤을 잡고 추가로 세부적인 스타일을 적용하고 싶을 때 사용합니다.
            이 함수는 isActive 상태를 인자로 받아, 활성/비활성 상태에 따라 동적인 스타일을 할당할 수 있습니다.
        */}
        <TabMenu
          tabs={tabs2}
          activeKey={activeTab}
          onTabClick={handleTabChange}
          navClassName="border-b-2"
          tabClassName={(isActive) =>
            isActive
              ? 'rounded-md px-3 py-2 bg-[--main-red-color] text-white'
              : 'rounded-md px-3 py-2 text-gray-500 hover:text-gray-800'
          }
        />
      </div>
      <div>
        {activeTab === 'wiz타자' && <div>wiz 타자 컴포넌트</div>}
        {activeTab === '전체타자순위' && <div>전체 타자 순위 컴포넌트</div>}
      </div>
    </div>
  )
}
