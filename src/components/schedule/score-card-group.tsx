import ScoreCard from './score-card'

export default async function ScoreCardGroup() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/game/recentGames`,
  )
  const { data } = await res.json()
  return (
    <div className="flex gap-1">
      {JSON.stringify(data.data)}
      <ScoreCard className="flex-1" gameInfo={data.prev} />
      <ScoreCard className="w-5/12" isCenter={true} gameInfo={data.current} />
      <ScoreCard className="flex-1" gameInfo={data.next} />
    </div>
  )
}
