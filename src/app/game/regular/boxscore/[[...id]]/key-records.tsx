import Title from '@/components/common/title/title'
import { EtcGames } from '@/types'

async function KeyRecords() {
  const res = await fetch(
    'http://54.180.229.183/api/game/boxscore?gameDate=20241008&gmkey=33331008LGKT0',
  )
  const data = await res.json()

  const etcgames: EtcGames[] = data.data.etcgames

  interface PlayerDescriptions {
    player: string
    des: string | null
  }
  function splitPlayers(input: string): string[] {
    const regex = /\([^)]*\)/g // 괄호 안의 내용 찾기
    const modifiedInput = input.replace(regex, (match) =>
      match.replace(/\s/g, '|'),
    ) // 괄호 안의 공백을 '|'(구분자)로 변경
    const result = modifiedInput.split(' ') // 공백을 기준으로 나누기

    // 다시 괄호 안의 공백을 원래대로 복구
    result.map((item) => (item.includes('|') ? item.replace(/\|/g, ' ') : item))
    return result.filter((item) => item !== '\r\n\r\n' && item !== '') // 빈 문자열 제거
  }
  function parsePlayerDescriptions(input: string) {
    const players = splitPlayers(input)

    return players.map((item) => {
      const nameDesRegex = /^([^\(]+)(\(([^)]+)\))?$/ // 괄호 앞의 이름과 괄호 안의 내용 추출
      const match = item.match(nameDesRegex)

      if (match) {
        return {
          name: match[1].trim(), // 괄호 앞의 문자열
          des: match[3] ? match[3].trim() : null, // 괄호 안의 내용
        }
      }
      return { name: item, des: null } // 괄호가 없으면 des는 null
    })
  }

  return (
    <section className="gray-red-400 w-full pt-3">
      <Title text={`주요 기록 `} />
      <div className="flex w-full flex-wrap">
        {etcgames.map((game, idx) => {
          const info = splitPlayers(game.result)
          return (
            <div
              className={`${idx % 2 === 0 ? 'pr-6' : 'border-l-2 pl-6'} w-1/2 py-6`}
              key={game.how + idx}
            >
              <h2 className="text-gray-600">
                {game.how + ` (${info.length})`}
              </h2>
              <div className="mt-3 flex justify-start overflow-auto">
                {/* {info.map((player, idx) => (
                  <div
                    key={player.name + idx}
                    className="border border-red-500"
                  >
                    <h3>{player.name}</h3>
                    <p>{player.des}</p>
                  </div>
                ))} */}
                {info.map((player, idx) => (
                  <div key={player + idx} className={`flex`}>
                    <img
                      src={'/images/players/player.webp'}
                      alt="player"
                      className="w-[100px] object-contain"
                    />
                    <div className="w-[240px]">
                      <h3 className="text-base">{player}</h3>
                      <p className="text-xs text-gray-300">{player}</p>
                    </div>
                  </div>
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
