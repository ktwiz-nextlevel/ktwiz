# KTWiz 웹페이지 개선 프로젝트

**스나이퍼팩토리 X 유데미 X 웅진 프론트엔드 프로젝트 캠프**

---

## 🧡 팀원 소개

|              김동은              |               최은빈               |              이은희              |              김지영              |              김효환              |
| :------------------------------: | :-------------------------------: | :-----------------------------: | :-----------------------------: | :-----------------------------: |
| <img src="https://avatars.githubusercontent.com/u/98334072?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/160007445?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/82435813?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/75262344?v=4" width="120" /> | <img src="https://avatars.githubusercontent.com/u/142482159?v=4" width="120" /> |
| [@kimpuro](https://github.com/kimpuro) | [@chldmsqls34](https://github.com/chldmsqls34) | [@joywhy](https://github.com/joywhy) | [@jiographie](https://github.com/jiographie) | [@Hy0hwan](https://github.com/Hy0hwan) |

---

## 프로젝트 기간
2024년 12월 - 2025년 1월 16일

---


## 배포 주소

- **KTWiz 개선 웹사이트**: [https://ktwiz.kimpuro.com/](https://ktwiz.kimpuro.com/)
- **3D 경기장 뷰어**: [https://stadium.kimpuro.com/](https://stadium.kimpuro.com/) - PC에서 접속하시는 것을 추천드립니다.

---

## 프로젝트 개요

기존 KT Wiz 웹사이트를 분석하여 **사용자가 야구를 보다 재미있게** 즐길 수 있도록 디자인을 개선하고 기능을 추가한 프로젝트입니다.  

---
## ⚙️ 기술 스택

<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>기술 스택</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <p>언어</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=ffffff">
               
            </td>
        </tr>
        <tr>
            <td>
                  <p>프레임워크</p>
            </td>
            <td>
                  <img src="https://img.shields.io/badge/Next.js-000000?logo=Next.js&logoColor=white">
              
            </td>
        </tr>
                <tr>
            <td>
                <p>패키지 매니저</p>
            </td>
            <td>
            pnpm 
            </td>
        </tr>
                <tr>
            <td>
                <p>배포</p>
            </td>
            <td>
               
            </td>
        </tr>
        <tr>
            <td>
                <p>협업</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Notion-000000?logo=Notion">
                <img src="https://img.shields.io/badge/Figma-F24E1E?logo=Figma&logoColor=ffffff">
                <img src="https://img.shields.io/badge/Slack-4A154B?logo=Slack&logoColor=ffffff">
            </td>
        </tr>
    </tbody>
</table>


## 🚀 주요 기능

### 박스스코어 페이지> 박스스코어 탭
> 날짜별 경기 정보를 알 수 있습니다.
> 해당 경기의 스코어 보드 점수,  주요 기록,  해당 경기의 각 구단 선수들의 기록을 알 수 있습니다.

![박스스코어 시연](https://github.com/user-attachments/assets/5c90f041-18a7-49ac-8576-076e089fcbfb)


### 박스스코어 페이지 > 관중 포인트 탭
> 구단별 선발 투수 데이터를 비교해보고 구단별 라인업을 살펴보세요. 

> rechart를 사용해 다격형 차트를 구현했고 탭 형식의 라인업 UI 를 개선했습니다.

![관중포인트 시연](https://github.com/user-attachments/assets/85a10cbb-78f6-4425-91ea-c498a2b76faa)


### 순위기록 페이지 > 팀 순위 탭
> 올해 시즌 팀순위를 라인차트로 월별 조회가 가능합니다. 

> 올해 kt wiz 팀 순위 및 데이터를 표 UI 로 구현 호버링시 하이라이트 효과를 주어 한눈에 원하는 팀 데이터만 볼 수 있어요!

> 이외에도 시즌 팀 투수 기록과 타자 기록 그리고 시즌 팀간 승패표를 살펴보세요!

![팀순위 시연](https://github.com/user-attachments/assets/6a847a66-0f6a-4378-b07d-0f5830f5ba76)

### 순위기록 페이지 > 투수 순위 탭
> 투수 평균자책점 및 승리 TOP3 선수 데이터를 조회할 수 있습니다. 

> 이외에도 투수 선수 목록을 Table 화 하여 선수이름 조회, 시즌 조회로 필터링 할 수 있습니다. 

![투수순위 시연](https://github.com/user-attachments/assets/3d98d01d-ed69-41ae-b616-ff43797e4a79)

### 순위기록 페이지 > 타자 순위 탭
> 타자 타율 홈런 TOP3 선수 데이터를 조회할 수 있습니다. 

> 기존 투수 탭 UI 와 동일한 구조로 선수 이름 및 시즌 으로 필터링 할 수 있습니다. 

<img width="1680" alt="타자순위" src="https://github.com/user-attachments/assets/0b02dc5f-2493-4431-9524-934811b1a287" />


### Player페이지 > 선수 상세페이지 (투수)
 

### Player페이지 > 선수 상세페이지 (타자)



### Player페이지 > 커스텀 스쿼드 페이지 
> 드래그 앤 드롭 기능을 이용하여 페이지를 재미있게 이용할 수 있습니다.


###  > 커스텀 스쿼드 페이지 
### Player페이지 > 커스텀 스쿼드 페이지 
### Player페이지 > 커스텀 스쿼드 페이지 
### Player페이지 > 커스텀 스쿼드 페이지 

## 🔎 트러블 슈팅

### 효율적인 API 요청을 위한 ky 라이브러리 도입

팀 프로젝트에서는 다양한 API 요청이 존재했고 이러한 요청을 일관되게 관리하는 것이 중요했습니다.
 Ky 라이브러리를 도입하여 HTTP 요청 로직을 표준화하고 모든 API 호출을 단일 ky 인스턴스를 통해 처리하여 중복 코드 제거했습니다. 이로 인해  API 요청 방식을 변경할 때, ky 인스턴스의 설정만 수정하면 전체 코드가 자동 반영 되는 등의 **유지보수 비용이 감소했고** 인터셉터를 활용해 에러 로직을 중앙화하여 일관된 사용자 경험 제공함으로써 **일관된 에러 처리할 수 있도록 했습니다.**

 <img width="360" alt="스크린샷 2025-01-16 오후 11 55 12" src="https://github.com/user-attachments/assets/109a3d08-909d-45d2-a72b-78a38148b8f2" />


### 주요기록내 이미지 추가 조회 구현 

 주요기록 컴포넌트는 경기 중 발생한 주요 사건을 분류하고, 해당 사건에 연관된 선수의 이름과 정보를 출력하는 컴포넌트입니다. 해당 항목에 항목별 선수 이미지를 추가 조회하는  과정을 해결해나간 과정입니다.
 
 #### ✍🏻  문제 포인트 
1. 주요 사건별 선수이름과 정보가 문자열로 합쳐있다는 점. 
2. 선수 증명 사진을 조회시 선수이름과 소속된 구단 키를 가지고 조회해야한다는 점, 
3.  해당 주요사건 데이터 내부에는 관련 선수의 소속 구단명 데이터가 없다는 점

<img width="360" alt="스크린샷 2025-01-16 오후 11 55 12" src="https://github.com/user-attachments/assets/71149393-45ed-404e-b542-d8152ea0aa92" />

<br/>
<img width="1667" alt="주요기록문제 상황" src="https://github.com/user-attachments/assets/0515e1e4-de3b-4537-8996-3a0e2c7aaef4" />



<img width="805" alt="주요기록 스크린샷" src="https://github.com/user-attachments/assets/3813a3d4-57e1-4e8f-9731-f10ec5c4f92d" />

#### 🚀  해결 과정
각 주요사건에 연관된 선수들은 해당 경기의 홈구단과 방문구단 중 소속선수인것을 파악, 이를 위해 박스스코어 스케줄 객체 내부에 있는 homeKey와 visitKey를 추출후 선수이름과 같이 이미지를 조회하여 유효한 이미지만 저장하는 방식으로 해경했습니다. 

1. 박스스코어 정보를 조회
2.  박스스코어에서 주요 기록 데이터를 추출.  박스스코어 스케줄 객체 내부에 있는 homeKey와 visitKey 추출.
3.주요기록을 순회하면서  사건의 결과값을 선수이름과 정보로 파싱.
4. 파싱한 선수 이름을 기반으로, 앞서 추출한 homeKey와 visitKey를 사용해 선수 이미지를 조회.
5. 가져온 이미지 중 유효한 이미지를 저장하고 만약 이미지 조회에 실패하면 대체 이미지를 저장하는 구조로 해결.

```ts 

  const etcgames: EtcGames[] = data?.etcgames || []

  const homeKey = data.schedule.current.homeKey
  const visitKey = data.schedule.current.visitKey

  const infoPromises = etcgames.map(async (game) => {
    const parsedData = parsePlayerDescriptions(game.result)
    const playerImgResponses = await Promise.all(
      parsedData.map(async (player) => {
        try {
          const [imgResponseHome, imgResponseVisit] = await Promise.all([
            fetch(
              `${process.env.NEXT_PUBLIC_API_SERVER_URL}/player_img?team=${homeKey}&name=${player.name}`,
            ),

            fetch(
              `${process.env.NEXT_PUBLIC_API_SERVER_URL}/player_img?team=${visitKey}&name=${player.name}`,
            ),
          ])

          const imgDataHome = await imgResponseHome.json()
          const imgDataVisit = await imgResponseVisit.json()

          return {
            ...player,
            playerImg:
              imgDataHome.url ||
              imgDataVisit.url ||
              '/images/players/player.png',
          }
        } catch {
          return { ...player, playerImg: '/images/players/player.png' }
        }
      }),
    )
    return playerImgResponses
  })

```

```ts 
function splitPlayers(input: string): string[] {
  const regex = /\([^)]*\)/g // 괄호 안의 내용 찾기
  const modifiedInput = input.replace(regex, (match) =>
    match.replace(/\s/g, '|'),
  )
  return modifiedInput
    .split(' ')
    .map((item) => (item.includes('|') ? item.replace(/\|/g, ' ') : item))
    .filter((item) => item.trim() !== '') // 빈 문자열 제거
}

function parsePlayerDescriptions(input: string): PlayerDescription[] {
  const players = splitPlayers(input)

  return players.map((item) => {
    const nameDesRegex = /^([^\(]+)(\(([^)]+)\))?$/ // 괄호 앞의 이름과 괄호 안의 내용 추출
    const match = item.match(nameDesRegex)

    if (match) {
      return {
        name: match[1].trim(),
        des: match[3]?.trim() || null,
      }
    }
    return { name: item.trim(), des: null } // 괄호가 없으면 des는 null
  })
}
```
