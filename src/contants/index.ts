import { MenuData, LnbDataArray, BannerData } from '@/types'

export const MENU_DATA: MenuData[] = [
  {
    gnb: 'Kt wiz',
    href: '/ktwiz',
    lnb: [
      {
        name: 'kt wiz는?',
        href: '/ktwiz/about',
      },
      {
        name: '구단 BI',
        href: '/ktwiz/bi/symbol',
      },
      {
        name: '회원 정책',
        href: '/ktwiz/policy/regular',
      },
      {
        name: '스폰서',
        href: '/ktwiz/sponsor',
      },
      {
        name: '월페이퍼',
        href: '/ktwiz/wallpaper',
      },
    ],
  },
  {
    gnb: 'wiz park',
    href: '/wizpark',
    lnb: [
      {
        name: '수원 kt wiz park',
        href: '/wizpark/intro',
      },
      {
        name: '주차 예약',
        href: '/wizpark/parking',
      },
      {
        name: '찾아오기',
        href: '/wizpark/location',
      },
      {
        name: '익산야구장',
        href: '/wizpark/iksan',
      },
    ],
  },
  {
    gnb: 'Game',
    href: '/game',
    lnb: [
      {
        name: '정규리그',
        href: '/game/regular/schedule',
      },
      {
        name: '퓨쳐스리그',
        href: '/game/futures/schedule',
      },
    ],
  },
  {
    gnb: 'Player',
    href: '/player',
    lnb: [
      {
        name: '코칭스텝',
        href: '/player/coach',
      },
      {
        name: '투수',
        href: '/player/pitcher',
      },
      {
        name: '타자',
        href: '/player/catcher',
      },
      {
        name: '응원단',
        href: '/player/cheer',
      },
      {
        name: '응원가',
        href: '/player/song',
      },
      {
        name: '응원가 저작권',
        href: '/player/song-copyright',
      },
    ],
  },
  {
    gnb: 'Media',
    href: '/media',
    lnb: [
      {
        name: 'wiz 뉴스',
        href: '/media/wiznews',
      },
      {
        name: 'wiz 스토리',
        href: '/media/wizstory',
      },
      {
        name: '시구자 정보',
        href: '/media/firstpitch',
      },
      {
        name: 'wiz 포토',
        href: '/media/photos',
      },
      {
        name: '하이라이트',
        href: '/media/highlight',
      },
      {
        name: 'Live 영상모음',
        href: '/media/live/pts',
      },
    ],
  },
  {
    gnb: 'Shop',
    href: '/shop',
    lnb: null,
  },
  {
    gnb: '스폰서',
    href: 'https://b2b.ktwiz.co.kr/',
    lnb: null,
  },
  {
    gnb: '티켓구매',
    href: '/ticket',
    lnb: [
      {
        name: '티켓 예매',
        href: '/ticket/reservation',
      },
      {
        name: '단체관람',
        href: '/ticket/group',
      },
      {
        name: '입장 및 좌석 정보',
        href: '/ticket/seatmap',
      },
    ],
  },
  {
    gnb: '팬',
    href: '/fan',
    lnb: [
      {
        name: '게시판',
        href: '/fan/board',
      },
    ],
  },
  {
    gnb: '챗봇',
    href: '/chatbot',
    lnb: null,
  },
]
// [[{},{}],null]
export const LNB_LIST: LnbDataArray = MENU_DATA.map((menu) =>
  !menu.lnb ? null : menu.lnb,
)

//   [(1, 2)].map((item) => item)

export const KTWIZ_BANNER_DATA: BannerData = {
  '': {
    title: 'kt wiz는?',
    description: "한국 프로야구의 '10번째' 심장 kt wiz를 소개합니다!",
    tabs: [
      { title: '구단 소개', href: '/ktwiz/about', path: 'about' },
      { title: '구단 연혁', href: '/ktwiz/history', path: 'history' },
    ],
  },
  '/bi': {
    title: '구단 BI',
    description: 'kt wiz를 대표하는 상징들을 소개합니다.',
    tabs: [
      { title: '심볼마크', href: '/ktwiz/bi/symbol', path: 'symbol' },
      { title: '워드마크', href: '/ktwiz/bi/wordmark', path: 'wordmark' },
      { title: '엠블럼', href: '/ktwiz/bi/emblem', path: 'emblem' },
      { title: '마스코트', href: '/ktwiz/bi/mascot', path: 'mascot' },
      { title: '유니폼', href: '/ktwiz/bi/uniform', path: 'uniform' },
    ],
  },
  '/policy': {
    title: '회원 정책',
    description: 'kt wiz 회원만의 특별한 할인 해택을 만나 보세요.',
    tabs: [
      { title: '일반회원', href: '/ktwiz/policy/regular', path: 'regular' },
      {
        title: '기부 프로그램',
        href: '/ktwiz/policy/donation',
        path: 'donation',
      },
    ],
  },
  '/sponsor': {
    title: '스폰서',
    description: 'kt wiz와 함께하는 스폰서를 소개합니다',
    tabs: null,
  },
  '/wallpaper': {
    title: '월페이퍼',
    description: 'kt wiz 팬들을 위한 월페이퍼 다운로드 서비스',
    tabs: null,
  },
}

export const WIZ_PARK_BANNER_DATA: BannerData = {
  '': {
    title: 'Suwon kt wiz park',
    description: 'suwon kt wiz park를 소개합니다!',
    tabs: [
      { title: '구단 소개', href: '/wizpark/intro', path: 'intro' },
      { title: '구장 안내도', href: '/wizpark/guide', path: 'guide' },
    ],
  },
  '/parking': {
    title: '주차예약',
    description: '사전 주차 예약을 안내드립니다.',
    tabs: [{ title: '주차 예약 안내', href: null }],
  },
  '/location': {
    title: '찾아오기',
    description: '오시는 길을 상세하게 알려드립니다.',
    tabs: null,
  },
  '/iksan': {
    title: '익산야구장',
    description: "kt wiz의 둥지 '익산야구장'을 소개합니다.",
    tabs: null,
  },
}

