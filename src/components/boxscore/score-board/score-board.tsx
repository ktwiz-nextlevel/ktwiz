import { ScheduleType, Scoreboard, ScoreboardList } from '@/types'

import Board from '@/components/common/board/board'
import BoardHeader from './board-header'

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
    return <Board>스코어보드 정보가 없습니다.</Board>
  }
  const data = await response.json()
  // const { current }: ScheduleType = data.data.schedule
  const scoreboard: ScoreboardList = data.data.scoreboard

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
      <Board.li style="w-full flex justify-center">
        <BoardHeader />
      </Board.li>
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
