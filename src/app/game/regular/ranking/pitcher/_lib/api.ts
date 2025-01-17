import { Player, Top3player } from '@/types'
import { ERAType } from '../../batter/_lib/type'
import { http } from '@/http'

export interface Top5player {
  data: {
    list: ERAType[]
  }
}

export const getTop5PitcherEras = async () => {
  try {
    const response = await http.get<Top5player>('/game/rank/pitcher/total/top5')

    const {
      data: { list },
    }: Top5player = response.data
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

// export const getKTPitcherRankings = async ({
//   gyear,
//   pname = '',
//   sortKey = 'ERA',
// }: {
//   gyear: string
//   pname: string
//   sortKey?: string
// }) => {
//   try {
//     const params = { gyear, sortKey, pname }
//     const response = await http.get<Top5player>('/game/rank/kt/pitcher', {
//       searchParams: params,
//     })

//     const {
//       data: { list },
//     }: Top5player = response.data
//     return list
//   } catch (error) {
//     console.error('Error fetching KT pitcher rankings:', error)
//     return []
//   }
// }

// export const getPitcherRankings = async ({
//   gyear,
//   pname = '',
//   sortKey = 'ERA',
// }: {
//   gyear: string
//   pname: string
//   sortKey?: string
// }) => {
//   try {
//     const params = { gyear, sortKey, pname }
//     const response = await http.get<Top5player>('/game/rank/total/pitcher', {
//       searchParams: params,
//     })

//     const {
//       data: { list },
//     }: Top5player = response.data
//     return list
//   } catch (error) {
//     console.error('Error fetching pitcher rankings:', error)
//     return []
//   }
// }

export const getTop3PitcherWins = async (
  year: number,
): Promise<[Player, Player, Player] | string> => {
  try {
    const response = await http.get<Top3player>(`/game/rank/pitcher/win/top3`, {
      searchParams: { gyear: year },
    })

    const {
      data: { list },
    }: Top3player = response.data
    list.sort((a, b) => b.w - a.w)
    return list
  } catch (error) {
    return '게임 승리 정보가 없습니다.'
  }
}

export const getTop3PitcherEras = async (year: number) => {
  try {
    const response = await http.get<Top3player>(`/game/rank/pitcher/era/top3`, {
      searchParams: { gyear: year },
    })

    const {
      data: { list },
    }: Top3player = response.data
    return list
  } catch (error) {
    return '게임 평균자책점 정보가 없습니다.'
  }
}
