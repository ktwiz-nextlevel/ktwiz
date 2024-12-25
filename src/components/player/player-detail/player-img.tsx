interface PlayerImage {
  img: string
}

export default function PlayerImg({ img }: PlayerImage) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300">
      <img
        src={img || '/images/testimg.jpg'}
        alt="선수 이미지"
        className="h-full w-full object-cover"
      />
    </div>
  )
}
