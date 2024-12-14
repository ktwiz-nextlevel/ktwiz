import { Banner } from '@/components/common/banner'
import TabMenu from '@/components/common/tab-menu'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

import { GAME_BANNER_DATA } from '@/contants/index'
import { GameSchedule } from '@/types/game'

async function BoxscorePage({ params }: { params: { id: string } }) {
  const res = await fetch(
    'http://54.180.229.183/api/game/boxscore?gameDate=20240910&gmkey=20240910NCKT0',
  )
  const data = await res.json()

  return (
    <div className="w-full">
      <Banner {...GAME_BANNER_DATA['/regular']}>
        <TabMenu tabs={GAME_BANNER_DATA['/regular'].tabs} />
      </Banner>
      <div className="page">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
        </div>

        <ScoreBoard />
      </div>
    </div>
  )
}

export default BoxscorePage

export function ScoreBoard() {
  return (
    <div className="mt-5 overflow-hidden rounded-md border border-gray-200 bg-[--red-color-300]">
      <ul role="list" className="divide-y divide-gray-200">
        <li className="px-6 py-4">
          <BoxscoreBoardHeader />
        </li>
        <li className="px-6 py-4">{/* Your content */}</li>
        <li className="px-6 py-4">{/* Your content */}</li>
      </ul>
    </div>
  )
}
async function BoxscoreBoardHeader() {
  const res = await fetch(
    'http://54.180.229.183/api/game/boxscore?gameDate=20240910&gmkey=20240910NCKT0',
  )
  const data = await res.json()
  const {
    current,
    prev,
    next,
  }: { current: GameSchedule; prev: GameSchedule; next: GameSchedule } =
    data.data.schedule
  console.log(current)
  return (
    <div className="flex w-full flex-col items-center">
      <Label status={current.game} />
      <h1 className="mt-2 text-xl text-gray-600">
        {`${current.gyear}년 ${current.gmonth}월 ${current.gday}일`}
      </h1>
      <p className="mt-0 text-xs text-gray-400">{`${current.gmonth}.${current.gday} ${current.gtime} | ${current.stadium}`}</p>
      <div className="mt-2 flex justify-center gap-5">
        {/* 왼쪽 구단 */}
        <div className="flex w-[150px] items-center justify-end gap-1">
          <div className="flex flex-col justify-end">
            <span className="align-top text-base">{current.visit}</span>
            {current.endFlag && (
              <WinLossStats isWin={current.vscore > current.hscore} />
            )}
          </div>
          <img src={current.visitLogo} alt="visitLogo" className="w-16" />
        </div>
        {/* 경기정보 */}
        <div className="flex items-center justify-center">
          <h2
            className={`align-top text-5xl font-extrabold ${current.vscore > current.hscore ? 'text-[--main-red-color]' : 'text-gray-500'}`}
          >
            {current.vscore}
          </h2>
          <h2 className="mt-[-5px] align-top text-5xl font-extrabold text-gray-500">
            &nbsp;:&nbsp;
          </h2>
          <h2
            className={`align-top text-5xl font-extrabold ${current.vscore < current.hscore ? 'text-[--main-red-color]' : 'text-gray-500'}`}
          >
            {current.hscore}
          </h2>
        </div>
        {/* 오른쪽 구단 */}
        <div className="flex w-[150px] items-center justify-start gap-1">
          <img src={current.homeLogo} alt="homeLogo" className="w-16" />
          <div className="flex flex-col justify-start">
            <div className="flex gap-1">
              <HomeLabel />
              <span className="text-base">{current.home}</span>
            </div>
            {current.endFlag && (
              <WinLossStats
                isWin={current.vscore < current.hscore}
                style="left"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
function Label({ status = 'prev' }: { status?: 'prev' | 'current' | 'next' }) {
  if (status === 'prev') {
    return (
      <span className="rounded-xl bg-gray-200 px-3 py-1 text-xs text-gray-500">
        경기전
      </span>
    )
  }
  if (status === 'current') {
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

function WinLossStats({
  isWin,
  style = 'right',
}: {
  isWin: boolean
  style?: 'left' | 'right'
}) {
  if (isWin)
    return (
      <span
        className={`${style === 'left' ? 'text-left' : 'text-right'} text-sm text-[--main-red-color]`}
      >
        승
      </span>
    )

  return (
    <span
      className={`${style === 'left' ? 'text-left' : 'text-right'} text-right text-sm text-gray-500`}
    >
      패
    </span>
  )
}
