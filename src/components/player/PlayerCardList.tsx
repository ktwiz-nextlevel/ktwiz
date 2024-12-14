export default function PlayerCardList() {
  const cards = ['이미지 1', '이미지 2', '이미지 3', '이미지 4', '이미지 5']

  return (
    <div className="h-96 overflow-y-auto border p-2">
      <div className="flex flex-col gap-4">
        {cards.map((card, id) => (
          <div
            key={id}
            className="flex h-24 items-center justify-center bg-gray-200"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  )
}
