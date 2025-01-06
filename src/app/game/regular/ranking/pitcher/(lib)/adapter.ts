import { Player, Top5PitcherEras } from '@/types'

export const createTeamERAOverview = (
  top5PitcherEras: Top5PitcherEras,
  title: string,
) => {
  return {
    isError: typeof top5PitcherEras === 'string',
    title: title,
    list: typeof top5PitcherEras !== 'string' ? top5PitcherEras : undefined,
  } as const
}

export function createPlayerList(list: any[], key: string) {
  return list.map((player, idx) => {
    return { playerName: player.playerName, data: player[key] }
  })
}
