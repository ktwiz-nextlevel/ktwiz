import MainGallery from '@/components/main/main-gallery'
import MainVideo from '@/components/main/main-video'
import { getMainPhotoList, getMainVideoList } from '@/services/media-service'
import Link from 'next/link'

export default async function Page() {
  const [videoData, photoData] = await Promise.all([
    getMainVideoList(),
    getMainPhotoList(),
  ])
  return (
    <div className="">
      <div className="relative h-[1000px] w-full bg-[url('/images/main/2024_post_bg_web.png')] bg-cover bg-center">
        <div className="absolute bottom-0 left-0 flex h-[250px] w-full items-center justify-center bg-black/45">
          <div className="page">
            <div className="w-[350px]">
              <span className="rounded-full bg-gradient-to-r from-[#f53232] via-[#cc65de] to-[#2ab2c6] px-3 py-1 text-xs font-bold text-white">
                위즈소식
              </span>
              <h1 className="mt-4 text-white">
                [안내]2024 정규리그 홈경기 운영안내
              </h1>
              <p className="mb-3 mt-3 text-xs font-thin text-gray-400">
                안녕하세요, kt wiz 야구단입니다2024 정규리그 홈경기 운영
                안내드리며, 원활한 정규시즌 경기 관람을 위해 공지 내 내용을
                확인...
              </p>
              <Link href="/fan/board" className="text-sm text-white">
                자세히보기 &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
      <MainVideo videos={videoData} />
      <MainGallery photoList={photoData} />
    </div>
  )
}
