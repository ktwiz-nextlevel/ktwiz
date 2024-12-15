import { GameData, GameStatusInterface, ScheduleType } from '@/types'
import { Label } from './label'
import { WinLossStats } from './win-loss-status'
import { HomeLabel } from './home-label'
import { GAME_STATUS } from '@/contants/game'

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

function checkFlag(flag: '0' | '1') {
  return flag === '1'
}
const formatDate = (dateString: string) => {
  if (dateString.length !== 8) {
    new Error('Invalid dateString format not YYYYMMDD')
  }
  return dateString.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3')
}

function getGameStatus({ gameDate, cancelFlag, endFlag }: GameData) {
  if (checkFlag(cancelFlag)) {
    return GAME_STATUS.CANCEL
  }
  const currentDate = new Date()
  gameDate = new Date(formatDate(gameDate as string))

  if (currentDate < gameDate) {
    return GAME_STATUS.BEFORE
  }
  if (currentDate === gameDate) {
    return checkFlag(endFlag) ? GAME_STATUS.DONE : GAME_STATUS.PROGRESS
  }
  if (currentDate > gameDate) {
    return GAME_STATUS.DONE
  }
}

async function BoxscoreBoardHeader() {
  const res = await fetch(
    'http://54.180.229.183/api/game/boxscore?gameDate=20241008&gmkey=33331008LGKT0',
  ) //20241008/33331008LGKT0
  const data = await res.json()

  const { current, prev, next }: ScheduleType = data.data.schedule

  return (
    <div className="flex w-full flex-col items-center">
      <Label
        status={getGameStatus({
          gameDate: current.gameDate.toString(),
          cancelFlag: current.cancelFlag,
          endFlag: current.cancelFlag,
        })}
      />
      <h1 className="mt-2 text-xl text-gray-500">
        {`${current.gyear}년 ${current.gmonth}월 ${current.gday}일`}
      </h1>
      <p className="mt-0 text-xs text-gray-400">{`${current.gmonth}.${current.gday} ${current.gtime} | ${current.stadium}`}</p>
      <div className="mt-2 flex justify-center gap-5">
        {/* 왼쪽 구단 */}
        <div className="flex w-[150px] items-center justify-end gap-1">
          <div className="flex flex-col justify-end">
            <span className="align-top text-base text-gray-400">
              {current.visit}
            </span>
            {current.endFlag && (
              <WinLossStats isWin={current.vscore > current.hscore} />
            )}
          </div>
          <img src={current.visitLogo} alt="visitLogo" className="w-16" />
        </div>
        {/* 경기정보 */}
        <div className="flex items-center justify-center">
          <h2
            className={`align-top text-5xl font-extrabold ${current.vscore > current.hscore ? 'text-[--main-red-color]' : 'text-gray-700'}`}
          >
            {current.vscore}
          </h2>
          <h2 className="mt-[-5px] align-top text-5xl font-extrabold text-gray-400">
            &nbsp;:&nbsp;
          </h2>
          <h2
            className={`align-top text-5xl font-extrabold ${current.vscore < current.hscore ? 'text-[--main-red-color]' : 'text-gray-700'}`}
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
              <span className="text-base text-gray-400">{current.home}</span>
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
