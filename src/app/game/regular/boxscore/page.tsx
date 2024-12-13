import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

import { GAME_BANNER_DATA } from '@/contants/index'

function BoxscorePage({ params }: { params: { id: string } }) {
  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page border border-gray-400">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
        </div>

        <ScoreBoard />
      </div>
    </div>
  )
}

function BoxscoreBoardHeader() {
  // const
  return (
    <div className="flex justify-center gap-5">
      {/* 왼쪽 구단 */}
      <div className="flex items-center gap-1 pt-5">
        <div className="flex flex-col justify-end">
          <p className="flex gap-1">
            {/* <span>홈</span> */}
            <h1 className="text-base">두산</h1>
          </p>
          <span className="text-right text-sm">패</span>
        </div>
        <img src="/images/team-logo.png" alt="dfdf" className="" />
        <h2 className="text-6xl font-extrabold">3</h2>
      </div>
      {/* 경기정보 */}
      <div className="flex flex-col items-center">
        <Label />
        <h1 className="mt-1 text-2xl font-bold text-gray-500">
          2024년 10월 11일
        </h1>
        <p className="mt-0 text-sm text-gray-400">10.01 17:00 | 수원</p>
        {/* <p className="text-gray-500">수원</p> */}
      </div>
      {/* 오른쪽 구단 */}
      <div className="flex items-center gap-1 pt-4">
        <h2 className="text-6xl font-extrabold">2</h2>
        <img src="/images/team-logo.png" alt="dfdf" className="" />
        <div className="flex flex-col justify-start">
          <p className="flex gap-1">
            <HomeLabel />
            <h1 className="text-base">키움</h1>
          </p>
          <span className="text-left text-sm">승</span>
        </div>
      </div>
    </div>
  )
}
function Label({ status = 'prev' }: { status?: 'prev' | 'active' | 'done' }) {
  if (status === 'prev') {
    return (
      <span className="rounded-xl bg-gray-100 px-3 py-1 text-xs text-gray-500">
        경기전
      </span>
    )
  }
  if (status === 'active') {
    return (
      <span className="rounded-xl bg-[--main-red-color] px-3 py-1 text-xs text-white">
        경기중
      </span>
    )
  }
  return (
    <span className="rounded-xl bg-gray-400 px-3 py-1 text-xs text-white">
      경기종료
    </span>
  )
}
function HomeLabel() {
  return (
    <span className="rounded-sm bg-red-300 px-1 py-1 text-xs text-white">
      홈
    </span>
  )
}
export default BoxscorePage

export function ScoreBoard() {
  return (
    <div className="mt-5 overflow-hidden rounded-md border border-gray-300 bg-white">
      <ul role="list" className="divide-y divide-gray-300">
        <li className="px-6 py-4">
          <BoxscoreBoardHeader />
        </li>
        <li className="px-6 py-4">{/* Your content */}</li>
        <li className="px-6 py-4">{/* Your content */}</li>
      </ul>
    </div>
  )
}
