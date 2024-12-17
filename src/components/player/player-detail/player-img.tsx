export default function PlayerImg({ img }) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300">
      <img
        src="/images/testimg.jpg"
        alt="선수 이미지"
        className="h-full object-contain"
      />
    </div>
  )
}
