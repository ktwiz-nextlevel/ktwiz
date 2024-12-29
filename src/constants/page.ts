export const HOME_PAGE = { path: '/', title: 'HOME' }

export const LOGIN_PAGE = { path: '/login', title: '로그인', parent: HOME_PAGE }
export const FINDID_PAGE = {
  path: '/findid',
  title: '아이디 찾기',
  parent: HOME_PAGE,
}
export const FINDPW_PAGE = {
  path: '/findpw',
  title: '비밀번호 찾기',
  parent: HOME_PAGE,
}
export const RESETPW_PAGE = {
  path: '/resetpw',
  title: '비밀번호 재설정',
  parent: HOME_PAGE,
}

export const PASSWORD_CONFIRM_PAGE = {
  path: '/mypage/check',
  title: '비밀번호 확인',
  parent: HOME_PAGE,
}
export const MY_INFO_PAGE = {
  path: '/mypage',
  title: '내 정보 관리',
  parent: HOME_PAGE,
}

export const MEDIA_PAGE = { path: '/media', title: 'MEDIA', parent: HOME_PAGE }
export const WIZ_NEWS_PAGE = {
  path: '/media/wiznews',
  title: 'wiz 뉴스',
  parent: MEDIA_PAGE,
}
export const WIZ_PRESS_PAGE = {
  path: '/media/wizpress',
  title: 'wiz 보도자료',
  parent: WIZ_NEWS_PAGE,
}
export const HIGHLIGHT_PAGE = {
  path: '/media/highlight',
  title: '하이라이트',
  parent: MEDIA_PAGE,
}
export const WIZSTORY_PAGE = {
  path: '/media/wizstory',
  title: 'wiz 스토리',
  parent: MEDIA_PAGE,
}
export const WIZ_FIRST_PITCHER_PAGE = {
  path: '/media/firstPitcher',
  title: '시구자정보',
  parent: MEDIA_PAGE,
}
export const WIZ_GALLERY_PAGE = {
  path: '/media/photos',
  title: 'wiz 포토',
  parent: MEDIA_PAGE,
}
export const WIZ_GALLERY_GAME_PAGE = {
  path: '/media/photos',
  title: '경기',
  parent: MEDIA_PAGE,
}
export const WIZ_GALLERY_TRAIN_PAGE = {
  path: '/media/photos',
  title: '훈련',
  parent: MEDIA_PAGE,
}
export const WIZ_GALLERY_EVENT_PAGE = {
  path: '/media/photos',
  title: '행사',
  parent: MEDIA_PAGE,
}

export const WIZ_LIVE_PAGE = {
  path: '/media/live/pts',
  title: 'Live 영상 모음',
  parent: MEDIA_PAGE,
}
export const WIZ_LIVE_POSITION_PAGE = {
  path: '/media/live/position',
  title: '포지션 뷰',
  parent: WIZ_LIVE_PAGE,
}
export const WIZ_LIVE_MATRIX_PAGE = {
  path: '/media/live/matrix',
  title: '매트릭스 뷰',
  parent: WIZ_LIVE_PAGE,
}
export const WIZ_LIVE_PTS_PAGE = {
  path: '/media/live/pts',
  title: '피칭분석',
  parent: WIZ_LIVE_PAGE,
}
export const WIZ_LIVE_FTS_PAGE = {
  path: '/media/live/fts',
  title: '모션트래킹',
  parent: WIZ_LIVE_PAGE,
}

export const WIZ_LIVE_TAB = [WIZ_LIVE_PTS_PAGE, WIZ_LIVE_FTS_PAGE]

export const JOIN_PAGE = { path: '/join', title: '회원가입', parent: HOME_PAGE }
export const INDI_LOG = {
  path: '/indilog',
  title: '이전기록',
  parent: JOIN_PAGE,
}

export const KTWIZ = {
  path: '/ktwiz/about',
  title: 'kt wiz',
  parent: HOME_PAGE,
}

export const ABOUT_KTWIZ = {
  path: '/ktwiz/about',
  title: 'kt wiz는?',
  parent: KTWIZ,
}

export const KTWIZ_INTRO = {
  path: '/ktwiz/about',
  title: '구단 소개',
  parent: ABOUT_KTWIZ,
}
export const KTWIZ_HISTORY = {
  path: '/ktwiz/history',
  title: '구단 연혁',
  parent: ABOUT_KTWIZ,
}

export const KTWIZ_INTRO_TAB = [KTWIZ_INTRO, KTWIZ_HISTORY]

