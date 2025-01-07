export async function fetchTeamRankByYear() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/teamrankbyyear`,
      {
        cache: 'force-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.list
  } catch (error) {
    console.error('Failed to fetch team rank by year:', error)
    throw error
  }
}

export async function fetchTeamBattingRank() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/batting`,
      {
        cache: 'force-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.list
  } catch (error) {
    console.error('Failed to fetch team rank by year:', error)
    throw error
  }
}
export async function fetchTeamPitchingRank() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/pitching`,
      {
        cache: 'force-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.list
  } catch (error) {
    console.error('Failed to fetch team rank by year:', error)
    throw error
  }
}

export async function fetchTeamRankteamvs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/rank/teamvs`,
      {
        cache: 'force-cache',
      },
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data.list
  } catch (error) {
    console.error('Failed to fetch team rank by year:', error)
    throw error
  }
}
