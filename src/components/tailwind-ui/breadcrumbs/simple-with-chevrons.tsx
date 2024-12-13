'use client'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

interface BreadcrumbProps {
  pages: string[]
}

/**
 * 공통 Breadcrumbs 컴포넌트
 * 사용 방법
 * 사용하실 페이지에서
 * const pages = ['Home', 'About', 'Contact']
 * 이런식으로 배열을 만들어 Breadcrumbs 컴포넌트에 props로 넘겨줍니다.
 * 제일 마지막 문자는 빨간색으로 표시됩니다.
 */
export default function Breadcrumbs({ pages }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <HomeIcon
            aria-hidden="true"
            className="size-4 shrink-0 text-gray-300"
          />
          <span className="sr-only">Home</span>
        </li>
        {pages.map((page, index) => (
          <li key={page}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-gray-300"
                />
              )}
              <p
                className={`ml-4 text-sm font-medium ${
                  index === pages.length - 1
                    ? 'text-red-500'
                    : 'text-gray-300 hover:text-gray-700'
                }`}
              >
                {page}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
