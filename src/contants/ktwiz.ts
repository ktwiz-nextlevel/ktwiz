export const HOME = { path: '/', title: 'HOME' }

export const KTWIZ = {
  path: '/ktwiz/about',
  title: 'kt wiz',
  parent: HOME,
  //   children: [KTWIZ_ABOUT, KTWIZ_BI],
}
//ktwiz/about
export const KTWIZ_ABOUT = {
  path: '/ktwiz/about',
  title: 'kt wiz는?',
  parent: KTWIZ,
}
//ktwiz/about 's tabs
export const KTWIZ_INTRO = {
  path: '/ktwiz/about',
  title: '구단 소개',
  parent: KTWIZ_ABOUT,
}
export const KTWIZ_HISTORY = {
  path: '/ktwiz/history',
  title: '구단 연혁',
  parent: KTWIZ_ABOUT,
}

//ktwiz/bi
export const KTWIZ_BI = {
  path: '/ktwiz/bi/symbol',
  title: '구단 BI',
  parent: KTWIZ,
}
//ktwiz/bi 's tabs
export const KTWIZ_BI_SYMBOL = {
  path: '/ktwiz/bi/symbol',
  title: '심볼마크',
  parent: KTWIZ_BI,
}
export const KTWIZ_BI_WORDMARK = {
  path: '/ktwiz/bi/wordmark',
  title: '워드마크',
  parent: KTWIZ_BI,
}
export const KTWIZ_BI_EMBLEM = {
  path: '/ktwiz/bi/emblem',
  title: '엠블럼',
  parent: KTWIZ_BI,
}
export const KTWIZ_BI_MASCOT = {
  path: '/ktwiz/bi/mascot',
  title: '마스코트',
  parent: KTWIZ_BI,
}
export const KTWIZ_BI_UNIFORM = {
  path: '/ktwiz/bi/uniform',
  title: '유니폼',
  parent: KTWIZ_BI,
}
//ktwiz/policy/regular
export const KTWIZ_POLICY = {
  path: '/ktwiz/policy/regular',
  title: '회원정책',
  parent: KTWIZ,
}
//ktwiz/policy/regular 's tabs
export const KTWIZ_POLICY_MEMBER = {
  path: '/ktwiz/policy/regular',
  title: '일반회원',
  parent: KTWIZ_POLICY,
}
export const KTWIZ_POLICY_DONATION = {
  path: '/ktwiz/policy/donation',
  title: '기부 프로그램',
  parent: KTWIZ_POLICY,
}
//ktwiz/sponsor
export const KTWIZ_SPONSOR = {
  path: '/ktwiz/sponsor',
  title: '스폰서',
  parent: KTWIZ,
}
//ktwiz/wallpaper
export const KTWIZ_WALLPAPER = {
  path: '/ktwiz/wallpaper',
  title: '월페이퍼',
  parent: KTWIZ,
}

export const KTWIZ_INTRO_TAB = [KTWIZ_INTRO, KTWIZ_HISTORY]
export const KTWIZ_BI_TAB = [
  KTWIZ_BI_SYMBOL,
  KTWIZ_BI_WORDMARK,
  KTWIZ_BI_EMBLEM,
  KTWIZ_BI_MASCOT,
  KTWIZ_BI_UNIFORM,
]
export const KTWIZ_POLICY_TAB = [KTWIZ_POLICY_MEMBER, , KTWIZ_POLICY_DONATION]
