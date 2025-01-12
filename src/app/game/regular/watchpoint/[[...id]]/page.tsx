import Board from '@/components/common/board/board'
import { TabNavigation } from '@/components/common/tab-menu/tab-navigation'
import Title from '@/components/common/title/title'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'

import BoardHeader from '@/components/boxscore/score-board/board-header'
import { RadarChartComponent as Chart } from './radar-chart'
import LineUp from './line-up'

const TABS = [
  { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
  {
    title: '관전 포인트',
    href: '/game/regular/watchpoint',
    path: 'watchpoint',
  },
]
async function BoxscorePage({ params }: { params: Promise<{ id: string[] }> }) {
  const { id } = await params
  const gameDate = id ? id[0] : '20241008'
  const gmkey = id ? id[1] : '33331008LGKT0'

  try {
    const [response, watchPointData] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/boxscore?gameDate=${gameDate}&gmkey=${gmkey}`,
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/watchpoint?gameDate=${gameDate}&gmkey=${gmkey}`,
      ),
    ])

    if (!response.ok) {
      throw new Error('게임 정보 요청 실패')
    }
    if (!watchPointData.ok) {
      throw new Error('Watchpoint 데이터 요청 실패')
    }

    // JSON 응답 파싱
    const data = await response.json()
    const watchData = await watchPointData.json()

    const BOARD_INFO = [
      {
        title: '승',
        key: 'win',
      },
      {
        title: '패',
        key: 'lose',
      },
      {
        title: '무',
        key: 'none',
      },
      {
        title: '승률',
        key: 'ballfour',
      },
    ]
    const value = [72, 70, 2, 0.507]
    return (
      <div className="w-full">
        <BreadCrumb />
        <Board>
          <Board.li style="w-full flex justify-center">
            <BoardHeader gameDate={gameDate} gmkey={gmkey} />
          </Board.li>
          <Board.li style="flex justify-center gap-6">
            <div>
              <div className="flex">
                {BOARD_INFO.map((info, idx) => (
                  <span
                    key={info.title + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center hover:text-gray-800`}
                  >
                    {info.title}
                  </span>
                ))}
              </div>
              <div className="flex">
                {value.map((info, idx) => (
                  <span
                    key={info + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center text-gray-400 hover:text-gray-800`}
                  >
                    {info}
                  </span>
                ))}
              </div>
              <div className="flex">
                {value.map((info, idx) => (
                  <span
                    key={info + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center text-gray-400 hover:text-gray-800`}
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>
            <img src={'/images/vs.svg'} alt="vs" />
            <div>
              <div className="flex">
                {BOARD_INFO.map((info, idx) => (
                  <span
                    key={info.title + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center hover:text-gray-800`}
                  >
                    {info.title}
                  </span>
                ))}
              </div>
              <div className="flex">
                {value.map((info, idx) => (
                  <span
                    key={info + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center text-gray-400 hover:text-gray-800`}
                  >
                    {info}
                  </span>
                ))}
              </div>
              <div className="flex">
                {value.map((info, idx) => (
                  <span
                    key={info + 'game-info' + idx}
                    className={`ml-2 w-10 p-1 text-center text-gray-400 hover:text-gray-800`}
                  >
                    {info}
                  </span>
                ))}
              </div>
            </div>
          </Board.li>
        </Board>
        <TabNavigation tabs={TABS} activeTab={TABS[1]} />
        <div className="flex w-full flex-wrap justify-center">
          <SectionWrapper>
            <Title text={`선발 투수 비교`} />
            <p className="my-5 mt-2 font-thin text-gray-500">
              각 팀의 선발 투수의 데이터입니다. 마우스를 호버해보세요
            </p>
            <Chart gameDate={gameDate} gmkey={gmkey} />
          </SectionWrapper>

          <SectionWrapper>
            <Title text={`라인업`} />
            <p className="my-5 mt-2 font-thin text-gray-500">
              각 구단 아이콘을 클릭하여 구단별 라인업을 살펴보세요.
            </p>
            <div className="flex justify-center">
              <LineUp
                home={watchData.data.homeLineup}
                visit={watchData.data.visitLineup}
                homeLogo={data.data.schedule.current.homeLogo}
                visitLogo={data.data.schedule.current.visitLogo}
              />
            </div>
          </SectionWrapper>

          <SectionWrapper>
            <Title text={`중계 채널`} />
            <p className="my-5 mt-4 font-thin text-gray-500">
              해당 채널에서 경기를 중계합니다.
              <br /> {data.data.schedule.current.broadcast}
            </p>
            <p className="my-5 font-thin text-gray-500"></p>
          </SectionWrapper>
          <SectionWrapper>
            <></>
          </SectionWrapper>
        </div>
      </div>
    )
  } catch (error) {
    // 에러 처리
    console.error(error)
    return <div>게임 정보를 불러오는 데 오류가 발생했습니다.</div>
  }
}

export default BoxscorePage

function BreadCrumb() {
  return (
    <div className="mt-[50px] flex w-full justify-end">
      <Breadcrumbs pages={['HOME', '정규리그', '박스스코어']} />
    </div>
  )
}
function SectionWrapper({ children }: { children: React.ReactNode }) {
  return <section className="mt-10 h-[700px] w-1/2">{children}</section>
}
