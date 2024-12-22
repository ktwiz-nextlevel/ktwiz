import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'

import LineChartComponent from './charts'
import Title from '@/components/common/title/title'
import { WithVerticalLines as Table } from '@/components/tailwind-ui/tables/with-vertical-lines'
import { TeamRank } from '@/types/team-rank'
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
  {
    title: '관중현황',
    href: '/game/regular/ranking/crowd',
    path: 'crowd',
  },
]
const TH_KEY: {
  title: string
  key: keyof TeamRank
}[] = [
  { title: '순위', key: 'rank' },
  { title: '팀명', key: 'teamName' },
  { title: '경기 수', key: 'games' },
  { title: '승', key: 'wins' },
  { title: '패', key: 'losses' },
  { title: '무', key: 'draws' },
  { title: '승률', key: 'winRate' },
  { title: '타수', key: 'atBats' },
  { title: '연속', key: 'streak' },
  { title: '출루율', key: 'onBasePercentage' },
  { title: '장타율', key: 'sluggingPercentage' },
  { title: '타율', key: 'battingAverage' },
  { title: '자책점', key: 'earnedRunAverage' },
  { title: '득점', key: 'runsScored' },
  { title: '실점', key: 'runsAllowed' },
  { title: '홈런', key: 'homeRuns' },
]
const teamData: TeamRank[] = [
  {
    rank: 1,
    teamName: '기아',
    games: 144,
    wins: 85,
    losses: 55,
    draws: 4,
    winRate: 0.607,
    atBats: 5023,
    streak: '3W',
    onBasePercentage: 0.345,
    sluggingPercentage: 0.456,
    battingAverage: 0.275,
    earnedRunAverage: 3.25,
    runsScored: 745,
    runsAllowed: 621,
    homeRuns: 152,
  },
  {
    rank: 2,
    teamName: '삼성',
    games: 144,
    wins: 80,
    losses: 60,
    draws: 4,
    winRate: 0.571,
    atBats: 4998,
    streak: '1L',
    onBasePercentage: 0.335,
    sluggingPercentage: 0.442,
    battingAverage: 0.27,
    earnedRunAverage: 3.45,
    runsScored: 710,
    runsAllowed: 645,
    homeRuns: 145,
  },
  {
    rank: 3,
    teamName: 'LG',
    games: 144,
    wins: 78,
    losses: 62,
    draws: 4,
    winRate: 0.557,
    atBats: 5102,
    streak: '2W',
    onBasePercentage: 0.34,
    sluggingPercentage: 0.45,
    battingAverage: 0.268,
    earnedRunAverage: 3.6,
    runsScored: 705,
    runsAllowed: 655,
    homeRuns: 140,
  },
]
const TH_KEY_PITCHER = [
  { title: '팀명', key: 'teamName' },
  { title: '희타', key: 'hitsAllowed' },
  { title: '희비', key: 'hitByPitch' },
  { title: '볼넷', key: 'walks' },
  { title: '고의4구', key: 'intentionalWalks' },
  { title: '사구', key: 'hitByPitchCount' },
  { title: '탈삼진', key: 'strikeouts' },
  { title: '폭투', key: 'wildPitches' },
  { title: '보크', key: 'balks' },
  { title: '실점', key: 'earnedRuns' },
  { title: '자책점', key: 'earnedRunAverage' },
  { title: '블론세이브', key: 'blownSaves' },
  { title: 'WHIP', key: 'whip' },
  { title: '피안타율', key: 'battingAverageAgainst' },
  { title: 'QS', key: 'qualityStarts' },
]
const pitcherData = [
  {
    teamName: 'KT',
    hitsAllowed: 43,
    hitByPitch: 63,
    walks: 392,
    intentionalWalks: 21,
    hitByPitchCount: 448,
    strikeouts: 1017,
    wildPitches: 53,
    balks: 5,
    earnedRuns: 723,
    earnedRunAverage: 1.48,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.48,
    battingAverageAgainst: 0.285,
    qualityStarts: 44,
  },
  {
    teamName: '삼성',
    hitsAllowed: 45,
    hitByPitch: 56,
    walks: 423,
    intentionalWalks: 18,
    hitByPitchCount: 494,
    strikeouts: 882,
    wildPitches: 50,
    balks: 1,
    earnedRuns: 619,
    earnedRunAverage: 1.42,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.42,
    battingAverageAgainst: 0.27,
    qualityStarts: 45,
  },
  {
    teamName: '두산',
    hitsAllowed: 49,
    hitByPitch: 35,
    walks: 530,
    intentionalWalks: 11,
    hitByPitchCount: 616,
    strikeouts: 990,
    wildPitches: 64,
    balks: 4,
    earnedRuns: 693,
    earnedRunAverage: 1.5,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.5,
    battingAverageAgainst: 0.269,
    qualityStarts: 38,
  },
  {
    teamName: 'LG',
    hitsAllowed: 46,
    hitByPitch: 54,
    walks: 473,
    intentionalWalks: 10,
    hitByPitchCount: 545,
    strikeouts: 957,
    wildPitches: 59,
    balks: 4,
    earnedRuns: 648,
    earnedRunAverage: 1.5,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.5,
    battingAverageAgainst: 0.276,
    qualityStarts: 51,
  },
  {
    teamName: '키움',
    hitsAllowed: 36,
    hitByPitch: 56,
    walks: 449,
    intentionalWalks: 14,
    hitByPitchCount: 526,
    strikeouts: 823,
    wildPitches: 55,
    balks: 7,
    earnedRuns: 690,
    earnedRunAverage: 1.51,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.51,
    battingAverageAgainst: 0.281,
    qualityStarts: 51,
  },
  {
    teamName: '롯데',
    hitsAllowed: 47,
    hitByPitch: 45,
    walks: 462,
    intentionalWalks: 16,
    hitByPitchCount: 530,
    strikeouts: 976,
    wildPitches: 70,
    balks: 3,
    earnedRuns: 678,
    earnedRunAverage: 1.54,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.54,
    battingAverageAgainst: 0.284,
    qualityStarts: 49,
  },
  {
    teamName: 'SSG',
    hitsAllowed: 41,
    hitByPitch: 37,
    walks: 564,
    intentionalWalks: 23,
    hitByPitchCount: 632,
    strikeouts: 1046,
    wildPitches: 52,
    balks: 4,
    earnedRuns: 741,
    earnedRunAverage: 1.57,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.57,
    battingAverageAgainst: 0.274,
    qualityStarts: 34,
  },
  {
    teamName: 'NC',
    hitsAllowed: 47,
    hitByPitch: 46,
    walks: 454,
    intentionalWalks: 7,
    hitByPitchCount: 513,
    strikeouts: 921,
    wildPitches: 40,
    balks: 6,
    earnedRuns: 672,
    earnedRunAverage: 1.49,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.49,
    battingAverageAgainst: 0.277,
    qualityStarts: 49,
  },
  {
    teamName: 'KIA',
    hitsAllowed: 31,
    hitByPitch: 32,
    walks: 495,
    intentionalWalks: 13,
    hitByPitchCount: 575,
    strikeouts: 996,
    wildPitches: 42,
    balks: 2,
    earnedRuns: 697,
    earnedRunAverage: 1.49,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.49,
    battingAverageAgainst: 0.27,
    qualityStarts: 37,
  },
  {
    teamName: '한화',
    hitsAllowed: 46,
    hitByPitch: 43,
    walks: 452,
    intentionalWalks: 10,
    hitByPitchCount: 519,
    strikeouts: 991,
    wildPitches: 54,
    balks: 4,
    earnedRuns: 663,
    earnedRunAverage: 1.5,
    blownSaves: 0, // 데이터에서 없으므로 0으로 설정
    whip: 1.5,
    battingAverageAgainst: 0.28,
    qualityStarts: 41,
  },
]
const TH_KEY_BATTER = [
  { title: '팀명', key: 'teamName' },
  { title: '안타', key: 'hits' },
  { title: '2루타', key: 'doubles' },
  { title: '3루타', key: 'triples' },
  { title: '홈런', key: 'homeRuns' },
  { title: '타점', key: 'RBIs' },
  { title: '도루', key: 'stolenBases' },
  { title: '볼넷', key: 'walks' },
  { title: '고의4구', key: 'intentionalWalks' },
  { title: '사구', key: 'hitByPitchCount' },
  { title: '삼진', key: 'strikeouts' },
  { title: '병살', key: 'doublePlays' },
  { title: '장타율', key: 'sluggingPercentage' },
  { title: '출루율', key: 'onBasePercentage' },
  { title: '실책', key: 'errors' },
  { title: 'OPS', key: 'ops' },
  { title: '타율', key: 'battingAverage' },
]
const batterData = [
  {
    teamName: 'KT',
    hits: 1263,
    doubles: 198,
    triples: 13,
    homeRuns: 133,
    RBIs: 637,
    stolenBases: 54,
    walks: 518,
    intentionalWalks: 17,
    hitByPitchCount: 40,
    strikeouts: 1028,
    doublePlays: 102,
    sluggingPercentage: 0.414,
    onBasePercentage: 0.353,
    errors: 83,
    ops: 0.767,
    battingAverage: 0.277,
  },
  {
    teamName: '삼성',
    hits: 1191,
    doubles: 185,
    triples: 14,
    homeRuns: 160,
    RBIs: 645,
    stolenBases: 109,
    walks: 474,
    intentionalWalks: 12,
    hitByPitchCount: 82,
    strikeouts: 1034,
    doublePlays: 86,
    sluggingPercentage: 0.423,
    onBasePercentage: 0.346,
    errors: 65,
    ops: 0.769,
    battingAverage: 0.268,
  },
  {
    teamName: '두산',
    hits: 1260,
    doubles: 216,
    triples: 21,
    homeRuns: 134,
    RBIs: 669,
    stolenBases: 165,
    walks: 461,
    intentionalWalks: 17,
    hitByPitchCount: 72,
    strikeouts: 998,
    doublePlays: 97,
    sluggingPercentage: 0.423,
    onBasePercentage: 0.349,
    errors: 65,
    ops: 0.772,
    battingAverage: 0.277,
  },
  {
    teamName: 'LG',
    hits: 1217,
    doubles: 207,
    triples: 26,
    homeRuns: 97,
    RBIs: 665,
    stolenBases: 157,
    walks: 559,
    intentionalWalks: 18,
    hitByPitchCount: 60,
    strikeouts: 858,
    doublePlays: 87,
    sluggingPercentage: 0.408,
    onBasePercentage: 0.366,
    errors: 78,
    ops: 0.774,
    battingAverage: 0.281,
  },
  {
    teamName: '키움',
    hits: 1165,
    doubles: 194,
    triples: 19,
    homeRuns: 95,
    RBIs: 565,
    stolenBases: 57,
    walks: 434,
    intentionalWalks: 10,
    hitByPitchCount: 69,
    strikeouts: 975,
    doublePlays: 88,
    sluggingPercentage: 0.382,
    onBasePercentage: 0.337,
    errors: 91,
    ops: 0.719,
    battingAverage: 0.265,
  },
  {
    teamName: '롯데',
    hits: 1244,
    doubles: 247,
    triples: 34,
    homeRuns: 113,
    RBIs: 654,
    stolenBases: 94,
    walks: 417,
    intentionalWalks: 12,
    hitByPitchCount: 58,
    strikeouts: 935,
    doublePlays: 84,
    sluggingPercentage: 0.432,
    onBasePercentage: 0.349,
    errors: 94,
    ops: 0.781,
    battingAverage: 0.283,
  },
  {
    teamName: 'SSG',
    hits: 1194,
    doubles: 201,
    triples: 17,
    homeRuns: 127,
    RBIs: 624,
    stolenBases: 127,
    walks: 425,
    intentionalWalks: 12,
    hitByPitchCount: 69,
    strikeouts: 975,
    doublePlays: 78,
    sluggingPercentage: 0.409,
    onBasePercentage: 0.34,
    errors: 100,
    ops: 0.749,
    battingAverage: 0.27,
  },
  {
    teamName: 'NC',
    hits: 1177,
    doubles: 191,
    triples: 11,
    homeRuns: 152,
    RBIs: 659,
    stolenBases: 97,
    walks: 469,
    intentionalWalks: 14,
    hitByPitchCount: 119,
    strikeouts: 1050,
    doublePlays: 85,
    sluggingPercentage: 0.426,
    onBasePercentage: 0.355,
    errors: 80,
    ops: 0.781,
    battingAverage: 0.272,
  },
  {
    teamName: 'KIA',
    hits: 1382,
    doubles: 243,
    triples: 25,
    homeRuns: 147,
    RBIs: 728,
    stolenBases: 115,
    walks: 477,
    intentionalWalks: 17,
    hitByPitchCount: 57,
    strikeouts: 819,
    doublePlays: 104,
    sluggingPercentage: 0.459,
    onBasePercentage: 0.369,
    errors: 114,
    ops: 0.828,
    battingAverage: 0.3,
  },
  {
    teamName: '한화',
    hits: 1192,
    doubles: 196,
    triples: 17,
    homeRuns: 115,
    RBIs: 624,
    stolenBases: 64,
    walks: 460,
    intentionalWalks: 14,
    hitByPitchCount: 78,
    strikeouts: 927,
    doublePlays: 86,
    sluggingPercentage: 0.405,
    onBasePercentage: 0.35,
    errors: 83,
    ops: 0.755,
    battingAverage: 0.273,
  },
]
const TH_KEY_TEAM = [
  { title: '팀명', key: 'teamName' },
  { title: 'KT (승-패-무)', key: 'KT' },
  { title: '삼성 (승-패-무)', key: 'Samsung' },
  { title: '두산 (승-패-무)', key: 'Doosan' },
  { title: 'LG (승-패-무)', key: 'LG' },
  { title: '키움 (승-패-무)', key: 'Kiwoom' },
  { title: '롯데 (승-패-무)', key: 'Lotte' },
  { title: 'SSG (승-패-무)', key: 'ssg' },
  { title: 'NC (승-패-무)', key: 'NC' },
  { title: 'KIA (승-패-무)', key: 'KIA' },
  { title: '한화 (승-패-무)', key: 'Hanwha' },
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
]