export const KTWIZ_BI = {
  path: '/ktwiz/bi/symbol',
  title: '구단 BI',
  parent: KTWIZ,
}

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

export const KTWIZ_BI_TAB = [
  KTWIZ_BI_SYMBOL,
  KTWIZ_BI_WORDMARK,
  KTWIZ_BI_EMBLEM,
  KTWIZ_BI_MASCOT,
  KTWIZ_BI_UNIFORM,
]

export const KTWIZ_POLICY = {
  path: '/ktwiz/policy/regular',
  title: '회원정책',
  parent: KTWIZ,
}

export const KTWIZ_POLICY_MEMBER = {
  path: '/ktwiz/policy/regular',
  title: '일반회원',
  parent: KTWIZ_POLICY,
}
export const KTWIZ_POLICY_CHILD = {
  path: '/ktwiz/policy/child',
  title: '선등급/어린이회원',
  parent: KTWIZ_POLICY,
}
export const KTWIZ_POLICY_DONATION = {
  path: '/ktwiz/policy/donation',
  title: '기부 프로그램',
  parent: KTWIZ_POLICY,
}

export const KTWIZ_POLICY_TAB = [
  KTWIZ_POLICY_MEMBER,
  ,
  //  KTWIZ_POLICY_CHILD
  KTWIZ_POLICY_DONATION,
]

export const KTWIZ_SPONSOR = {
  path: '/ktwiz/sponsor',
  title: '스폰서',
  parent: KTWIZ,
}
export const KTWIZ_WALLPAPER = {
  path: '/ktwiz/wallpaper',
  title: '월페이퍼',
  parent: KTWIZ,
}

export const WIZPARK = {
  path: '/wizpark/intro',
  title: 'Suwon kt wiz park',
  parent: HOME_PAGE,
}
export const WIZPARK_SUB = {
  path: '/wizpark/intro',
  title: ' kt wiz park',
  parent: WIZPARK,
}
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

export const WIZPARK_INTRO_TAB = [WIZPARK_INTRO, WIZPARK_GUIDE]

export const WIZPARK_STADIUM = {
  path: '/wizpark/stadium',
  title: '5G 스타디움 소개',
  parent: WIZPARK,
}

export const WIZPARK_PARKING_AND_SHUTTLE = {
  path: '/wizpark/parking',
  title: '주차예약',
  parent: WIZPARK,
}
export const WIZPARK_PARKING = {
  path: '/wizpark/parking',
  title: '주차 예약 안내',
  parent: WIZPARK_PARKING_AND_SHUTTLE,
}
// export const WIZPARK_SHUTTLE = { path: "/wizpark/shuttle", title: "셔틀버스 안내", parent: WIZPARK_PARKING_AND_SHUTTLE };

export const WIZPARK_PARKING_AND_SHUTTLE_TAB = [WIZPARK_PARKING]

export const WIZPARK_LOCATION = {
  path: '/wizpark/location',
  title: '찾아오기',
  parent: WIZPARK,
}

export const WIZPARK_FINEDUST_MENU = {
  path: '/wizpark/finedust',
  title: '미세먼지 현황',
  parent: WIZPARK,
}
export const WIZPARK_FINEDUST = {
  path: '/wizpark/finedust',
  title: '미세먼지',
  parent: WIZPARK_FINEDUST_MENU,
}
export const WIZPARK_ULTRAFINEDUST = {
  path: '/wizpark/ultrafinedust',
  title: '초미세먼지',
  parent: WIZPARK_FINEDUST_MENU,
}

export const WIZPARK_FINEDUST_TAB = [WIZPARK_FINEDUST, WIZPARK_ULTRAFINEDUST]

export const WIZPARK_IKSAN = {
  path: '/wizpark/iksan',
  title: '익산야구장',
  parent: WIZPARK,
}
export const WIZPARK_STORE = {
  path: '/wizpark/store',
  title: '구단내 매장정보',
  parent: WIZPARK,
}

export const TICKET = { path: '/ticket', title: 'TICKET', parent: HOME_PAGE }
export const TICKET_REGULAR = {
  path: '/ticket',
  title: '일반티켓',
  parent: TICKET,
}
export const TICKET_PRICE = {
  path: '/ticket/price',
  title: '입장요금',
  parent: TICKET_REGULAR,
}
export const TICKET_RESERVATION_AND_REFUND = {
  path: '/ticket/reservation',
  title: '티켓 예매',
  parent: TICKET_REGULAR,
}
export const TICKET_RESERVATION_AND_BENEFIT = {
  path: '/ticket/discount',
  title: '할인 혜택',
  parent: TICKET_REGULAR,
}

