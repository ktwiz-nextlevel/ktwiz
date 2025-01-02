import ScoreCard from './score-card'

export default function ScoreCardGroup() {
  return (
    <div className="flex gap-1">
      <ScoreCard className="flex-1" />
      <ScoreCard className="w-5/12" isCenter={true} />
      <ScoreCard className="flex-1" />
    </div>
  )
}
