import { Video } from '@/types/media'
import Link from 'next/link'

interface MainVideoProps {
  videos: Video[]
}

export default function MainVideo({ videos }: MainVideoProps) {
  const linkId = videos[0]?.videoLink
  const clipNoMatch = linkId.match(/clipNo=(\d+)/)
  const clipNo = clipNoMatch ? clipNoMatch[1] : null
  const embedUrl = `https://tv.naver.com/embed/${clipNo}`

  return (
    <div className="page py-10">
      <div className="relative h-full w-full py-16">
        <div className="absolute top-0 z-0 flex w-full justify-center">
          <img
            src="/images/main/img-title-video.png"
            alt="wiz gallery"
            className="h-[150px] w-[700px] overflow-hidden"
          />
        </div>
        <div className="relative z-10 h-full w-full pt-14">
          <div className="flex justify-center">
            <iframe
              src={embedUrl}
              style={{
                width: '1100px',
                height: '618px',
                borderRadius: '20px',
              }}
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 flex justify-center">
            <div className="grid w-full max-w-[1100px] grid-cols-1 gap-2 lg:grid-cols-4">
              {videos.slice(1).map(
                (video) =>
                  video && (
                    <Link
                      key={video.artcSeq}
                      href={`/media/highlight/${video.artcSeq}`}
                      className="flex h-full w-full flex-col rounded-lg p-1"
                    >
                      <div className="flex h-full w-full lg:flex-col">
                        <img
                          src={
                            video.imgFilePath || '/images/placeholder-img.png'
                          }
                          alt={video.artcTitle}
                          className="h-[160px] w-[280px] rounded-md object-cover"
                        />
                        <div className="mt-2 flex w-full flex-1 flex-col px-4 text-center">
                          <div className="flex justify-between py-1 text-xs text-gray-500">
                            <div className="rounded-xl bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6] px-2 py-1 text-xs font-bold text-white">
                              하이라이트
                            </div>
                            <p className="mt-1">
                              {new Date(video.regDttm).toLocaleDateString()}
                            </p>
                          </div>
                          <p className="mt-2 line-clamp-2 text-pretty font-bold sm:text-2xl lg:text-sm">
                            {video.artcTitle}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ),
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10">
          <Link
            href="/media/highlight"
            className="flex h-14 w-80 items-center justify-center rounded-md border border-black font-bold"
          >
            더 많은 영상보기
          </Link>
        </div>
      </div>
    </div>
  )
}
