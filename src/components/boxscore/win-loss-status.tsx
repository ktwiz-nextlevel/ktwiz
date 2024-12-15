export function WinLossStats({
  isWin,
  style = 'right',
}: {
  isWin: boolean
  style?: 'left' | 'right'
}) {
  if (isWin)
    return (
      <span
        className={`${style === 'left' ? 'text-left' : 'text-right'} text-sm text-[--main-red-color]`}
      >
        승
      </span>
    )

  return (
    <span
      className={`${style === 'left' ? 'text-left' : 'text-right'} text-right text-sm text-gray-500`}
    >
      패
    </span>
  )
}
