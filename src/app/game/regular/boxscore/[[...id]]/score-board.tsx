import { Scoreboard, ScoreboardList } from '@/types'

import Board from '@/components/common/board/board'
import BoardHeader from '@/components/boxscore/score-board/board-header'

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
  const scoreboard: ScoreboardList = data.data.scoreboard
  const visitBoard: Scoreboard = scoreboard.filter(
    (score) => score.bhome === 0,
  )[0]
  const homeBoard: Scoreboard = scoreboard.filter(
    (score) => score.bhome === 1,
  )[0]

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
            <BoardTR data={visitBoard} />
            {/* homeBoard 삽입 */}
            <BoardTR data={homeBoard} />
          </tbody>
        </table>
      </Board.li>
    </Board>
  )
}

function BoardTH() {
  const TEAM_NAME = '팀명'
  const INING_NUMBER = 9

  const GAME_INFO = [
    {
      title: 'R',
      key: 'run',
      color: 'text-red-500',
    },
    {
      title: 'H',
      key: 'hit',
      color: 'text-blue-500',
    },
    {
      title: 'E',
      key: 'error',
      color: 'text-orange-500', // 에러에 적합한 경고 색상
    },
    {
      title: 'B',
      key: 'ballfour',
      color: 'text-green-500', // 볼넷에 적합한 중립 색상
    },
  ]
  return (
    <div className="flex justify-center gap-2 text-gray-700">
      <span className="w-[60px] text-center hover:text-gray-800">
        {TEAM_NAME}
      </span>
      {Array.from({ length: INING_NUMBER }, (_, index) => (
        <span
          key={index + 'ining-number'}
          className="w-7 text-center hover:text-gray-800"
        >
          {index + 1}
        </span>
      ))}
      {GAME_INFO.map((info, idx) => (
        <span
          key={info.title + 'game-info' + idx}
          className={`${idx === 0 ? `ml-2 w-7 text-center hover:text-gray-800 ${info.color}` : `${info.color} w-7 text-center hover:text-gray-800`}`}
        >
          {info.title}
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
    <tr className="flex gap-2">
      <td className="h-7 w-[60px] text-center text-gray-700">
        {data.bhomeName}
      </td>

      {SCORE_KEY.map((key, index) => (
        <td
          key={key + data[key]}
          className="h-7 w-7 text-center text-gray-400 hover:text-gray-800"
        >
          {data[key]}
        </td>
      ))}

      {ADDITIONAL_KEY.map((key, idx) => (
        <td
          key={key + data[key]}
          className={`${idx === 0 ? 'ml-2' : ''} h-7 w-7 text-center text-gray-400 hover:text-gray-800`}
        >
          {data[key]}
        </td>
      ))}
    </tr>
  )
}
