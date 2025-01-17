import { TeamERAOverPlayer } from '@/types'
import ERATitle from './era-title'

export async function TeamERAOverview({
  isError,
  title,
  list,
}: {
  isError: boolean
  title: string
  list?:
    | [
        TeamERAOverPlayer,
        TeamERAOverPlayer,
        TeamERAOverPlayer,
        TeamERAOverPlayer,
        TeamERAOverPlayer,
      ]
    | string
}) {
  if (isError) {
    return (
      <div className="flex-1">
        <ERATitle title={title} />
        <div className="flex">게임 평균자책점 top5 정보가 없습니다.</div>
      </div>
    )
  }

  return (
    <div className="flex min-w-[300px] max-w-[700px] flex-1 flex-col justify-start gap-3 p-6 md:p-6 lg:p-0">
      <ERATitle title={title} />

      <ol className="self-stretch">
        {typeof list !== 'string' &&
          list &&
          list.map((player, idx) => {
            return (
              <li
                key={player.teamName + idx}
                className="flex justify-between border-b-[1px] border-gray-50 py-2 text-sm text-gray-500"
              >
                <span>
                  {`${idx + 1}   ${player.playerName} (${player.teamName})`}
                </span>
                <span>{player.era}</span>
              </li>
            )
          })}
      </ol>
      <div className="text-right text-xs font-thin">{`※ 2024 정규리그 시즌`}</div>
    </div>
  )
}
