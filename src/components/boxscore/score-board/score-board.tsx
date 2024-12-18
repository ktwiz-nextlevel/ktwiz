import { ScheduleType, Scoreboard, ScoreboardList } from '@/types'
import { Label } from './label'
import { WinLossStats } from './win-loss-status'
import { HomeLabel } from './home-label'
import { cn } from '@/utils'
import Board from '@/components/common/board/board'

export async function ScoreBoard({
  gameDate,
  gmkey,
}: {
  gameDate: string
  gmkey: string
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/boxscore?gameDate=${gameDate}&gmkey=${gmkey} `,
  )
  if (!response.ok) {
    return <Board>게임 정보가 없습니다.</Board>
  }
  const data = await response.json()
  // const { current }: ScheduleType = data.schedule
  // const scoreboard: ScoreboardList = data.scoreboard
  // const visitBoard: Scoreboard = scoreboard.filter((score) => score.bhome === 0)
  // const homeBoard: Scoreboard = scoreboard.filter((score) => score.bhome === 1)
  const vivitBoard: Scoreboard = {
    ballfour: '4',
    bhome: 0, // 홈팀 여부 (1: 홈팀, 0: 원정팀)
    bhomeName: 'NC', // 팀 이름
    error: '3', // 실책 수
    gameDate: 20240102, // 경기 날짜 (YYYYMMDD 형식)
    hit: '1', // 안타 수
    run: '8', // 득점
    score1: '1', // 1회 점수
    score2: '2', // 2회 점수
    score3: '3', // 3회 점수
    score4: '4', // 4회 점수
    score5: '5', // 5회 점수
    score6: '6', // 6회 점수
    score7: '7', // 7회 점수
    score8: '8', // 8회 점수
    score9: '9', // 9회 점수
    score10: '10', // 연장 10회 점수
    score11: '11', // 연장 11회 점수
    score12: '12', // 연장 12회 점수
  }

  return (
    <Board>
      <BoxscoreBoardHeader />
      <Board.li>
        <BoardTH />
      </Board.li>
      <Board.li style="flex justify-center">
        <table>
          <tbody>
            <BoardTR data={vivitBoard} />
            {/* homeBoard 삽입 */}
            <BoardTR data={vivitBoard} />
          </tbody>
        </table>
      </Board.li>
    </Board>
  )
}

function BoardTH() {
  const TEAM_NAME = '팀명'
  const INING_NUMBER = 9
  const GAME_INFO = ['R', 'H', 'E', 'B']
  return (
    <div className="flex justify-center text-gray-400">
      <span className="inline-block w-[60px] text-center hover:text-gray-800">
        {TEAM_NAME}
      </span>
      {Array.from({ length: INING_NUMBER }, (_, index) => (
        <span
          key={index + 'ining-number'}
          className="inline-block px-2 hover:text-gray-800"
        >
          {index + 1}
        </span>
      ))}
      {GAME_INFO.map((info, idx) => (
        <span
          key={info + 'game-info' + idx}
          className={`${idx === 0 ? 'inline-block pl-5 pr-2 hover:text-gray-800' : 'inline-block px-2 hover:text-gray-800'}`}
        >
          {info}
        </span>
      ))}
    </div>
  )
}

function BoardTR({ data }: { data: Scoreboard }) {
  const SCORE_KEY: (keyof Scoreboard)[] = [
    'score1',
    'score2',
    'score3',
    'score4',
    'score5',
    'score6',
    'score7',
    'score8',
    'score9',
  ]

  const ADDITIONAL_KEY: (keyof Scoreboard)[] = [
    'run',
    'hit',
    'error',
    'ballfour',
  ]
  return (
    <tr className="">
      <td className="px-5 text-gray-400">{data.bhomeName}</td>
      {SCORE_KEY.map((key, index) => (
        <td key={key + data[key]} className="px-2 text-gray-400">
          {data[key]}
        </td>
      ))}
      {ADDITIONAL_KEY.map((key) => (
        <td key={key + data[key]} className="px-2 text-gray-400">
          {data[key]}
        </td>
      ))}
    </tr>
  )
}
async function BoxscoreBoardHeader() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/boxscore?gameDate=20241008&gmkey=33331008LGKT0`,
  )
  const data = await res.json()

  const { current, prev, next }: ScheduleType = data.data.schedule
  const gameDate = `${current.gyear}년 ${current.gmonth}월 ${current.gday}일`
  const gameInfo = `${current.gmonth}.${current.gday} ${current.gtime} | ${current.stadium}`
  return (
    <li className="flex w-full flex-col items-center px-6 py-4">
      <Label data={current} />
      <h1 className="mt-2 text-xl text-gray-500">{gameDate}</h1>
      <p className="mt-0 text-xs text-gray-400">{gameInfo}</p>
      <div className="mt-2 flex justify-center gap-5">
        {/* 왼쪽 구단 */}
        <div className="flex w-[150px] items-center justify-end gap-1">
          <div className="hidden justify-end md:flex md:flex-col">
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
          <div className="hidden justify-start md:flex md:flex-col">
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
    </li>
  )
}
