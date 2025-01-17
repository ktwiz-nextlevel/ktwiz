import Banner from '@/components/common/banner/banner'
import TabMenu from '@/components/common/tab-menu/tab-menu'
import NoDataList from '@/components/media/common/no-data-list'
import PhotoList from '@/components/media/photo/photo-list'
import PhotoSearchBar from '@/components/media/photo/photo-search-bar'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { MEDIA_BANNER_DATA } from '@/contants'
import { NUMBER_OF_PHOTOS_TO_FETCH } from '@/contants/media'
import { getPhotoList } from '@/services/media-action'
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: {
    photoCategory: number
  }
  searchParams: {
    query?: string
    type?: 'title' | 'content' | 'player'
    startDate?: string
    endDate?: string
  }
}) {
  const { photoCategory } = params
  const query = searchParams?.query || ''
  const startDate = searchParams?.startDate || ''
  const endDate = searchParams?.endDate || ''
  return {
    title: `wiz 포토 - ${photoCategory} 이미지`,
    description: `wiz 포토  ${photoCategory} 검색어 ${query}와 관련되어 있고, 작성일자가 ${startDate}날짜와 ${endDate}날짜 사이의 관련 데이터를 조회합니다.`,
  }
}
export default async function PhotoPage({
  params,
  searchParams,
}: {
  params: {
    photoCategory: number
  }
  searchParams: {
    query?: string
    type?: 'title' | 'content' | 'player'
    startDate?: string
    endDate?: string
  }
}) {
  const { photoCategory } = params
  const query = searchParams?.query || ''
  const startDate = searchParams?.startDate || ''
  const endDate = searchParams?.endDate || ''
  const initialPhotos = await getPhotoList(
    photoCategory,
    0,
    NUMBER_OF_PHOTOS_TO_FETCH,
    query,
    startDate,
    endDate,
  )

  return (
    <div>
      <Banner>
        <Banner.Heading
          title={MEDIA_BANNER_DATA['/photos'].title}
          subtitle={MEDIA_BANNER_DATA['/photos'].description}
        />
        {MEDIA_BANNER_DATA['/photos'].tabs && (
          <TabMenu tabs={MEDIA_BANNER_DATA['/photos'].tabs} />
        )}
      </Banner>
      <div className="page px-10 pb-16">
        <div className="mt-[50px] w-full justify-between space-y-4 lg:flex">
          <PhotoSearchBar />
          <Breadcrumbs pages={['HOME', 'MEDIA', 'wiz 포토']} />
        </div>
        {initialPhotos.length > 0 ? (
          <PhotoList
            initialPhotos={initialPhotos}
            category={photoCategory}
            query={query}
            startDate={startDate}
            endDate={endDate}
          />
        ) : (
          <NoDataList />
        )}
      </div>
    </div>
  )
}
