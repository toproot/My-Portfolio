# 다른 PC에서 프로젝트 불러오기

이 문서는 Git 저장소에 올린 프로젝트를 다른 PC에서 clone한 뒤 설치하고 실행하는 방법을 설명합니다.

## 1. 먼저 설치할 프로그램

다른 PC에 다음 프로그램이 필요합니다.

- Git
- Node.js 20.19 이상
- npm(Node.js 설치 시 함께 설치됨)

설치 여부는 터미널에서 확인할 수 있습니다.

```bash
git --version
node --version
npm --version
```

## 2. Git 저장소 clone

터미널에서 프로젝트를 저장할 폴더로 이동한 뒤 실행합니다.

```bash
git clone <저장소-주소>
cd self-homepage
```

`<저장소-주소>`는 GitHub 등의 저장소 페이지에서 복사한 HTTPS 또는 SSH 주소로 바꿉니다.

예시:

```bash
git clone https://github.com/사용자명/저장소명.git
cd 저장소명
```

## 3. `.gitignore`로 제외된 파일 복원

`.gitignore`에 있는 파일은 Git에 저장되지 않지만 대부분 명령으로 다시 생성할 수 있습니다.

### `node_modules`

React, Vite 등 프로젝트 패키지가 설치되는 폴더입니다. `package-lock.json`에 기록된 버전을 그대로 설치하려면 다음 명령을 사용합니다.

```bash
npm ci
```

`package-lock.json`이 없거나 의존성을 변경해야 한다면 다음 명령을 사용합니다.

```bash
npm install
```

일반적인 clone 후 복원에는 재현성이 높은 `npm ci`를 권장합니다.

### `dist`

배포용 빌드 결과입니다. 다음 명령이 새로 생성합니다.

```bash
npm run build
```

### `.vite`

Vite가 개발 서버를 실행하면서 만드는 캐시입니다. 별도로 설치할 필요가 없습니다.

```bash
npm run dev
```

### `test-output`

브라우저 스모크 테스트가 만드는 스크린샷 폴더입니다. 처음 테스트할 때 Chromium을 설치한 뒤 생성합니다.

```bash
npx playwright install chromium
```

개발 서버를 첫 번째 터미널에서 실행합니다.

```bash
npm run dev
```

개발 서버가 실행 중인 상태에서 두 번째 터미널을 열고 테스트합니다.

```bash
npm run test:smoke
```

### `*.tsbuildinfo`

TypeScript가 빌드 속도를 높이기 위해 만드는 캐시 파일입니다. 다음 빌드 시 자동으로 다시 생성됩니다.

```bash
npm run build
```

### `*.local`

PC별 로컬 설정 파일을 의미합니다. 이 프로젝트는 현재 필수 `.local` 파일을 사용하지 않으므로 복원할 것이 없습니다.

추후 `.env.local` 같은 파일을 사용하게 된다면 Git에 올리지 말고, `.env.example`에 변수 이름만 기록한 뒤 각 PC에서 실제 값을 직접 만들어야 합니다.

## 4. 개발 서버 실행

의존성 설치가 끝난 뒤 실행합니다.

```bash
npm run dev
```

터미널에 표시되는 주소를 브라우저에서 엽니다. 기본 주소는 다음과 같습니다.

```text
http://localhost:5173
```

서버를 종료하려면 실행 중인 터미널에서 `Ctrl+C`를 누릅니다.

## 5. 프로덕션 빌드 확인

```bash
npm run build
npm run preview
```

`npm run build`는 `dist` 폴더를 생성하고, `npm run preview`는 빌드된 결과를 로컬 서버에서 확인합니다.

## 6. 전체 품질 검증

```bash
npm run lint
npm run build
```

브라우저 테스트까지 실행하려면 개발 서버를 켜 둔 상태에서 다음 명령을 실행합니다.

```bash
npx playwright install chromium
npm run test:smoke
```

## 7. 가장 짧은 실행 순서

```bash
git clone <저장소-주소>
cd <저장소-폴더>
npm ci
npm run dev
```

## 8. 자주 발생하는 문제

### `npm` 명령을 찾을 수 없음

Node.js가 설치되지 않았거나 설치 후 터미널을 다시 열지 않은 경우입니다. Node.js 20.19 이상을 설치하고 터미널을 재시작합니다.

### Node.js 버전 오류

```bash
node --version
```

버전이 20.19보다 낮다면 Node.js를 업데이트합니다.

### 패키지 설치 상태가 꼬인 경우

`node_modules`를 삭제한 뒤 잠금 파일 기준으로 다시 설치합니다.

PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
npm ci
```

macOS/Linux:

```bash
rm -rf node_modules
npm ci
```

### 5173 포트를 이미 사용 중인 경우

Vite가 다른 포트를 자동으로 안내할 수 있습니다. 특정 포트를 사용하려면 다음과 같이 실행합니다.

```bash
npm run dev -- --port 5174
```

## 9. Git에 포함되는 원본 파일 주의

현재 `.gitignore`는 `이력서.pdf`와 `hr-persona.md`를 제외하지 않습니다. 저장소에 commit하면 두 파일도 함께 올라갈 수 있습니다.

원격 저장소에 이력서 원본을 올리고 싶지 않다면 최초 commit 전에 `.gitignore`에 다음 항목을 추가해야 합니다.

```gitignore
이력서.pdf
hr-persona.md
```

이미 commit한 뒤라면 `.gitignore` 추가만으로 기존 Git 기록에서 사라지지 않습니다. 개인정보가 포함된 저장소라면 공개 전 반드시 Git 추적 상태와 저장소 공개 범위를 확인해야 합니다.

