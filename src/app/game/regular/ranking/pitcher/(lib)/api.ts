import { Top5player } from '@/types'

export const getTop5PitcherEras = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitcher/total/top5 `,
    )
    if (!response.ok) {
      return '게임 평균자책점 top5 정보가 없습니다.'
    }
    const {
      data: { list: list },
    }: Top5player = await response.json()
    return list
  } catch (error) {
    throw new Error('Error fetching data')
  }
}
