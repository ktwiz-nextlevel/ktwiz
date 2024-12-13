export const HOME = { path: '/', title: 'HOME' }
export const WIZPARK = {
  path: '/wizpark/intro',
  title: '수원 kt wiz park',
  parent: HOME,
}
//wizpark/intro banner title
export const WIZPARK_SUB = {
  path: '/wizpark/intro',
  title: 'Suwon kt wiz park',
  parent: HOME,
}
//wizpark/intro's tabs
export const WIZPARK_INTRO = {
  path: '/wizpark/intro',
  title: '구장 소개',
  parent: WIZPARK_SUB,
}
export const WIZPARK_GUIDE = {
  path: '/wizpark/guide',
  title: '구장 안내도',
  parent: WIZPARK_SUB,
}
//wizpark/parking
export const WIZPARK_PARKING_AND_SHUTTLE = {
  path: '/wizpark/parking',
  title: '주차예약',
  parent: WIZPARK,
}
//wizpark/parking 's tabs
export const WIZPARK_PARKING = {
  path: '/wizpark/parking',
  title: '주차 예약 안내',
  parent: WIZPARK_PARKING_AND_SHUTTLE,
}
//wizpark/location
export const WIZPARK_LOCATION = {
  path: '/wizpark/location',
  title: '찾아오기',
  parent: WIZPARK,
}
//wizpark/iksan'
export const WIZPARK_IKSAN = {
  path: '/wizpark/iksan',
  title: '익산야구장',
  parent: WIZPARK,
}

export const WIZPARK_INTRO_TAB = [WIZPARK_INTRO, WIZPARK_GUIDE]
export const WIZPARK_PARKING_AND_SHUTTLE_TAB = [WIZPARK_PARKING]
