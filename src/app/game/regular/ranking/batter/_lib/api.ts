import { Player, Top3player } from '@/types'

export const getTop5battertotal = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batter/total/top5 `,
    )
    if (!response.ok) {
      return '게임 평균자책점 top5 정보가 없습니다.'
    }
    const {
      data: { list: list },
    } = await response.json()
    return list
  } catch (error) {
    throw new Error('Error fetching data')
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
    // API 호출 URL을 동적으로 생성
    const params = new URLSearchParams({ gyear, sortKey })

    params.append('pname', pname)

    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/kt/batter?${params.toString()}`
    // console.log(url)
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('게임  데이터를 가져오는 데 실패했습니다.')
    }

    const {
      data: { list },
    } = await response.json()

    return list
  } catch (error) {
    console.error('Error fetching KT pitcher rankings:', error)
    return []
  }
}

export const getbatterRankings = async ({
  gyear,
  pname = '',
  sortKey = 'ERA',
}: {
  gyear: string
  pname: string
  sortKey?: string
}) => {
  try {
    // API 호출 URL을 동적으로 생성
    const params = new URLSearchParams({ gyear, sortKey })

    params.append('pname', pname)

    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/total/batter?${params.toString()}`
    console.log(url)
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('게임 평균자책점 데이터를 가져오는 데 실패했습니다.')
    }

    const {
      data: { list },
    } = await response.json()

    return list
  } catch (error) {
    console.error('Error fetching KT pitcher rankings:', error)
    return []
  }
}
export const getTop3BatterHra = async (year: number) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batter/hra/top3?gyear=${year} `,
    )
    if (!response.ok) {
      return '게임 평균자책점 정보가 없습니다.'
    }
    const {
      data: { list: list },
    }: Top3player = await response.json()
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}

export const getTop3batterHr = async (
  year: number,
): Promise<[Player, Player, Player] | string> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batter/hr/top3?gyear=${year} `,
    )

    if (!response.ok) {
      return '게임 승리 정보가 없습니다.'
    }
    const {
      data: { list: list },
    }: Top3player = await response.json()
    list.sort((a, b) => b.w - a.w)
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
