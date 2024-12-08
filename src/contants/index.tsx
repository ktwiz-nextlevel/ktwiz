import { MenuData, LnbDataArray } from '@/types/header.interface'

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
]
// [[{},{}],null]
export const LNB_LIST: LnbDataArray = MENU_DATA.map((menu) =>
  !menu.lnb ? null : menu.lnb,
)
