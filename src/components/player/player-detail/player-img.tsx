import Image from 'next/image'

export default function PlayerImg({ img }) {
  return (
    <div className="flex h-96 w-full items-center justify-center bg-gray-300">
      <img src="/images/testimg.jpg" alt="선수이미지" />
    </div>
  )
}
