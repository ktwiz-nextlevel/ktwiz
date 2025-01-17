import { VsTeam, VsTeamTableData } from './team.type'

export function transformData(inputData: VsTeam[]) {
  const teamData: Partial<VsTeamTableData>[] = []

  inputData.forEach((item, idx) => {
    const { teamName, teamCode, vsTeamCode, win, lose, drawn } = item
    const matchResult = `${win}-${lose}-${drawn}`
    const teamIndex = teamData.findIndex((item) => item.name === teamName)

    // 객체가 없으면 새로 추가
    if (teamIndex === -1) {
      const team: Partial<VsTeamTableData> = { name: teamName, key: teamCode }
      team[vsTeamCode] = matchResult

      teamData.push(team)
    } else {
      teamData[teamIndex][vsTeamCode] = matchResult
    }
  })
  return teamData
}