function RankingPage() {
  return (
    <div className="w-full">
      <TabNavigation tabs={TABS} activeTab={TABS[0]} />

      <SectionWrapper>
        <Title text={`2024 시즌 팀 순위`} />
        <p className="mt-2 font-thin text-gray-400">
          올해 kt wiz 순위를 살펴보세요.
        </p>
        <LineChartComponent />
      </SectionWrapper>

      <SectionWrapper>
        <Title text={`2024 시즌 팀 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 기록을 살펴보세요.
        </p>
        <Table data={teamData} thKey={TH_KEY} />
      </SectionWrapper>

      <SectionWrapper>
        <Title text={`2024 시즌 팀 투수 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 투수 기록을 살펴보세요.
        </p>
        <Table data={pitcherData} thKey={TH_KEY_PITCHER} />
      </SectionWrapper>

      <SectionWrapper>
        <Title text={`2024 시즌 팀 타자 기록`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 타자 기록을 살펴보세요.
        </p>
        <Table data={batterData} thKey={TH_KEY_BATTER} />
      </SectionWrapper>

      <SectionWrapper>
        <Title text={`2024 시즌 팀 간 승패표`} />
        <p className="my-5 mt-2 font-thin text-gray-400">
          올해 kt wiz 팀 간 승패표를 살펴보세요.
        </p>
        <Table data={TEAM_DATA} thKey={TH_KEY_TEAM} />
      </SectionWrapper>
    </div>
  )
}

export default RankingPage

function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 w-full">{children}</section>
}
