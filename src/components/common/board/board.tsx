import { cn } from '@/utils'

function Board({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 overflow-hidden rounded-md border-gray-200 bg-[--red-color-300]">
      <ul role="list" className="divide-y divide-gray-200">
        {children}
      </ul>
    </div>
  )
}
function BoardLi({
  children,
  style,
}: {
  children: React.ReactNode
  style?: string
}) {
  return (
    <li className={cn('flex justify-center px-6 py-4', style)}>{children}</li>
  )
}
Board.li = BoardLi

export default Board