export const TICKET_REGULAR_TAB = [
  TICKET_RESERVATION_AND_REFUND,
  TICKET_PRICE,
  TICKET_RESERVATION_AND_BENEFIT,
]

export const TICKET_SKYBOX_AND_GROUP = {
  path: '/ticket/group',
  title: '스카이 박스/단체 관람',
  parent: TICKET,
}
export const TICKET_GROUP_RESERVATION = {
  path: '/ticket/group',
  title: '단체 관람 안내',
  parent: TICKET_SKYBOX_AND_GROUP,
}
export const TICKET_SKYBOX_RESERVATION = {
  path: '/ticket/skybox',
  title: '스카이박스',
  parent: TICKET_SKYBOX_AND_GROUP,
}

//export const TICKET_SKYBOX_AND_GROUP_TAB = [TICKET_GROUP_RESERVATION, TICKET_SKYBOX_RESERVATION];
export const TICKET_SKYBOX_AND_GROUP_TAB = [TICKET_GROUP_RESERVATION]

export const TICKET_ENTRANCE_AND_SEAT = {
  path: '/ticket/seatmap',
  title: '입장 및 좌석 정보',
  parent: TICKET,
}
export const TICKET_SEAT_MAP = {
  path: '/ticket/seatmap',
  title: '좌석 배치도',
  parent: TICKET_ENTRANCE_AND_SEAT,
}
export const TICKET_ENTRANCE = {
  path: '/ticket/entrance',
  title: '입장 시간 및 방법',
  parent: TICKET_ENTRANCE_AND_SEAT,
}
export const TICKET_STORE = {
  path: '/ticket/store',
  title: '구장 내 매장정보',
  parent: TICKET_ENTRANCE_AND_SEAT,
}

export const TICKET_ENTRANCE_AND_SEAT_TAB = [
  TICKET_SEAT_MAP,
  TICKET_ENTRANCE,
  TICKET_STORE,
]

export const PLAYER = {
  path: '/player/pitcher',
  title: 'Player',
  parent: HOME_PAGE,
}
export const PLAYER_COACHING_STEP = {
  path: '/player/coach',
  title: '코칭스텝',
  parent: PLAYER,
}
export const PLAYER_PITCHER = {
  path: '/player/pitcher',
  title: '투수',
  parent: PLAYER,
}
export const PLATER_HITTER = {
  path: '/plater/catcher',
  title: '타자',
  parent: PLAYER,
}
export const PLAYER_CATCHER = {
  path: '/player/catcher',
  title: '포수',
  parent: PLATER_HITTER,
}
export const PLAYER_INFIELDER = {
  path: '/player/infielder',
  title: '내야수',
  parent: PLATER_HITTER,
}
export const PLAYER_OUTFIELDER = {
  path: '/player/outfielder',
  title: '외야수',
  parent: PLATER_HITTER,
}
export const PLAYER_CHEER_SQUAD = {
  path: '/player/cheer',
  title: '응원단',
  parent: PLAYER,
}
export const PLAYER_CHEER_SONG = {
  path: '/player/song',
  title: '응원가',
  parent: PLAYER,
}
export const PLAYER_CHEER_SONG_COPYRIGHT = {
  path: '/player/song-copyright',
  title: '응원가 저작권',
  parent: PLAYER,
}

export const PLAYER_COACHING_STEP_DETAIL = {
  path: '/player/coach/detail',
  title: '코칭스텝',
  parent: PLAYER,
}
export const PLAYER_PITCHER_DETAIL = {
  path: '/player/pitcher/detail',
  title: '투수',
  parent: PLAYER,
}
export const PLATER_HITTER_DETAIL = {
  path: '/plater/catcher/detail',
  title: '타자',
  parent: PLAYER,
}
export const PLAYER_CATCHER_DETAIL = {
  path: '/player/catcher/detail',
  title: '포수',
  parent: PLATER_HITTER,
}
export const PLAYER_INFIELDER_DETAIL = {
  path: '/player/infielder/detail',
  title: '내야수',
  parent: PLATER_HITTER,
}
export const PLAYER_OUTFIELDER_DETAIL = {
  path: '/player/outfielder/detail',
  title: '외야수',
  parent: PLATER_HITTER,
}
export const PLAYER_CHEER_SQUAD_DETAIL = {
  path: '/player/cheer/detail',
  title: '응원단',
  parent: PLAYER,
}
export const PLAYER_CHEER_SONG_DETAIL = {
  path: '/player/song/detail',
  title: '응원가',
  parent: PLAYER,
}

