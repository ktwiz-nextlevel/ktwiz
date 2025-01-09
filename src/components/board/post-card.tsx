'use client'
import { PostListItem } from '@/types'
import { useRouter } from 'next/navigation'
interface PostCardProps {
  posts: PostListItem[] | null
}

export default function PostCard({ posts }: PostCardProps) {
  const router = useRouter()

  return (
    <div className="min-h-[580px]">
      <div className="flow-root">
        <div className="p-2">
          <div className="inline-block w-full py-2 align-middle">
            <table className="w-full table-fixed divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/12 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                  >
                    NO
                  </th>
                  <th
                    scope="col"
                    className="w-1/2 px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    className="w-1/6 px-3 py-3.5 text-center text-sm font-semibold text-gray-900"
                  >
                    작성자
                  </th>
                  <th
                    scope="col"
                    className="hidden w-1/6 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    작성일
                  </th>
                  <th
                    scope="col"
                    className="hidden w-1/12 px-3 py-3.5 text-center text-sm font-semibold text-gray-900 lg:table-cell"
                  >
                    조회수
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {posts && posts.length > 0 ? (
                  posts.map((post) => (
                    <tr
                      key={post.id}
                      onClick={() => {
                        router.push(`/fan/board/${post.id}`)
                      }}
                      className="cursor-pointer hover:bg-gray-50"
                    >
                      <td className="py-4 pl-4 pr-3 text-center text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                        {post.id}
                      </td>
                      <td className="truncate px-3 py-4 text-center text-sm text-gray-500">
                        {post.title}
                      </td>
                      <td className="truncate px-3 py-4 text-center text-sm text-gray-500">
                        {post.author}
                      </td>
                      <td className="hidden truncate px-3 py-4 text-center text-sm text-gray-500 lg:table-cell">
                        {post.createdAt}
                      </td>
                      <td className="hidden truncate px-3 py-4 text-center text-sm text-gray-500 lg:table-cell">
                        {post.viewCount}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-8 text-center text-sm text-gray-500"
                    >
                      검색 내용에 관련한 게시글이 없습니다.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
