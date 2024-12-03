# KimPuro's Next.js team project Boilerplate

이 템플릿 레포지토리는 Next.js를 사용한 팀 프로젝트를 위한 보일러플레이트입니다.  
Next.js, React 및 Tailwind CSS를 사용하여 프로젝트를 시작할 수 있습니다.  
팀 프로젝트를 원활하게 진행하기 위한 구조와 기능을 제공합니다. 또한 각종 규칙이 사전 정의되어 있습니다.

## 🚀 Getting Started

이 템플릿을 사용할 때 추천드리는 방법은 GitHub의 템플릿 기능을 사용하는 것입니다.

![image](https://github.com/user-attachments/assets/b853c7e4-e3eb-495d-b16b-d6ebecaf5c9c)

또한 git clone을 통해 직접 다운로드 받을 수 있습니다:

```bash
git clone https://github.com/kimpuro/next-14-js-boilerplate.git
cd <project-directory>
```

패키지 매니저는 `pnpm`을 사용하는 것을 권장드립니다.
아래의 명령어를 통해 의존성을 설치할 수 있습니다:

```bash
pnpm i
```

아래의 명령어를 통해 개발 서버를 시작할 수 있습니다:

```bash
pnpm run dev
```

## 📁 Project Structure

이 템플릿은 통상적으로 사용되는 Next.js 프로젝트 구조를 따릅니다.

- `public/`

  - `fonts/` - 커스텀 폰트 파일
  - `icons/` - 아이콘 파일
  - `images/` - 이미지 파일

- `src/`

  - `app/`
    - `api/` - APi route 관련 코드
  - `components/` - 리액트 컴포넌트
  - `hooks/` - 리액트 커스텀 훅
  - `libs/` - 라이브러리 관련 코드
  - `services/` - 외부 API 호출을 위한 서비스 함수
  - `states/` - 글로벌 상태 관리
  - `styles/` - 스타일 관련 코드
  - `utils/` - 유틸리티 함수
  - `types/` - 타입 스크립트 타입

- `__tests__/` - 테스트 코드

## 📚 Commit

이 템플릿에서는 `husky`, `commitlint`, `comitizen`를 사용하여 커밋 메시지 규칙을 적용하고 있으며 `Conventional Commits`와 `AngularJs Git Commit Message Conventions`를 따릅니다.  
사전 설정된 규칙에 맞지 않는 커밋 메시지를 작성한다면 커밋이 거부됩니다.

### How to commit

`pnpm commit`을 사용하여 미리 정의되어 있는 컨벤션에 맞게 커밋을 생성할 수 있습니다:

```bash
git add .
pnpm commit
```

컨벤션을 지킨다면 `pnpm commit` 명령어가 아닌 `git` 만을 사용해서 커밋 진행도 가능합니다:

```bash
git add .
git commit -m "feat: add new feature"
```

### pre-commit

`husky`를 사용해 `pre-commit` 단계에서 크게 3가지의 작업을 실행합니다.

1. `prettier`를 사용해 스테이징된 파일만을 대상으로 코드 포맷팅을 진행합니다.
2. `prettier`로 수정된 파일의 변경 사항을 다시 스테이징합니다.
3. 프로젝트의 Linter를 실행하여 코드의 품질과 스타일 규칙을 확인합니다.
4. `jest`를 사용해 테스트 코드를 실행합니다.
5. `commitlint`를 사용해 커밋 메시지의 형식을 확인합니다.

위의 과정들을 전부 통과한다면 커밋이 생성됩니다.

### Commit Message Type

- **✨ feat**: 새로운 기능의 추가, 기존 기능을 수정
- **🐛 fix**: 버그 수정
- **📝 docs**: 문서 관련 수정
- **🎨 style**: 코드의 의미에 영향을 미치지 않는 변경 사항(공백, 서식, 세미콜론 누락 등)
- **♻️ refactor**: 기능의 변화가 없는 코드 리팩터링
- **⚡ perf**: 성능 향상을 위한 코드 변경
- **✅ test**: 테스트 코드 추가, 기존 테스트 코드 변경
- **🔧 build**: 빌드 시스템이나 외부 종속성에 영향을 미치는 변경 사항(예시 : gulp, broccoli, npm)
- **👷 ci**: CI 구성 파일 및 스크립트 추가, 변경
- **🔨 chore**: 소스 또는 테스트 파일을 수정하지 않는 기타 변경 사항
- **⏪ revert**: 이전 커밋을 되돌림

### CHANGELOG

위에 정의된 커밋 컨벤션을 지킨다면 `CHANGELOG.md` 파일을 자동으로 생성할 수 있습니다.  
`CHANGELOG.md` 파일은 `git -cliff`를 사용하여 생성할 수 있습니다.  
`git-cliff`가 설치되어 있지 않다면 `Rust` 기반 패키지 매니저인 `cargo`를 사용하여 설치해 주세요

아래의 명령어를 통해 `CHANGELOG.md` 파일을 생성할 수 있습니다:

```bash
git cliff -o CHANGELOG.md
```

## 💡 ESLint & Prettier

이 템플릿에는 사전 정의된 ESLint와 Prettier 설정이 포함되어 있습니다.  
`.eslintrc.json`과 `.prettierrc` 파일을 통해 설정을 확인할 수 있습니다.

`eslintrc.json`:

```json
{
  "extends": ["next", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./"]],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
}
```

`.prettierrc`:

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 80,
  "arrowParens": "always",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Pull Request Template

이 템플릿에는 사전 생성된 Pull Request 템플릿이 포함되어 있습니다.  
Pull Request를 생성하신다면 아래와 같은 템플릿으로 자동 생성됩니다. 체크 버튼을 클릭하시면서 작성하시면 됩니다.
![image](https://github.com/user-attachments/assets/b7707f37-d3b4-47d9-b0d6-6f68ff581f83)

## 📝 etc

수정하고 싶은 부분이나 추가하고 싶은 기능이 있다면 언제든지 PR을 보내주세요.
