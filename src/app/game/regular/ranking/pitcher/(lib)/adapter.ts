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
