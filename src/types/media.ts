export interface Photo {
  artcNextSeq: number
  artcPrevSeq: number
  artcSeq: number
  artcSubTitle: string
  artcTitle: string
  boardCatSeq: number
  boardCode: string
  contentsDate: string
  delYn: string
  endDttm: number
  imgFilePath: string
  maxArticlePerPage: number
  regDttm: number
  regr: string
  startDttm: number
  totalPage: number
  updDttm: number
  updr: string
  useYn: string
  viewCnt: number
}

export interface Video {
  artcNextSeq: number
  artcPrevSeq: number
  artcSeq: number
  artcTitle: string
  boardCatSeq: number
  boardCode: string
  contentsDate: string
  delYn: string
  imgFilePath: string
  maxArticlePerPage: number
  refSeq: number
  regDttm: number
  regr: string
  totalPage: number
  updDttm: number
  updr: string
  useYn: string
  videoLink: string
  viewCnt: number
}
export interface BookmarkEntity {
  id: number
  user_id: string
  video_id: number
  video_title: string
  video_thumbnail: string
  video_reg: number
}
export interface BookmarkListItem {
  id: number
  userId: string
  videoId: number
  videoTitle: string
  videoThumbnail: string
  videoReg: number
}
