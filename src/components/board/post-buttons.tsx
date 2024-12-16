import Link from 'next/link'

export function CreatePost() {
  return (
    <Link
      href="/fan/board/write"
      className="flex h-10 items-center rounded-lg bg-gray-600 px-4 text-sm text-white"
    >
      <span className="hidden md:block">작성하기</span>{' '}
    </Link>
  )
}
