import NoDataList from '@/components/media/common/no-data-list'
import PopularVideoList from '@/components/media/video/popular-video-list'
import VideoList from '@/components/media/video/video-list'
import VideoSearchBar from '@/components/media/video/video-search-bar'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { NUMBER_OF_VIDEOS_TO_FETCH } from '@/contants/media'
import { getVideoList } from '@/services/media-action'
import { getPopularVideoList } from '@/services/media-service'
export async function generateMetadata({
  searchParams,
}: {
  searchParams: {
    query?: string
  }
}) {
  const query = searchParams?.query || ''

  return {
    title: `하이라이트  ${query} 관련 영상 `,
    description: `하이라이트 ${query} 영상 목록입니다. 인기 영상 Top3를 살펴보고 영상을 시청해보세요!`,
  }
}
export default async function HighlightPage({
  searchParams,
}: {
  searchParams: {
    query?: string
  }
}) {
  const query = searchParams?.query || ''
  const [initialVideos, popularVideos] = await Promise.all([
    getVideoList(0, NUMBER_OF_VIDEOS_TO_FETCH, query),
    getPopularVideoList(),
  ])

  return (
    <div className="page px-10 pb-16">
      <div className="mt-[50px] flex w-full justify-end">
        <Breadcrumbs pages={['HOME', 'MEDIA', '하이라이트']} />
      </div>
      <div className="mb-10 border-b border-[--main-red-color] py-5 pb-10">
        <p className="py-5 text-sm font-semibold">인기영상 TOP3</p>
        <PopularVideoList videos={popularVideos} />
      </div>
      <VideoSearchBar />
      {initialVideos.length > 0 ? (
        <VideoList initialVideos={initialVideos} query={query} />
      ) : (
        <NoDataList />
      )}
    </div>
  )
}
