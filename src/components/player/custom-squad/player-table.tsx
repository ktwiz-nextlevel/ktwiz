interface CustomSquadTableProps {
  player: string[]
}

const CustomSquadTable = ({ player }: CustomSquadTableProps) => {
  const playerPosition = player.map((position) =>
    position.trim() === '' ? '' : position,
  )

  return (
    <>
      <div className="flex bg-gray-100 text-center">
        <div className="flex-1 border px-4 py-2 font-semibold">투수</div>
        <div className="flex-1 border px-4 py-2 font-semibold">포수</div>
        <div className="flex-1 border px-4 py-2 font-semibold">1루수</div>
        <div className="flex-1 border px-4 py-2 font-semibold">2루수</div>
        <div className="flex-1 border px-4 py-2 font-semibold">3루수</div>
        <div className="flex-1 border px-4 py-2 font-semibold">외야수 1</div>
        <div className="flex-1 border px-4 py-2 font-semibold">외야수 2</div>
        <div className="flex-1 border px-4 py-2 font-semibold">외야수 3</div>
        <div className="flex-1 border px-4 py-2 font-semibold">내야수</div>
      </div>
      <div className="flex text-center">
        <div className="flex-1 border px-4 py-2">{playerPosition[4]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[0]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[1]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[2]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[3]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[5]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[6]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[7]}</div>
        <div className="flex-1 border px-4 py-2">{playerPosition[8]}</div>
      </div>
    </>
  )
}

export default CustomSquadTable
