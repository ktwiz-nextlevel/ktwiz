import KeyRecords from '@/app/game/regular/boxscore/[[...id]]/key-records'

import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import BatterRecords from './batter-records'
import PitcherRecords from './pitcher-records'
import { ScoreBoard } from './score-board'
import { http } from '@/http'
import { BoxScore, BoxscoreData, EtcGames } from '@/types'
import { Suspense } from 'react'
import { BoxscorePageProps } from '../_lib/records.type'
import { TABS } from '../_lib/constants'
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
const fetchData = async (data: BoxScore) => {
  try {
    const etcgames: EtcGames[] = data.etcgames
    const homeKey = data.schedule.current.homeKey
    const visitKey = data.schedule.current.visitKey

    const results = await Promise.all(
      etcgames.map(async (game) => {
        const parsedPlayerInfo = parsePlayerDescriptions(game.result)
        const playersInfo = await Promise.all(
          parsedPlayerInfo.map((player) =>
            fetchPlayerImg(player, homeKey, visitKey),
          ),
        )
        return playersInfo
      }),
    )
    return results
  } catch (err) {
    console.error('Error fetching player images:', err)
    return
  }
}
export async function generateMetadata({ params }: BoxscorePageProps) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  return {
    title: `박스스코어 - ${gameDate} 경기`,
    description: `${gameDate} 경기에 대한 박스스코어 정보를 제공합니다. 주오기록, 타자기록,투수기록,선발 투수 비교,해당 경기 라인업 정보를 살펴보세요`,
  }
}

async function BoxscorePage({ params }: BoxscorePageProps) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  let data: BoxscoreData
  let keyRecords: PlayerDescription[][] | undefined
  try {
    const response = await http.get<BoxscoreData>(`/game/boxscore`, {
      searchParams: { gameDate, gmkey },
    })
    data = response.data
    keyRecords = await fetchData(data.data)
  } catch {
    return (
      <div>
        <BreadCrumb />
        <div>게임 정보를 불러올 수 없습니다.</div>
      </div>
    )
  }

  // const players = await fetchPlayerImg(
  //   {
  //     name: '심우준',
  //     des: null,
  //   },
  //   'NC',
  //   'KT',
  // )
  // console.log(players)
  return (
    <div className="w-full">
      <BreadCrumb />
      <Suspense fallback={<div>Loading...</div>}>
        <ScoreBoard data={data.data} />
      </Suspense>
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        {keyRecords && <KeyRecords data={data.data} info={keyRecords} />}
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <BatterRecords
          data={data.data}
          home={data.data.schedule.current.home}
          visit={data.data.schedule.current.visit}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PitcherRecords
          data={data.data}
          home={data.data.schedule.current.home}
          visit={data.data.schedule.current.visit}
        />
      </Suspense>
    </div>
  )
}

export default BoxscorePage

// Breadcrumb 컴포넌트
function BreadCrumb() {
  return (
    <div className="mt-[50px] flex w-full justify-end">
      <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
    </div>
  )
}
