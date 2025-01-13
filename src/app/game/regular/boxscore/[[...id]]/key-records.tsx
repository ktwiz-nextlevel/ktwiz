import Title from '@/components/common/title/title'
import { BoxScore, EtcGames } from '@/types'
import PlayerImage from '../_component/player-img'

async function KeyRecords({ data }: { data?: BoxScore }) {
  if (!data) {
    return (
      <section className="gray-red-400 w-full pt-3">
        <Title text={`주요 기록 `} />
        <div className="flex w-full flex-wrap">
          주요기록 데이터조회를 실패했습니다.
        </div>
      </section>
    )
  }

  const etcgames: EtcGames[] = data?.etcgames || []

  const homeKey = data.schedule.current.homeKey
  const visitKey = data.schedule.current.visitKey

  const infoPromises = etcgames.map(async (game) => {
    const parsedData = parsePlayerDescriptions(game.result)
    const playerImgResponses = await Promise.all(
      parsedData.map(async (player) => {
        try {
          const [imgResponseHome, imgResponseVisit] = await Promise.all([
            fetch(
              `http://54.180.228.165/api/player_img?team=${homeKey}&name=${player.name}`,
            ),
            fetch(
              `http://54.180.228.165/api/player_img?team=${visitKey}&name=${player.name}`,
            ),
          ])

          const imgDataHome = await imgResponseHome.json()
          const imgDataVisit = await imgResponseVisit.json()

          return {
            ...player,
            playerImg:
              imgDataHome.url ||
              imgDataVisit.url ||
              '/images/players/player.png',
          }
        } catch {
          return { ...player, playerImg: '/images/players/player.png' }
        }
      }),
    )
    return playerImgResponses
  })

  const info = await Promise.all(infoPromises)

  return (
    <section className="gray-red-400 w-full pt-3">
      <Title text={`주요 기록 `} />
      <div className="flex w-full flex-wrap">
        {etcgames.map((game, idx) => {
          const playerInfo = info[idx] || []

          return (
            <div
              className={`${idx % 2 === 0 ? 'pr-6' : 'border-l-2 pl-6'} w-full py-6 md:w-1/2`}
              key={`${game.how}-${idx}`}
            >
              <h2 className="text-gray-600">
                {game.how} ({playerInfo.length})
              </h2>
              <div className="mt-3 flex justify-start overflow-auto">
                {playerInfo.map((player, idx) => (
                  <PlayerImage key={`${player.name}-${idx}`} player={player} />
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

interface PlayerDescription {
  name: string
  des: string | null
}

function splitPlayers(input: string): string[] {
  const regex = /\([^)]*\)/g // 괄호 안의 내용 찾기
  const modifiedInput = input.replace(regex, (match) =>
    match.replace(/\s/g, '|'),
  )
  return modifiedInput
    .split(' ')
    .map((item) => (item.includes('|') ? item.replace(/\|/g, ' ') : item))
    .filter((item) => item.trim() !== '') // 빈 문자열 제거
}

function parsePlayerDescriptions(input: string): PlayerDescription[] {
  const players = splitPlayers(input)

  return players.map((item) => {
    const nameDesRegex = /^([^\(]+)(\(([^)]+)\))?$/ // 괄호 앞의 이름과 괄호 안의 내용 추출
    const match = item.match(nameDesRegex)

    if (match) {
      return {
        name: match[1].trim(),
        des: match[3]?.trim() || null,
      }
    }
    return { name: item.trim(), des: null } // 괄호가 없으면 des는 null
  })
}
