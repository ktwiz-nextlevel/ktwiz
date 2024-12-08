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

export const KTWIZ_BANNER_DATA: BannerData = {
  '/about': {
    title: 'kt wiz는?',
    description: "한국 프로야구의 '10번째' 심장 kt wiz를 소개합니다!",
    tabs: ['구단 소개', '구단 연혁'],
  },
  '/bi/symbol': {
    title: '구단 BI',
    description: 'kt wiz를 대표하는 상징들을 소개합니다.',
    tabs: ['심볼마크', '워드마크', '엠블럼', '마스코트', '유니폼'],
  },
  '/policy/regular': {
    title: '회원 정책',
    description: 'kt wiz 회원만의 특별한 할인 해택을 만나 보세요.',
    tabs: ['일반회원', '기부 프로그램'],
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
  '/intro': {
    title: 'Suwon kt wiz park',
    description: 'suwon kt wiz park를 소개합니다!',
    tabs: ['구단 소개', '구장 안내도'],
  },
  '/parking': {
    title: '주차예약',
    description: '사전 주차 예약을 안내드립니다.',
    tabs: ['주차 예약 안내'],
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
  '/regular/schedule': {
    title: '정규 리그',
    description: 'kt wiz의 경기 일정을 알려 드립니다.',
    tabs: ['경기 일정', '박스스코어', '순위기록', '관전포인트'],
  },
  '/futures/schedule': {
    title: '퓨처스 리그',
    description: 'kt wiz의 퓨처스리그 경기 일정을 알려 드립니다.',
    tabs: ['경기 일정', '박스스코어', '순위기록'],
  },
}

// PLAYER_BANNER_DATA

//MEDIA_BANNER_DATA

//TICKET_BANNER_DATA

//TICKET_BANNER_DATA
