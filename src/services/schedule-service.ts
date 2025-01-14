import { http } from '@/http'
import { GameInfo } from '@/types'

export async function getSchedule() {
  try {
    const url = '/game/recentGames'
    const res = await http.get<{
      data: {
        [key in 'prev' | 'current' | 'next']: GameInfo
      }
    }>(url)
    return res.data.data
  } catch (error) {
    console.log(error)
  }
}
