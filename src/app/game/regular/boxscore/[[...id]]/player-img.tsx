'use client'
import Image from 'next/image'

interface PlayerImageProps {
  player: {
    name: string
  }
}

const PlayerImage: React.FC<PlayerImageProps> = ({ player }) => {
  const defaultImage = '/images/players/player.png'

  return (
    <Image
      src={`/images/players/${player.name}.png`}
      alt="player"
      width={100}
      height={100}
      onError={(e: any) => {
        e.target.src = defaultImage
      }}
    />
  )
}

export default PlayerImage
