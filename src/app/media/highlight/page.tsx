import NoDataList from '@/components/media/common/no-data-list'
import PopularVideoList from '@/components/media/video/popular-video-list'
import VideoList from '@/components/media/video/video-list'
import VideoSearchBar from '@/components/media/video/video-search-bar'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { NUMBER_OF_VIDEOS_TO_FETCH } from '@/contants/media'
import { getPopularVideoList, getVideoList } from '@/services/media-action'

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
    <div className="flex w-full px-10 pb-16">
      <div className="mx-auto max-w-[1100px] flex-1">
        <div className="mt-[50px] flex w-full justify-end">
          <Breadcrumbs pages={['HOME', 'MEDIA', '하이라이트']} />
        </div>
        <div className="py-5 pb-10">
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
    </div>
  )
}