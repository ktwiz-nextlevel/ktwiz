import { PlayerChart, PlayerCode } from '@/types/player'

/**[투수] 선수 리스트 요청 */
export const getPitcherPlayerList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/pitcherlist`,
    )
    return await response.json()
  } catch (error) {
    console.error('투수리스트 요청 에러:', error)
    throw error
  }
}

/**[투수] 선수 상세데이터 요청 */
export const getPitcherPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/pitcherdetail?pcode=${pcode}`,
    )
    return await response.json()
  } catch (error) {
    console.error('투수 상세데이터 요청 에러:', error)
    throw error
  }
}

// ----------------------------------------------------------------------------------

/**[외야] 선수 리스트 요청*/

/**[외야] 선수 상세데이터 요청 */

// ----------------------------------------------------------------------------------

/**[내야] 선수 리스트 요청*/
export const getInfielderPlayerList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/infielderlist`,
    )
    return await response.json()
  } catch (error) {
    console.error('내야수 리스트 요청 에러:', error)
    throw error
  }
}

/**[내야] 선수 상세데이터 요청 */
export const getInfielderPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/infielderdetail?pcode=${pcode}`,
    )
    return await response.json()
  } catch (error) {
    console.error('내야수 상세데이터 요청 에러:', error)
    throw error
  }
}

// ----------------------------------------------------------------------------------

/**[포수] 선수 리스트 요청*/
export const getCatcherPlayerList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/catcherlist`,
    )
    return await response.json()
  } catch (error) {
    console.error('포수리스트 요청 에러:', error)
    throw error
  }
}

/**[포수] 선수 상세데이터 요청 */
export const getCatcherPlayerDetail = async (pcode: PlayerCode) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/catcherdetail?pcode=${pcode}`,
    )
    return await response.json()
  } catch (error) {
    console.error('포수 상세데이터 요청 에러:', error)
    throw error
  }
}

/**투수 차트 데이터 get 요청 */
export const getPitcherChart = async (name: PlayerChart) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/additionalInfo?team=KT&player=${name}`,
    )
    return await response.json()
  } catch (error) {
    console.error('투수차트 요청 에러:', error)
    throw error
  }
}
