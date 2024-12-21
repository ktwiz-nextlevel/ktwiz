import { Batter, Pitcher } from '@/types'
import { TeamRank } from '@/types/team-rank'
import { cn } from '@/utils'

export function WithVerticalLines({
  data,
  thKey,
}: {
  data: Pitcher[] | Batter[] | TeamRank[]
  thKey: { title: string; key: keyof Pitcher | keyof Batter | keyof TeamRank }[]
}) {
  return (
    <div className="">
      <div className="mt-2 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300 border-t-2 border-gray-700">
              <thead>
                <tr className="divide-x divide-gray-200">
                  {thKey.map((th, idx) => {
                    return (
                      <th
                        key={th.key + idx}
                        scope="col"
                        className="border-none px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        {th.title}
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((player, idx) => (
                  <tr
                    key={`data ${idx}`}
                    className={`divide-x divide-gray-200 hover:bg-red-100 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} `}
                  >
                    {thKey.map((th, index) => {
                      return (
                        <td
                          key={th.key + index}
                          className={cn(
                            `${index === 0 ? `text-start` : 'text-center'} whitespace-nowrap border-none px-4 py-4 text-sm font-medium text-gray-900 sm:pl-0`,
                          )}
                        >
                          {index === 0 ? `${idx + 1} ` : ' '}
                          {player[th.key as keyof typeof player]}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
