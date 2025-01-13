import { ScheduleType } from '@/types'
import { WinLossStats } from './win-loss-status'
import PrevButton from './prev-button'
import { Label } from './game-status-label'
import NextButton from './next-button'
import { HomeLabel } from './home-label'

async function BoardHeader({ schedule }: { schedule: ScheduleType }) {
  const { current, prev, next }: ScheduleType = schedule

  return (
    <div className="flex flex-1">
      {/* 이전버튼 */}
      <PrevButton gameDate={prev?.gameDate} gmkey={prev?.gmkey} />
      {current && (
        <div className="w-fit">
          <div className="flex flex-col items-center">
            <Label data={current} />
            <h1 className="mt-3 text-xl text-gray-700">{`${current.gyear}년 ${current.gmonth}월 ${current.gday}일`}</h1>
            <p className="mt-1 text-xs text-gray-400">{`${current.gmonth}.${current.gday} ${current.gtime} | ${current.stadium}`}</p>
          </div>

          <div className="mt-2 flex justify-center gap-5">
            {/* 좌측 원정팀 */}
            <LeftVisitTeam
              teamName={current.visit}
              teamLogo={current.visitLogo}
              isWin={current.vscore > current.hscore && current.endFlag === '1'}
            />
            <Score vscore={current.vscore} hscore={current.hscore} />
            {/* 우측 홈구장팀 */}
            <RightHomeTeam
              teamName={current.home}
              teamLogo={current.homeLogo}
              isWin={current.vscore < current.hscore && current.endFlag === '1'}
            />
          </div>
        </div>
      )}
      <NextButton gameDate={next?.gameDate} gmkey={next?.gmkey} />
    </div>
  )
}
function LeftVisitTeam({
  teamName,
  teamLogo,
  isWin,
}: {
  teamName: string
  teamLogo: string
  isWin: boolean
}) {
  return (
    <div className={'flex w-[150px] items-center justify-end gap-1'}>
      <div className="hidden justify-end md:flex md:flex-col">
        <span
          className={`align-top text-base ${isWin ? 'text-gray-700' : 'text-gray-400'} `}
        >
          {teamName}
        </span>
        <WinLossStats isWin={isWin} />
      </div>
      <img src={teamLogo} alt="teamLogo" className="w-16" />
    </div>
  )
}
function RightHomeTeam({
  teamName,
  teamLogo,
  isWin,
}: {
  teamName: string
  teamLogo: string
  isWin: boolean
}) {
  return (
    <div className="flex w-[150px] items-center justify-start gap-1">
      <img src={teamLogo} alt="teamLogo" className="w-16" />
      <div className="hidden justify-start md:flex md:flex-col">
        <div className="flex gap-1">
          <HomeLabel />
          <span
            className={`text-base ${isWin ? 'text-gray-700' : 'text-gray-400'}`}
          >
            {teamName}
          </span>
        </div>
        <WinLossStats isWin={isWin} style="left" />
      </div>
    </div>
  )
}
function Score({ vscore, hscore }: { vscore: number; hscore: number }) {
  return (
    <div className="flex items-center justify-center">
      <h2
        className={`align-top text-5xl font-extrabold ${vscore > hscore ? 'text-[--main-red-color]' : 'text-gray-700'}`}
      >
        {vscore}
      </h2>
      <h2 className="mt-[-5px] align-top text-5xl font-extrabold text-gray-400">
        &nbsp;:&nbsp;
      </h2>
      <h2
        className={`align-top text-5xl font-extrabold ${vscore < hscore ? 'text-[--main-red-color]' : 'text-gray-700'}`}
      >
        {hscore}
      </h2>
    </div>
  )
}
export default BoardHeader
