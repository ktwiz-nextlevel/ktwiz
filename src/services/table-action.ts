'use server'

import { http } from '@/http'
import { Top5player } from '@/types'
import { revalidatePath } from 'next/cache'

export const getKTPitcherRankings = async ({
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
    const response = await http.get<Top5player>('/game/rank/kt/pitcher', {
      searchParams: params,
    })

    const {
      data: { list },
    }: Top5player = response.data
    return list
  } catch (error) {
    console.error('Error fetching KT pitcher rankings:', error)
    return []
  }
}

export const getPitcherRankings = async ({
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
    const response = await http.get<Top5player>('/game/rank/total/pitcher', {
      searchParams: params,
    })

    const {
      data: { list },
    }: Top5player = response.data
    return list
  } catch (error) {
    console.error('Error fetching pitcher rankings:', error)
    return []
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
    revalidatePath(`/game/regular/ranking/batter`)
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
export const fetchRankings = async ({
  playerType,
  gyear,
  pname,
}: {
  pname?: string
  gyear?: string
  playerType?: string
}) => {
  try {
    const rankings =
      playerType === 'ktwizbatter'
        ? await getKTBatterRankings({
            gyear: gyear || '2024',
            pname: pname || '',
          })
        : await getBatterRankings({
            gyear: gyear || '2024',
            pname: pname || '',
          })

    return rankings
  } catch (error) {
    console.error('Failed to fetch rankings:', error)
    return
  }
}
