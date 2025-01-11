import { PlayerCode } from '@/types'

interface PlayerCard {
  pcode: PlayerCode
  playerName: string
  playerPrvwImg?: string
  position?: string | undefined
}

interface PlayerListProps {
  cards: PlayerCard[]
  handleDrag: (card: PlayerCard, e: React.DragEvent<HTMLDivElement>) => void
  handleDragEnd: () => void
  draggedCard: PlayerCard | null
}

const PlayerList = ({
  cards,
  handleDrag,
  handleDragEnd,
  draggedCard,
}: PlayerListProps) => {
  return (
    <>
      <div className="w-full flex-shrink-0 rounded-lg p-4 shadow-md md:w-1/6">
        <div className="flex max-h-screen flex-col gap-4 overflow-y-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDrag(card, e)}
              onDragEnd={handleDragEnd}
              className={`group relative flex h-60 w-full cursor-pointer items-center justify-center rounded-lg bg-gray-200 transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95 ${
                draggedCard?.pcode === card.pcode ? 'opacity-50' : ''
              }`}
            >
              <img
                src={card.playerPrvwImg || '/images/ktwiz-basic-img.png'}
                alt={card.playerName}
                className="h-full w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="text-lg font-bold">{card.playerName}</div>
                {card.position && (
                  <div className="mt-1 text-sm text-gray-300">
                    {card.position}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PlayerList
