export type Team =
  | 'HH'
  | 'KT'
  | 'HT'
  | 'LG'
  | 'LT'
  | 'NC'
  | 'OB'
  | 'SK'
  | 'SS'
  | 'WO'
  | 'KIA'
export interface VsTeam {
  drawn: number
  lose: number
  teamCode: Team
  teamName: string
  vsTeamCode: Team
  win: number
}

export type TeamStats = Record<Team, string | undefined>

export interface VsTeamTableData extends TeamStats {
  name: string
  key: string
}

export type PartialVsTeamTableData = Partial<VsTeamTableData>

export type TeamDataArray = PartialVsTeamTableData[]
