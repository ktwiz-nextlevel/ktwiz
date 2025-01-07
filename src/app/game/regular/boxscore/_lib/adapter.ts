import { Batter, Pitcher } from '@/types'

export function createBatterTableData(data: Batter[]) {
  return data.map((player) => {
    const seasonAvg = player.accmAb > 0 ? player.accmHit / player.accmAb : 0
    const truncatedAvg = Math.floor(seasonAvg * 1000) / 1000
    return { ...player, avg: truncatedAvg }
  })
}

export function createPitcherTableData(data: Pitcher[]) {
  return data.map((player) => {
    const result = player.wls === 'W' ? '승' : player.wls === 'L' ? '패' : ''
    const innings = player.accmInn2 / 3 // 실제 누적 이닝
    const era = (player.accmEr * 9) / innings
    const truncatedEra = Math.floor(era * 1000) / 1000
    return { ...player, era: truncatedEra, result: result }
  })
}
