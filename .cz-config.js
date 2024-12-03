module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨ feat:     새로운 기능의 추가, 기존 기능을 수정',
    },
    { value: 'fix', name: '🐛 fix:      버그 수정' },
    { value: 'docs', name: '📝 docs:     문서 관련 수정' },
    {
      value: 'style',
      name: '🎨 style:    코드의 의미에 영향을 미치지 않는 변경 사항(공백, 서식, 세미콜론 누락 등)',
    },
    {
      value: 'refactor',
      name: '♻️ refactor: 기능의 변화가 없는 코드 리팩터링',
    },
    { value: 'perf', name: '⚡ perf:     성능 향상을 위한 코드 변경' },
    {
      value: 'test',
      name: '✅ test:     테스트 코드 추가, 기존 테스트 코드 변경',
    },
    {
      value: 'build',
      name: '🔧 build:    빌드 시스템이나 외부 종속성에 영향을 미치는 변경 사항(예시 : gulp, broccoli, npm)',
    },
    { value: 'ci', name: '👷 ci:       CI 구성 파일 및 스크립트 추가, 변경' },
    {
      value: 'chore',
      name: '🔨 chore:    소스 또는 테스트 파일을 수정하지 않는 기타 변경 사항',
    },
    { value: 'revert', name: '⏪ revert:   이전 커밋을 되돌림' },
  ],
  messages: {
    type: '커밋하려는 변경 사항의 유형을 선택하세요 :',
    scope:
      '변경 사항이 영향을 미치는 범위를 선택하세요(예: 컴포넌트 또는 파일 이름)--선택 사항-- skip : enter :\n',
    subject: '변경 사항에 대한 짧고 필수적인 제목을 작성해 주세요 :\n',
    body: '변경 사항에 대한 더 긴 설명을 작성해주세요(개행이 필요하다면 "|"를 사용하세요) --선택 사항-- skip : enter:\n',
    breaking:
      '코드에 매우 큰 변화나 단절적 변경이 있다면 작성 해주세요: --선택 사항-- skip : enter:\n',
    footer: '이 커밋이 close 하는 issue(예: #123)--선택 사항-- skip:enter:\n',
    confirmCommit:
      '모든 커밋 내용을 제대로 입력하셨나요? (y : yes / n : abort commit / e : edit message / h : help)',
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 100,
  skipQuestions: ['scope', 'customScope'],
}
