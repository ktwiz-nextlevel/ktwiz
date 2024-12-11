import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

interface Page {
  name: string // 페이지 이름
}

interface BreadcrumbProps {
  pages: Page[]
}

/** 공통 Breadcrumbs 컴포넌트 */
export default function Breadcrumbs({ pages }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
            <span className="sr-only">Home</span>
          </div>
        </li>
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className="flex items-center">
              {index > 0 && (
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 shrink-0 text-gray-400"
                />
              )}
              <p
                className={`ml-4 text-sm font-medium ${
                  index === pages.length - 1
                    ? 'text-red-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {page.name}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
