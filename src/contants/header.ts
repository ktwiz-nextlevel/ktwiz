import { KTWIZ, KTWIZ_ABOUT } from './ktwiz'

export const MENU_DATA = [
  {
    GNB: KTWIZ,
    LNB: [
      KTWIZ_ABOUT,
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
]
