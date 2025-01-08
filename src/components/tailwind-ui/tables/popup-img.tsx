'use client'

import { useEffect, useState } from 'react'
async function getPlayerImg(name: string, keyName: string) {
  try {
    const res = await fetch(
      `http://54.180.228.165/api/player_img?team=${keyName}&name=${name}`,
    )
    if (!res.ok) {
      throw new Error('error')
    }
    return await res.json()
  } catch (error) {
    throw new Error('error')
  }
}
function PopupImg({
  position,
  name,
  keyName,
}: {
  position?: string
  name?: string
  keyName?: string
}) {
  const [data, setData] = useState<string | any>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const res = await getPlayerImg(name, keyName)
      setData(res.url)
      setHasError(false)
    } catch (error) {
      setHasError(true)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div
      className={`absolute z-20 h-[130px] w-[100px] rounded-md border border-[--main-red-color] ${position} bg-white`}
    >
      {/* {name} {keyName} */}
      <img
        src={hasError ? '/images/players/player.png' : data}
        className="h-full w-full"
      />
    </div>
  )
}

export default PopupImg
