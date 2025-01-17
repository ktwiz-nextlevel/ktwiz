// 'use client'
// import React, { useState, useEffect } from 'react'
import Title from '@/components/common/title/title'
import { BoxScore, EtcGames } from '@/types'
import PlayerImage from '../_component/player-img'
import { http } from '@/http'

interface PlayerInfo {
  name: string
  des: string | null
}
interface PlayerDescription extends PlayerInfo {
  playerImg: string
}

function splitPlayers(input: string): string[] {
  const regex = /\([^)]*\)/g
  const modifiedInput = input.replace(regex, (match) =>
    match.replace(/\s/g, '|'),
  )
  return modifiedInput
    .split(' ')
    .map((item) => (item.includes('|') ? item.replace(/\|/g, ' ') : item))
    .filter((item) => item.trim() !== '')
}

function parsePlayerDescriptions(input: string): PlayerInfo[] {
  const players = splitPlayers(input)
  return players.map((item) => {
    const nameDesRegex = /^([^\(]+)(\(([^)]+)\))?$/
    const match = item.match(nameDesRegex)
    if (match) {
      return {
        name: match[1].trim(),
        des: match[3]?.trim() || null,
      }
    }
    return { name: item.trim(), des: null }
  })
}

const fetchPlayerImg = async (
  player: PlayerInfo,
  homeKey: string,
  visitKey: string,
): Promise<PlayerDescription> => {
  try {
    const [imgHome, imgVisit] = await Promise.allSettled([
      http.get<{ url: string }>(`/player_img`, {
        searchParams: { team: homeKey, name: player.name },
      }),
      http.get<{ url: string }>(`/player_img`, {
        searchParams: { team: visitKey, name: player.name },
      }),
    ])

    const imgResponseHome =
      imgHome.status === 'fulfilled' ? imgHome.value.data : null
    const imgResponseVisit =
      imgVisit.status === 'fulfilled' ? imgVisit.value.data : null

    return {
      ...player,
      playerImg:
        imgResponseHome?.url ||
        imgResponseVisit?.url ||
        '/images/players/player.png',
    }
  } catch (error) {
    console.error(`Error fetching image for player: ${player.name}`, error)
    return {
      ...player,
      playerImg: '/images/players/player.png', // 기본 이미지 대체
    }
  }
}

const KeyRecords = ({
  data,
  info,
}: {
  info: PlayerDescription[][]
  data?: BoxScore
}) => {
  if (!data) {
    return <KeyRecordsError />
  }

  return (
    <section className="gray-red-400 w-full pt-3">
      <Title text={`주요 기록`} />
      <div className="flex w-full flex-wrap">
        {data!.etcgames.map((game, idx) => {
          const playerInfo = info?.[idx] || []
          return (
            <div
              className={`${
                idx % 2 === 0 ? 'pr-6' : 'border-l-2 pl-6'
              } w-full py-6 md:w-1/2`}
              key={`${game.how}-${idx}`}
            >
              <h2 className="text-gray-600">
                {game.how} ({playerInfo.length})
              </h2>
              <div className="mt-3 flex justify-start overflow-auto">
                {playerInfo.map((player, idx) => (
                  <PlayerImage key={`${player?.name}-${idx}`} player={player} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default KeyRecords

const KeyRecordsError = ({ title = '주요기록 조회를 실패했습니다.' }) => (
  <section className="gray-red-400 h-[300px] w-full pt-3">
    <Title text={`주요 기록`} />
    <div className="flex w-full flex-wrap pt-4">[ERROR] {title}</div>
  </section>
)
