import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import { ReactNode } from 'react'

const TABS = [
  { title: '팀순위', href: '/game/regular/ranking/team', path: 'team' },
  {
    title: '투수순위',
    href: '/game/regular/ranking/pitcher',
    path: 'pitcher',
  },
  {
    title: '타자순위',
    href: '/game/regular/ranking/batter',
    path: 'batter',
  },
  {
    title: '관중현황',
    href: '/game/regular/ranking/crowd',
    path: 'crowd',
  },
]

function RankPitcherPage() {
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[1]} />

      <div className="pitcher-board mt-10 flex justify-between">
        <section className="best-players flex gap-2 rounded bg-gray-100 p-6">
          {/* 평균자책점 top3 */}
          <div className="flex">
            {/* 이미지 */}
            <div className="relative w-[200px]">
              <img
                src={'/images/players/player.webp'}
                alt="player"
                className="relative left-3 w-[180px] object-contain"
              />
              <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
                <h4 className="text-xs text-white">평균자책점</h4>
                <span className="text-xs text-white">TOP3</span>
              </div>
            </div>
            {/* 순위 */}
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold">1. 쿠페바스 (1.23)</span>
              <span className="text-gray-400">2. 쿠페바스 (1.23)</span>
              <span className="text-gray-400">3. 쿠페바스 (1.23)</span>
            </div>
          </div>
          {/* 승리 top3 */}
          <div className="flex">
            {/* 이미지 */}
            <div className="relative w-[200px]">
              <img
                src={'/images/players/player.webp'}
                alt="player"
                className="relative left-3 w-[180px] object-contain"
              />
              <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
                <h4 className="text-xs text-white">평균자책점</h4>
                <span className="text-xs text-white">TOP3</span>
              </div>
            </div>
            {/* 순위 */}
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="font-bold">1. 쿠페바스 (1.23)</span>
              <span className="text-gray-400">2. 쿠페바스 (1.23)</span>
              <span className="text-gray-400">3. 쿠페바스 (1.23)</span>
            </div>
          </div>
        </section>
        <div className="">TeamERAOverview</div>
      </div>
    </div>
  )
}

export default RankPitcherPage
