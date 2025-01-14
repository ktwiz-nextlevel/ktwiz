import { Player, Top3player } from '@/types'
import { http } from '@/http'

export const getTop5BatterTotal = async () => {
  try {
    const response = await http.get<{ data: { list: any[] } }>(
      '/game/rank/batter/total/top5',
    )

    const {
      data: { list },
    } = response.data
    return list
  } catch (error) {
    return '게임 평균자책점 top5 정보가 없습니다.'
  }
}

export const getKTBatterRankings = async ({
  gyear,
  pname = '',
  sortKey = 'ERA',
}: {
  gyear: string
  pname: string
  sortKey?: string
}) => {
  try {
    const params = { gyear, sortKey, pname }
    const response = await http.get<{ data: { list: any[] } }>(
      '/game/rank/kt/batter',
      { searchParams: params },
    )

    const {
      data: { list },
    } = response.data
    return list
  } catch (error) {
    console.error('Error fetching KT batter rankings:', error)
    return []
  }
}

export const getBatterRankings = async ({
  gyear,
  pname = '',
  sortKey = 'ERA',
}: {
  gyear: string
  pname: string
  sortKey?: string
}) => {
  try {
    const params = { gyear, sortKey, pname }
    const response = await http.get<{ data: { list: any[] } }>(
      '/game/rank/total/batter',
      { searchParams: params },
    )

    const {
      data: { list },
    } = response.data
    return list
  } catch (error) {
    console.error('Error fetching batter rankings:', error)
    return []
  }
}

export const getTop3BatterHra = async (year: number) => {
  try {
    const response = await http.get<Top3player>('/game/rank/batter/hra/top3', {
      searchParams: { gyear: year },
    })

    const {
      data: { list },
    } = response.data
    return list
  } catch (error) {
    return '게임 평균자책점 정보가 없습니다.'
  }
}

export const getTop3BatterHr = async (
  year: number,
): Promise<[Player, Player, Player] | string> => {
  try {
    const response = await http.get<Top3player>('/game/rank/batter/hr/top3', {
      searchParams: { gyear: year },
    })

    const {
      data: { list },
    } = response.data
    list.sort((a, b) => b.w - a.w)
    return list
  } catch (error) {
    return '게임 승리 정보가 없습니다.'
  }
}
