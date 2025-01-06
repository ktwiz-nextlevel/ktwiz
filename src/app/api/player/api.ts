/**[투수] 선수 리스트 요청 */

import { PlayerCode } from '@/types/player.type'

export const getPitcherPlayerList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_PLAYER_REQUEST_URL}/api/player/pitcherlist`,
    )
    return await response.json()
  } catch (error) {
    console.error('getPlayerList 요청 에러:', error)
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
    console.error('getPlayerDetail 요청 에러:', error)
    throw error
  }
}

// ----------------------------------------------------------------------------------

/**[외야] 선수 리스트 요청*/

/**[외야] 선수 상세데이터 요청 */

// ----------------------------------------------------------------------------------

/**[내야] 선수 리스트 요청*/

/**[내야] 선수 상세데이터 요청 */

// ----------------------------------------------------------------------------------

/**[포수] 선수 리스트 요청*/

/**[포수] 선수 상세데이터 요청 */