export const GAME = {
  path: '/game/schedule/regular',
  title: 'Game',
  parent: HOME_PAGE,
}
export const REGULAR_LEAGUE = {
  path: '/game/regular/schedule',
  title: '정규 리그',
  parent: GAME,
}
export const REGULAR_LEAGUE_SCHEDULE = {
  path: '/game/regular/schedule',
  title: '경기 일정',
  parent: REGULAR_LEAGUE,
}
export const REGULAR_LEAGUE_BOXSCORE = {
  path: '/game/regular/boxscore',
  title: '박스스코어',
  parent: REGULAR_LEAGUE,
}
export const REGULAR_LEAGUE_RANKING = {
  path: '/game/regular/ranking/team',
  title: '순위기록',
  parent: REGULAR_LEAGUE,
}
export const REGULAR_LEAGUE_RANKING_TEAM = {
  path: '/game/regular/ranking/team',
  title: '팀순위',
  parent: REGULAR_LEAGUE_RANKING,
}
export const REGULAR_LEAGUE_RANKING_PITCHER = {
  path: '/game/regular/ranking/pitcher',
  title: '투수순위',
  parent: REGULAR_LEAGUE_RANKING,
}
export const REGULAR_LEAGUE_RANKING_BATTER = {
  path: '/game/regular/ranking/batter',
  title: '타자순위',
  parent: REGULAR_LEAGUE_RANKING,
}
export const REGULAR_LEAGUE_RANKING_CROWD = {
  path: '/game/regular/ranking/crowd',
  title: '관중현황',
  parent: REGULAR_LEAGUE_RANKING,
}
export const REGULAR_LEAGUE_WATCH_POINT = {
  path: '/game/regular/watchPoint',
  title: '관전포인트',
  parent: REGULAR_LEAGUE,
}
export const FUTURES_LEAGUE = {
  path: '/game/futures/schedule',
  title: '퓨처스 리그',
  parent: GAME,
}
export const FUTURES_LEAGUE_SCHEDULE = {
  path: '/game/futures/schedule',
  title: '경기 일정',
  parent: FUTURES_LEAGUE,
}
export const FUTURES_LEAGUE_BOXSCORE = {
  path: '/game/futures/boxscore',
  title: '박스스코어',
  parent: FUTURES_LEAGUE,
}
export const FUTURES_LEAGUE_RANKING = {
  path: '/game/futures/ranking/team',
  title: '순위기록',
  parent: FUTURES_LEAGUE,
}
export const FUTURES_LEAGUE_RANKING_TEAM = {
  path: '/game/futures/ranking/team',
  title: '팀순위',
  parent: FUTURES_LEAGUE_RANKING,
}
export const FUTURES_LEAGUE_RANKING_PITCHER = {
  path: '/game/futures/ranking/pitcher',
  title: '투수순위',
  parent: FUTURES_LEAGUE_RANKING,
}
export const FUTURES_LEAGUE_RANKING_BATTER = {
  path: '/game/futures/ranking/batter',
  title: '타자순위',
  parent: FUTURES_LEAGUE_RANKING,
}

export const KBL = { path: '/kbl', title: 'KBL', parent: HOME_PAGE }
export const KBL_SONICBOOM_NOTICE = {
  path: '/kbl/sonicboom/notice',
  title: '공지사항',
  parent: '/',
}

export const REGULAR_LEAGUE_TAB = [
  REGULAR_LEAGUE_SCHEDULE,
  REGULAR_LEAGUE_BOXSCORE,
  REGULAR_LEAGUE_RANKING,
  REGULAR_LEAGUE_WATCH_POINT,
]

export const REGULAR_LEAGUE_RANKING_TAB = [
  REGULAR_LEAGUE_RANKING_TEAM,
  REGULAR_LEAGUE_RANKING_PITCHER,
  REGULAR_LEAGUE_RANKING_BATTER,
  REGULAR_LEAGUE_RANKING_CROWD,
]

export const FUTURES_LEAGUE_TAB = [
  FUTURES_LEAGUE_SCHEDULE,
  FUTURES_LEAGUE_BOXSCORE,
  FUTURES_LEAGUE_RANKING,
]

export const FUTURES_LEAGUE_RANKING_TAB = [
  FUTURES_LEAGUE_RANKING_TEAM,
  FUTURES_LEAGUE_RANKING_PITCHER,
  FUTURES_LEAGUE_RANKING_BATTER,
]
