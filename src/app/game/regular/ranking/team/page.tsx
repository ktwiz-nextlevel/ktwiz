import { TabNavigation } from '@/components/common/tab-menu/tab'
import LineChartComponent from './charts'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import {
  fetchTeamBattingRank,
  fetchTeamPitchingRank,
  fetchTeamRankByYear,
  fetchTeamRankteamvs,
} from './_lib/api'
import { transformData } from './_lib/adapter'
import TitleWithYear from '@/components/common/title/title-with-year'
import {
  TABS,
  TH_KEY,
  TH_KEY_BATTER,
  TH_KEY_PITCHER,
  TH_KEY_TEAM,
} from './_lib/constants'
import { HighlightTable } from '@/components/tailwind-ui/tables/highlight-table'
import { VsTeam } from './_lib/team.type'

async function RankingPage() {
  const teamRankData = await fetchTeamRankByYear()
  const teamBattingRank = await fetchTeamBattingRank()
  const teamPitchingRank = await fetchTeamPitchingRank()
  const teamRankVs: VsTeam[] = await fetchTeamRankteamvs()

  return (
    <div className="mb-[250px] w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />

      <SectionWrapper>
        <TitleWithYear text={`시즌 팀 순위`} />
        <p className="mt-2 font-thin text-gray-400">
          올해 kt wiz 순위를 살펴보세요.
        </p>
        <LineChartComponent />
      </SectionWrapper>

      <SectionWrapper>
        <TitleWithYear text={`시즌 팀 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 기록을 살펴보세요.
        </p>
        <Table
          data={teamRankData}
          thKey={TH_KEY}
          highlightRowKey={'KT'}
          rowKeyName={'teamCode'}
        />
      </SectionWrapper>

      <SectionWrapper>
        <TitleWithYear text={`시즌 팀 투수 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 투수 기록을 살펴보세요.
        </p>
        <Table
          data={teamPitchingRank}
          thKey={TH_KEY_PITCHER}
          rowKeyName="teamName"
          highlightRowKey={'KT'}
        />
      </SectionWrapper>

      <SectionWrapper>
        <TitleWithYear text={` 시즌 팀 타자 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 타자 기록을 살펴보세요.
        </p>
        <Table
          data={teamBattingRank}
          thKey={TH_KEY_BATTER}
          rowKeyName="teamName"
          highlightRowKey={'KT'}
        />
      </SectionWrapper>

      <SectionWrapper>
        <TitleWithYear text={` 시즌 팀 간 승패표`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 간 승패표를 살펴보세요.
        </p>
        <HighlightTable
          data={transformData(teamRankVs)}
          thKey={TH_KEY_TEAM}
          highlightRowKey={'KT'}
          rowKeyName="key"
          highlightColumnKey={'KT'}
        />
      </SectionWrapper>
    </div>
  )
}

export default RankingPage

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 w-full">{children}</section>
}
