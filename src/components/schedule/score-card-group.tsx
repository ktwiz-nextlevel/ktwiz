import ScoreCard from './score-card'

export default async function ScoreCardGroup() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/recentGames`,
  )
  const { data } = await res.json()
  return (
    <div className="score-card-group flex gap-1">
      <ScoreCard className="hidden flex-1 md:block" gameInfo={data.prev} />
      <ScoreCard
        className="w-full md:w-5/12"
        isCenter={true}
        gameInfo={data.current}
      />
      <ScoreCard className="hidden flex-1 md:block" gameInfo={data.next} />
    </div>
  )
}
