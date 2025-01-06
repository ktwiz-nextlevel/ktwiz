import BookmarkButton from '@/components/media/video/bookmark-button'
import RelatedVideoList from '@/components/media/video/related-video-list'
import VideoEmbed from '@/components/media/video/video-embed'
import Breadcrumbs from '@/components/tailwind-ui/breadcrumbs/simple-with-chevrons'
import { checkBookmarked, getVideoDetail } from '@/services/media-action'
import { Video } from '@/types/media'
import { CalendarDaysIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

async function fetchAdjacentVideos(
  startId: number | null,
  count: number,
  isNext: boolean,
): Promise<Video[]> {
  const videos: Video[] = []
  let currentId = startId

  while (videos.length < count && currentId) {
    const result = await getVideoDetail(currentId)
    videos.push(result)
    currentId = isNext ? result.artcNextSeq : result.artcPrevSeq
  }
  return videos
}

async function fetchFourAdjacentVideos(
  prevId: number | null,
  nextId: number | null,
): Promise<Video[]> {
  const prevVideos = prevId ? await fetchAdjacentVideos(prevId, 2, false) : []
  const nextVideos = nextId
    ? await fetchAdjacentVideos(nextId, 4 - prevVideos.length, true)
    : []

  return [...prevVideos, ...nextVideos].slice(0, 4)
}

export default async function VideoDetailPage({
  params,
}: {
  params: {
    videoId: number
  }
}) {
  const { videoId } = params

  const result = await getVideoDetail(videoId)
  const linkId = result.videoLink

  const clipNoMatch = linkId.match(/clipNo=(\d+)/)
  const clipNo = clipNoMatch ? clipNoMatch[1] : null

  if (!clipNo) {
    console.error('Invalid linkId format:', linkId)
    return <div>Error: Invalid video link</div>
  }

  const embedUrl = `https://tv.naver.com/embed/${clipNo}`

  // 4개의 인접 영상을 가져옴
  const adjacentVideos = await fetchFourAdjacentVideos(
    result.artcPrevSeq,
    result.artcNextSeq,
  )

  const isBookmarked = await checkBookmarked(videoId)

  return (
    <div className="h-full w-full px-12 py-10">
      <div className="flex w-full justify-end">
        <Breadcrumbs pages={['HOME', 'MEDIA', '하이라이트']} />
      </div>
      <div className="flex w-full space-x-10 py-10">
        <div>
          <VideoEmbed embedUrl={embedUrl} />
        </div>
        <div className="flex flex-col">
          <p className="mb-4 font-semibold">하이라이트 영상 목록</p>
          <RelatedVideoList videos={adjacentVideos} />
        </div>
      </div>
      <div className="flex justify-between space-x-28">
        <div className="flex flex-1 items-center justify-between bg-[--white-color-200] px-7 py-3">
          <div>
            <p>{result.artcTitle}</p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[--gray-color-100]">
            <div className="flex items-center gap-1">
              <CalendarDaysIcon className="h-4 w-4" />
              <p>{new Date(result.regDttm).toLocaleDateString()}</p>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircleIcon className="h-4 w-4" />
              <p>{result.viewCnt}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <BookmarkButton
            videoId={result.artcSeq}
            videoTitle={result.artcTitle}
            videoThumbnail={result.imgFilePath}
            videoReg={result.regDttm}
            isBookmarked={isBookmarked}
          />
          <Link
            href="/media/highlight"
            className="bg-[--black-color-600] px-4 py-2 text-sm text-white hover:bg-gray-500"
          >
            목록보기
          </Link>
        </div>
      </div>
    </div>
  )
}
