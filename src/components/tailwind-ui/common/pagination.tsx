'use client'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Pagination({ totalPages }: { totalPages: number }) {
  // 현재 경로와 쿼리 파라미터를 가져옴
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  //페이지 번호에 맞는 URL 생성 함수
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  // 현재 페이지를 기준으로 페이지네이션 번호를 생성
  const allPages = generatePagination(currentPage, totalPages)

  return (
    <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex flex-none">
        <Link
          href={createPageURL(Math.max(currentPage - 10, 1))} // 10페이지 뒤로 이동, 최소값은 1
          className={clsx(
            'inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            { 'pointer-events-none text-gray-300': currentPage <= 10 }, // 현재 페이지가 10 이하인 경우 비활성화
          )}
          aria-disabled={currentPage <= 10}
        >
          <ChevronDoubleLeftIcon
            aria-hidden="true"
            className="mr-1 size-5 text-gray-400 hover:text-gray-700"
          />
        </Link>
      </div>

      <div className="-mt-px flex flex-none sm:hidden">
        <Link
          href={createPageURL(currentPage - 1)}
          className={clsx(
            'inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            { 'pointer-events-none text-gray-300': currentPage <= 1 },
          )}
          aria-disabled={currentPage <= 1}
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="mr-1 size-5 text-gray-400 hover:text-gray-700"
          />
        </Link>
      </div>

      <div className="-mt-px flex">
        {allPages.map((page, index) =>
          page === '...' ? (
            <span
              key={index}
              className="inline-flex items-center border-t-2 border-transparent px-2 pt-4 text-sm font-medium text-gray-500"
            >
              ...
            </span>
          ) : (
            <Link
              key={index}
              href={createPageURL(page)}
              aria-current={currentPage === page ? 'page' : undefined}
              className={clsx(
                'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium',
                {
                  'border-[--main-red-color] text-[--main-red-color]':
                    currentPage === page,
                  'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                    currentPage !== page,
                  'hidden sm:inline-flex':
                    page !== currentPage && page !== 1 && page !== totalPages, // 작은 화면에서 일부 페이지 숨김
                },
              )}
            >
              {page}
            </Link>
          ),
        )}
      </div>

      <div className="-mt-px flex flex-none sm:hidden">
        <Link
          href={createPageURL(currentPage + 1)}
          className={clsx(
            'inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            { 'pointer-events-none text-gray-300': currentPage >= totalPages },
          )}
          aria-disabled={currentPage >= totalPages}
        >
          <ChevronRightIcon
            aria-hidden="true"
            className="ml-1 size-5 text-gray-400 hover:text-gray-700"
          />
        </Link>
      </div>

      <div className="-mt-px flex flex-none">
        <Link
          href={createPageURL(Math.min(currentPage + 10, totalPages))} // 10페이지 앞으로 이동, 최대값은 전체 페이지 수
          className={clsx(
            'inline-flex items-center border-t-2 border-transparent px-3 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700',
            {
              'pointer-events-none text-gray-300':
                currentPage >= totalPages - 10,
            },
          )}
          aria-disabled={currentPage >= totalPages - 10}
        >
          <ChevronDoubleRightIcon
            aria-hidden="true"
            className="mr-1 size-5 text-gray-400 hover:text-gray-700"
          />
        </Link>
      </div>
    </nav>
  )
}

// 페이지네이션 번호를 생성하는 함수
function generatePagination(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    // 페이지 수가 7 이하인 경우 모든 페이지를 표시
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  if (currentPage <= 4) {
    // 현재 페이지가 4 이하인 경우 앞쪽 5개 페이지와 마지막 페이지를 표시
    return [1, 2, 3, 4, 5, '...', totalPages]
  }

  if (currentPage >= totalPages - 3) {
    //현재 페이지가 끝에서 3개 이내인 경우 마지막 5개 페이지와 첫 페이지를 표시
    return [
      1,
      '...',
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ]
  }
  // 그 외의 경우는 현재 페이지를 기준으로 앞 뒤 2페이지씩 표시
  return [
    1,
    '...',
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    '...',
    totalPages,
  ]
}
