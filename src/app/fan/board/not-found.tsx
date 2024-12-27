import Link from 'next/link'
import { FaceFrownIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 pt-10">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">Not Found</h2>
      <p>Could not find the requested post.</p>
      <Link
        href="/fan/board"
        className="mt-4 rounded-md bg-[--main-red-color] px-4 py-2 text-sm text-white"
      >
        Go Back
      </Link>
    </div>
  )
}