export const GAME_BANNER_DATA: BannerData = {
  '/regular': {
    title: '정규 리그',
    description: 'kt wiz의 경기 일정을 알려 드립니다.',
    tabs: [
      { title: '경기 일정', href: '/game/regular/schedule', path: 'schedule' },
      { title: '박스스코어', href: '/game/regular/boxscore', path: 'boxscore' },
      {
        title: '순위기록',
        href: '/game/regular/ranking/team',
        path: 'ranking/team',
      },
    ],
  },
  '/futures': {
    title: '퓨처스 리그',
    description: 'kt wiz의 퓨처스리그 경기 일정을 알려 드립니다.',
    tabs: [
      { title: '경기 일정', href: '/game/futures/schedule', path: 'schedule' },
      { title: '박스스코어', href: '/game/futures/boxscore', path: 'boxscore' },
      {
        title: '순위기록',
        href: '/game/futures/ranking/team',
        path: 'ranking/team',
      },
    ],
  },
}

export const PLAYER_BANNER_DATA: BannerData = {
  '/coach': {
    title: '코칭스텝',
    description: 'KT Wiz의 코칭스텝 정보를 제공합니다.',
    tabs: [{ title: '코칭스텝 목록', href: '/player/coach', path: 'coach' }],
  },
  '/pitcher': {
    title: '투수',
    description: 'KT Wiz의 투수 선수 정보를 제공합니다.',
    tabs: [{ title: '투수 목록', href: '/player/pitcher', path: 'pitcher' }],
  },
  '/catcher': {
    title: '타자',
    description: 'KT Wiz의 타자 선수 정보를 제공합니다.',
    tabs: [{ title: '타자 목록', href: '/player/catcher', path: 'catcher' }],
  },
  '/cheer': {
    title: '응원단',
    description: 'KT Wiz의 응원단 정보를 제공합니다.',
    tabs: [{ title: '응원단 목록', href: '/player/cheer', path: 'cheer' }],
  },
  '/song': {
    title: '응원가',
    description: 'KT Wiz의 응원가 정보를 제공합니다.',
    tabs: [{ title: '응원가 목록', href: '/player/song', path: 'song' }],
  },
  '/song-copyright': {
    title: '응원가 저작권',
    description: 'KT Wiz 응원가의 저작권 정보를 제공합니다.',
    tabs: [
      {
        title: '응원가 저작권',
        href: '/player/song-copyright',
        path: 'song-copyright',
      },
    ],
  },
}

//MEDIA_BANNER_DATA
export const MEDIA_BANNER_DATA: BannerData = {
  '/wiznews': {
    title: 'Wiz 뉴스',
    description: 'KT Wiz의 최신 뉴스 정보를 제공합니다.',
    tabs: [
      { title: 'Wiz소식', href: '/media/wiznews', path: 'wiznews' },
      { title: 'Wiz보도자료', href: '/media/wizpress', path: 'wizpress' },
    ],
  },
  '/wizstory': {
    title: 'Wiz 스토리',
    description: 'KT Wiz팬이 전하는 생생한 스토리를 만나보세요.',
    tabs: null,
  },
  '/firstpitch': {
    title: '시구자 정보',
    description: '경기의 또다른 하이라이트 시구자 정보를 안내해 드립니다.',
    tabs: null,
  },
  '/photos': {
    title: 'Wiz 포토',
    description: 'KT Wiz의 생생한 역사적 순간을 담았습니다.',
    tabs: [
      { title: '경기', href: '/media/photos/1', path: 'photos/1' },
      { title: '훈련', href: '/media/photos/2', path: 'photos/2' },
      { title: '행사', href: '/media/photos/3', path: 'photos/3' },
    ],
  },
  '/highlight': {
    title: '하이라이트',
    description: '생생한 경기 하이라이트를 담았습니다.',
    tabs: null,
  },
  '/live/pts': {
    title: 'Live 영상모음',
    description: 'KT Wiz의 라이브 영상 모음을 제공합니다.',
    tabs: [
      { title: '피칭분석', href: '/media/live/pts', path: 'live/pts' },
      { title: '모션트래킹', href: '/media/live/fts', path: 'live/fts' },
    ],
  },
}

//TICKET_BANNER_DATA
// export const TICKET_BANNER_DATA: BannerData = {
//   '/reservation': {
//     title: '티켓 예매',
//     description: 'KT Wiz의 티켓 예매 정보를 제공합니다.',
//     tabs: [
//       { title: '티켓 예매', href: '/ticket/reservation', path: 'reservation' },
//     ],
//   },
//   '/group': {
//     title: '단체관람',
//     description: 'KT Wiz의 단체관람 정보를 제공합니다.',
//     tabs: [{ title: '단체관람', href: '/ticket/group', path: 'group' }],
//   },
//   '/seatmap': {
//     title: '입장 및 좌석 정보',
//     description: 'KT Wiz의 입장 및 좌석 정보를 제공합니다.',
//     tabs: [
//       { title: '입장 및 좌석 정보', href: '/ticket/seatmap', path: 'seatmap' },
//     ],
//   },
// }

export const FAN_BANNER_DATA: BannerData = {
  '/': {
    title: '게시판',
    description: 'KT Wiz의 게시판입니다.',
    tabs: [],
  },
}
