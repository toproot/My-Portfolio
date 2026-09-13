# 정상근 개인 프로필 웹페이지

인사담당자가 지원자의 제조 IT 직무, 경험, 기여와 성과를 근거와 함께 빠르게 확인할 수 있도록 만든 React + TypeScript 프로필입니다.

## 로컬 실행

Node.js 20.19 이상이 필요합니다.

```bash
npm install
npm run dev
```

터미널에 표시되는 주소(기본값 `http://localhost:5173`)를 브라우저에서 엽니다.

프로덕션 빌드와 미리보기:

```bash
npm run build
npm run preview
```

## 프로필 내용 수정

화면의 모든 프로필 콘텐츠는 `src/data/profile.ts`에서 관리합니다.

- `person`: 이름, 직무명, 소개, 현재 역할, 경력 기준일
- `highlights`: 첫 화면의 핵심 성과
- `competencies`: 핵심 역량과 연결할 사례
- `career`: 회사, 기간, 역할, 담당 업무
- `projects`: 문제 → 역할 → 행동 → 결과 형식의 대표 사례
- `technologies`: 기술과 실제 활용 맥락
- `education`, `certifications`, `training`: 학력·자격·교육
- `contact`: 공개 이메일

새 프로젝트를 추가할 때는 고유한 `id`를 지정하고 관련 역량·기술의 `href`를 `#id` 형식으로 연결합니다.

## 개인정보와 원본 자료

- 공개 데이터에는 이메일만 포함했습니다.
- 생년, 성별, 휴대폰, 상세 주소는 앱 데이터와 메타데이터에서 제외했습니다.
- 원본 `이력서.pdf`는 `public` 폴더에 복사하지 않으므로 빌드 산출물에 포함되지 않습니다.
- 개발용 페르소나 분석은 `docs/hr-presona.md`에 있으며 앱에서 불러오지 않습니다.

## 품질 확인

```bash
npm run lint
npm run build
```

브라우저 스모크 테스트를 처음 실행할 때는 테스트용 Chromium을 한 번 설치합니다.

```bash
npx playwright install chromium
npm run test:smoke
```

스모크 테스트는 개발 서버(`npm run dev`)가 실행 중인 상태에서 데스크톱·모바일 가로 넘침, 메뉴 이동, 상세 펼치기, 이메일 복사 성공·실패 안내와 인쇄 스타일을 확인합니다.

인쇄 시 상단 메뉴와 동작 버튼은 숨기고, 경력 상세와 교육 내역은 펼쳐진 형태로 출력되도록 구성했습니다.
