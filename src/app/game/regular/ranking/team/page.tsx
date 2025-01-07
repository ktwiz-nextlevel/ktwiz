import { TabNavigation } from '@/components/common/tab-menu/tab'
import LineChartComponent from './charts'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { TeamRank } from '@/types/team-rank'
import {
  fetchTeamBattingRank,
  fetchTeamPitchingRank,
  fetchTeamRankByYear,
  fetchTeamRankteamvs,
} from './_lib/api'
import { transformData } from './_lib/adapter'
import TitleWithYear from '@/components/common/title/title-with-year'
const TABS = [
  { title: '팀순위', href: '/game/regular/ranking/team', path: 'team' },
  {
    title: '투수순위',
    href: '/game/regular/ranking/pitcher',
    path: 'pitcher',
  },
  {
    title: '타자순위',
    href: '/game/regular/ranking/batter',
    path: 'batter',
  },
  // {
  //   title: '관중현황',
  //   href: '/game/regular/ranking/crowd',
  //   path: 'crowd',
  // },
]
const TH_KEY: {
  title: string
  key: keyof TeamRank
}[] = [
  { title: '순위', key: 'rank' },
  { title: '팀명', key: 'teamName' },
  { title: '경기 수', key: 'game' },
  { title: '승', key: 'win' },
  { title: '패', key: 'lose' },
  { title: '무', key: 'drawn' },
  { title: '승률', key: 'wra' },
  { title: '타수', key: 'ab' },
  { title: '연속', key: 'continue1' },
  { title: '출루율', key: 'bra' },
  { title: '장타율', key: 'hra' },
  { title: '타율', key: 'era' }, // 'era'가 타율 대신 사용됩니다.
  { title: '자책점', key: 'er' },
  { title: '득점', key: 'r' },
  { title: '실점', key: 'run' }, // 실점은 'run'입니다.
  { title: '홈런', key: 'hr' },
]

const TH_KEY_PITCHER = [
  { title: '팀명', key: 'teamName' },
  { title: '타석', key: 'pa' },
  { title: '타수', key: 'ab' },
  { title: '희타', key: 'sh' },
  { title: '희비', key: 'sf' },
  { title: '볼넷', key: 'bb' },
  { title: '고의4구', key: 'ib' },
  { title: '사구', key: 'hp' },
  { title: '탈삼진', key: 'kk' },
  { title: '9이닝당 탈삼진', key: 'kk9' },
  { title: '폭투', key: 'wp' },
  { title: '보크', key: 'bk' },
  { title: '실점', key: 'r' },
  { title: '자책점', key: 'er' },
  { title: 'ERA', key: 'era' },
  { title: '블론세이브', key: 'bs' },
  { title: '세이브', key: 'sv' },
  { title: '홀드', key: 'hold' },
  { title: 'WHIP', key: 'whip' },
  { title: '피안타율', key: 'oavg' },
  { title: '출루율', key: 'obp' },
  { title: '장타율', key: 'oslg' },
  { title: 'OPS', key: 'oops' },
  { title: 'QS', key: 'qs' },
  { title: '완투', key: 'cg' },
  { title: '완봉', key: 'sho' },
  { title: '투구수', key: 'tugucount' },
  { title: '이닝당 투구수', key: 'tugucountinn' },
]

const TH_KEY_BATTER = [
  { title: '팀명', key: 'teamName' },
  { title: '안타', key: 'hit' },
  { title: '2루타', key: 'h2' },
  { title: '3루타', key: 'h3' },
  { title: '홈런', key: 'hr' },
  { title: '타점', key: 'rbi' },
  { title: '득점', key: 'run' }, // 추가됨
  { title: '도루', key: 'sb' },
  { title: '도루 성공률', key: 'sba' }, // 추가됨
  { title: '볼넷', key: 'bb' },
  { title: '고의4구', key: 'ib' },
  { title: '사구', key: 'hp' },
  { title: '삼진', key: 'kk' },
  { title: '병살타', key: 'gd' },
  { title: '장타율', key: 'slg' },
  { title: '출루율', key: 'bra' },
  { title: 'OPS', key: 'ops' },
  { title: 'ISO', key: 'iso' }, // 추가됨
  { title: '실책', key: 'err' },
  { title: 'DER', key: 'der' }, // 추가됨
  { title: '타석', key: 'pa' }, // 추가됨
  { title: '타수', key: 'ab' }, // 추가됨
  { title: '타율', key: 'hra' },
]
//승-패-무
const TH_KEY_TEAM = [
  { title: '팀명', key: 'name' },
  { title: 'KT ', key: 'KT' },
  { title: '삼성 ', key: 'SS' },
  { title: '두산 ', key: 'OB' },
  { title: 'LG ', key: 'LG' },
  { title: '키움 ', key: 'WO' },
  { title: '롯데 ', key: 'LT' },
  { title: 'SSG ', key: 'SK' },
  { title: 'NC', key: 'NC' },
  { title: 'KIA ', key: 'HT' },
  { title: '한화 ', key: 'HH' },
]

const TEAM_DATA = [
  {
    name: 'KT',
    key: 'KT',
    KT: '',
    Samsung: '7-6-1',
    Doosan: '4-10-0',
    LG: '7-9-0',
    Kiwoom: '11-2-0',
    Lotte: '7-7-1',
    ssg: '8-6-0',
    NC: '6-6-0',
    KIA: '7-8-0',
    Hanwha: '6-10-0',
  },
  {
    name: '삼성',
    key: 'Samsung',
    KT: '7-6-1',
    Samsung: '',
    Doosan: '4-10-0',
    LG: '7-9-0',
    Kiwoom: '11-2-0',
    Lotte: '7-7-1',
    ssg: '8-6-0',
    NC: '6-6-0',
    KIA: '7-8-0',
    Hanwha: '6-10-0',
  },
  {
    name: '두산',
    key: 'Doosan',
    KT: '7-6-1',
    Samsung: '7-6-1',
    Doosan: '',
    LG: '7-9-0',
    Kiwoom: '11-2-0',
    Lotte: '7-7-1',
    ssg: '8-6-0',
    NC: '6-6-0',
    KIA: '7-8-0',
    Hanwha: '6-10-0',
  },
]

async function RankingPage() {
  const teamRankData = await fetchTeamRankByYear()
  const teamBattingRank = await fetchTeamBattingRank()
  const teamPitchingRank = await fetchTeamPitchingRank()
  const teamRankVs = await fetchTeamRankteamvs()
  console.log(transformData(teamRankVs))
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
        <Table
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
