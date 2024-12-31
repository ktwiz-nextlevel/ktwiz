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
const getTop3PitcherEras = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitcher/era/top3 `,
    )

    if (!response.ok) {
      return <div>게임 정보가 없습니다.</div>
    }
    const {
      data: { list: list },
    } = await response.json()
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
const getTop3PitcherWins = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitcher/win/top3 `,
    )

    if (!response.ok) {
      return <div>게임 정보가 없습니다.</div>
    }
    const {
      data: { list: list },
    } = await response.json()
    list.sort((a, b) => b.w - a.w)
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

async function RankPitcherPage() {
  const top3PitcherEras = await getTop3PitcherEras()
  const winlist = await getTop3PitcherWins()

  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[1]} />

      <div className="pitcher-board mt-10 flex justify-between">
        <section className="best-players flex gap-2 rounded-lg bg-gray-100 p-6">
          {/* 평균자책점 top3 */}
          <div className="flex">
            {/* 이미지 */}
            <div className="relative w-[200px]">
              <img
                src={top3PitcherEras[0].playerPrvwImg}
                alt="player"
                className="relative left-3 w-[180px] object-contain"
              />
              <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
                <h4 className="text-xs text-white">평균자책점</h4>
                <span className="text-xs text-white">TOP3</span>
              </div>
            </div>
            {/* 순위 */}
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="font-bold">{`1. ${top3PitcherEras[0].playerName} (${top3PitcherEras[0].era})`}</span>
              <span className="text-gray-400">{`2. ${top3PitcherEras[1].playerName} (${top3PitcherEras[1].era})`}</span>
              <span className="text-gray-400">{`3. ${top3PitcherEras[2].playerName} (${top3PitcherEras[2].era})`}</span>
            </div>
          </div>
          {/* 승리 top3 */}
          <div className="flex">
            {/* 이미지 */}
            <div className="relative w-[200px]">
              <img
                src={winlist[0].playerPrvwImg}
                alt="player"
                className="relative left-3 w-[180px] object-contain"
              />
              <div className="ribbon absolute left-0 top-0 h-[100px] w-[60px] justify-center bg-[url('/images/bow.png')] bg-contain bg-no-repeat pt-3 text-center">
                <h4 className="text-xs text-white">승리</h4>
                <span className="text-xs text-white">TOP3</span>
              </div>
            </div>
            {/* 순위 */}
            <div className="flex flex-col items-start justify-center gap-2">
              <span className="font-bold">{`1. ${winlist[0].playerName} (${winlist[0].w})`}</span>
              <span className="text-gray-400">{`2. ${winlist[1].playerName} (${winlist[1].w})`}</span>
              <span className="text-gray-400">{`3. ${winlist[2].playerName} (${winlist[2].w})`}</span>
            </div>
          </div>
        </section>
        {/* TeamERAOverview */}
        <div className="">TeamERAOverview</div>
      </div>
    </div>
  )
}

export default RankPitcherPage
