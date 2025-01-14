import { Photo, Video } from '@/types/media'

export async function getPopularVideoList() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizhighlight_top3`
    const response = await fetch(url)
    const result = await response.json()
    return result.top3 as Video[]
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getVideoDetail(videoId: number) {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/article/wizhighlightdetail?artcSeq=${videoId}`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.article as Video
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}

export async function getMainVideoList() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/media/highlightlist?count=5`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.list as Video[]
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}
export async function getMainPhotoList() {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER_URL}/media/photolist?count=12`
    const response = await fetch(url)
    const result = await response.json()
    return result.data.list as Photo[]
  } catch (error: unknown) {
    console.log(error)
    throw new Error(`An error happened: ${error}`)
  }
}
