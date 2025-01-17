import { getPopularVideoList } from '@/services/media-service'
import PopularVideoList from './popular-video-list'

export default async function PopularVideoWrapper() {
  const popularVideos = await getPopularVideoList()
  return <PopularVideoList videos={popularVideos} />
}
