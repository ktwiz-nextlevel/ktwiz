import { http } from '@/http'
import {
  BatterChartData,
  ChartData,
  ChartData2,
  PlayerChart,
  PlayerCode,
  PlayerDetail,
} from '@/types'

/**[투수] 선수 리스트 요청 */
export const getPitcherPlayerList = async () => {
  try {
    const response = await http.get('/player/pitcherlist')
    return response.data
  } catch (error) {
    console.error('투수리스트 요청 에러:', error)
    throw error
  }
}

/**[투수] 선수 상세데이터 요청 */
export const getPitcherPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await http.get<PlayerDetail>(`/player/pitcherdetail`, {
      searchParams: { pcode },
    })
    return response.data
  } catch (error) {
    console.error('투수 상세데이터 요청 에러:', error)
    throw error
  }
}

/**[외야] 선수 리스트 요청 */
export const getOutfielderPlayerList = async () => {
  try {
    const response = await http.get(`/player/outfielderlist`)
    return response.data
  } catch (error) {
    console.error('외야수 리스트 요청 에러:', error)
    throw error
  }
}

/**[외야] 선수 상세데이터 요청 */
export const getOutfielderPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await http.get<PlayerDetail>(`/player/outfielderdetail`, {
      searchParams: { pcode },
    })
    return response.data
  } catch (error) {
    console.error('외야수 상세데이터 요청 에러:', error)
    throw error
  }
}

/**[내야] 선수 리스트 요청 */
export const getInfielderPlayerList = async () => {
  try {
    const response = await http.get(`/player/infielderlist`)
    return response.data
  } catch (error) {
    console.error('내야수 리스트 요청 에러:', error)
    throw error
  }
}

/**[내야] 선수 상세데이터 요청 */
export const getInfielderPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await http.get<PlayerDetail>(`/player/infielderdetail`, {
      searchParams: { pcode },
    })
    return response.data
  } catch (error) {
    console.error('내야수 상세데이터 요청 에러:', error)
    throw error
  }
}

/**[포수] 선수 리스트 요청 */
export const getCatcherPlayerList = async () => {
  try {
    const response = await http.get(`/player/catcherlist`)
    return response.data
  } catch (error) {
    console.error('포수리스트 요청 에러:', error)
    throw error
  }
}

/**[포수] 선수 상세데이터 요청 */
export const getCatcherPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await http.get<PlayerDetail>(`/player/catcherdetail`, {
      searchParams: { pcode },
    })
    return response.data
  } catch (error) {
    console.error('포수 상세데이터 요청 에러:', error)
    throw error
  }
}

/**플레이어 차트 데이터 get 요청 */
export const getPlayerChart = async (name: PlayerChart) => {
  try {
    const response = await http.get<BatterChartData | ChartData>(
      `/additionalInfo`,
      {
        searchParams: { team: 'KT', player: name },
      },
    )
    console.log('response : ', response)
    return response.data
  } catch (error) {
    console.error('플레이어 차트 데이터 요청 에러:', error)
    throw error
  }
}

/**투수 차트 데이터 요청 */
export const getPitcherChart = async (pcode: PlayerCode) => {
  try {
    const response = await http.get<PlayerDetail>(`/player/pitcherdetail_add`, {
      searchParams: { pcode },
    })
    return response.data
  } catch (error) {
    console.error('투수 차트 데이터 요청 에러:', error)
    throw error
  }
}
