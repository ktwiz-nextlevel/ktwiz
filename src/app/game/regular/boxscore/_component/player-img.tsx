'use client'
import Image from 'next/image'
import { useState } from 'react'

function PlayerImage({
  player,
}: {
  player: { name: string; des: string | null; playerImg: string }
}) {
  const [imgSrc, setImgSrc] = useState(player.playerImg)

  return (
    <div className="flex">
      <Image
        src={imgSrc}
        alt="player"
        width={70}
        height={100}
        className="object-cover"
        onError={() => setImgSrc('/images/players/player.png')}
      />
      <div className="ml-2 w-[240px]">
        <h3 className="mb-3 text-base">{player.name}</h3>
        <p className="text-sm text-gray-400">{player.des}</p>
      </div>
    </div>
  )
}
export default PlayerImage
