'use client'
import { ScheduleType, Scoreboard, ScoreboardList } from '@/types'

import Board from '@/components/common/board/board'
import BoardHeader from './board-header'

// import { useState } from 'react'

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

  // const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  // const handleMouseEnter = (index: number) => {
  //   setHoverIndex(index)
  // }

  // const handleMouseLeave = () => {
  //   setHoverIndex(null)
  // }
  return (
    <Board>
      <Board.li style="w-full flex justify-center">
        <BoardHeader />
      </Board.li>
      <Board.li>
        <BoardTH />
        {/* <BoardTH hoverIndex={ hoverIndex}    onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave} /> */}
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
  const GAME_INFO = ['R', 'H', 'E', 'B']
  return (
    <div className="flex justify-center text-gray-400">
      <span className="w-[60px] text-center hover:text-gray-800">
        {TEAM_NAME}
      </span>
      {Array.from({ length: INING_NUMBER }, (_, index) => (
        <span key={index + 'ining-number'} className="px-2 hover:text-gray-800">
          {index + 1}
        </span>
      ))}
      {GAME_INFO.map((info, idx) => (
        <span
          key={info + 'game-info' + idx}
          className={`${idx === 0 ? 'pl-5 pr-2 hover:text-gray-800' : 'px-2 hover:text-gray-800'}`}
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
      <td className="w-[60px] px-5 text-gray-400">{data.bhomeName}</td>
      {SCORE_KEY.map((key, index) => (
        <td
          key={key + data[key]}
          className="px-2 text-gray-400 hover:text-gray-800"
        >
          {data[key]}
        </td>
      ))}
      {ADDITIONAL_KEY.map((key, idx) => (
        <td
          key={key + data[key]}
          className={`${idx === 0 ? 'pl-5 pr-2' : 'px-2'} text-center text-gray-400 hover:text-gray-800`}
        >
          {data[key]}
        </td>
      ))}
    </tr>
  )
}
