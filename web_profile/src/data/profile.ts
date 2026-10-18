export type Project = {
  id: string
  title: string
  period?: string
  problem: string
  role: string
  actions: string[]
  results: string[]
  technologies: string[]
}

export type Profile = {
  person: {
    name: string
    role: string
    currentTitle: string
    experience: string
    experienceAsOf: string
    valueStatement: string
    summary: string[]
    possibleRoles: string
  }
  highlights: Array<{ value: string; label: string; href: string }>
  competencies: Array<{
    title: string
    evidence: string
    href: string
    linkLabel: string
  }>
  career: Array<{
    company: string
    team: string
    title: string
    employmentType: string
    period: string
    scope: string
    keyResults: string[]
    responsibilities: string[]
  }>
  projects: Project[]
  technologies: Array<{
    category: string
    description: string
    items: string[]
    href?: string
  }>
  education: Array<{
    school: string
    major: string
    period: string
    status?: string
    detail?: string
  }>
  certifications: Array<{
    name: string
    date: string
    issuer: string
    detail?: string
  }>
  training: Array<{
    name: string
    period: string
    detail: string
  }>
  contact: {
    email: string
  }
}

export const profile: Profile = {
  "person": {
    "name": "정상근",
    "role": "제조 IT · 웹 서비스 · 현업 AI 개발 엔지니어",
    "currentTitle": "앰코테크놀로지코리아 Corp. IT/Automation 자동화기술팀 · 책임",
    "experience": "총 4년 8개월",
    "experienceAsOf": "2026년 10월 18일 기준 · 2022.01.24 입사",
    "valueStatement": "현장의 요구를 업무 로직으로 구현하고, 설비·MES·데이터를 연결해 실제 운영 가능한 서비스로 완성합니다.",
    "summary": [
      "Java 기반 eCIM 개발·운영을 바탕으로 설비 인터페이스, 생산 검증, 데이터 조회와 장애 대응을 수행해 왔습니다. eCIM은 사내 제조 생산 모니터링·제어 시스템입니다.",
      "생산분석 리포트를 Spring Boot·Vue.js 웹 서비스로 전환하고 Linux VM·Podman·CI/CD 운영환경을 구성했습니다. SECS/GEM 기술문서와 LLM을 연계한 질의응답 서비스도 현업에 적용했습니다.",
      "일본·베트남 FAB의 MES 연계와 DB 전환, ENIG Multi-Lot 자동투입, Q-Time 검증을 수행했습니다. Wire Bond 예지보전은 별도의 AI/ML·LLM/RAG PoC로 기획·개발하고 적용 가능성을 검증했습니다."
    ],
    "possibleRoles": "제조 IT 백엔드·웹 서비스 개발, MES·설비 인터페이스 구축, 생산 데이터·운영 개선, 제조 도메인 기반 AI 업무지원 서비스 개발"
  },
  "highlights": [
    {
      "value": "8,000대+",
      "label": "반도체 생산 설비 통신 표준 연동",
      "href": "#project-secs-gem"
    },
    {
      "value": "50%+",
      "label": "신규 장비 통신 셋업 리드타임 단축",
      "href": "#project-secs-gem"
    },
    {
      "value": "100%",
      "label": "AMR 라인 자재 투입 프로세스 무인화",
      "href": "#project-amr"
    }
  ],
  "competencies": [
    {
      "title": "레거시 분석부터 웹 서비스 운영까지",
      "evidence": "라인 PC의 대량 데이터 조회 중 비정상 종료 문제를 분석하고, 기존 SQL 로직을 유지하며 eCIM 생산분석 리포트를 Spring Boot·Vue.js로 전환했습니다. Linux VM·Podman·CI/CD 구성과 현업 적용 후 개선 검증까지 수행했습니다.",
      "href": "#project-ecim-web",
      "linkLabel": "웹 전환과 운영환경 보기"
    },
    {
      "title": "현업이 사용하는 LLM 기술지원 서비스",
      "evidence": "SECS/GEM 문의가 개발자에게 집중되는 상황에서 현업 요구를 분석하고, 사내 기술문서·운영 매뉴얼을 Copilot Agent에 연결했습니다. 엔지니어가 자연어로 정보를 검색하는 서비스를 실제 운영환경에 적용했습니다.",
      "href": "#project-llm-support",
      "linkLabel": "AI 서비스 현업 적용 보기"
    },
    {
      "title": "제조 데이터 기반 AI/ML 검증",
      "evidence": "Wire Bond 데이터를 Python·Pandas로 전처리하고 Random Forest 등 분석 모델과 LLM/RAG 활용을 검토했습니다. 예지보전 PoC의 기획·설계·백엔드 개발과 업체 리서치를 수행하며 후속 투자 검토로 연결했습니다.",
      "href": "#project-ai",
      "linkLabel": "예지보전 PoC 범위 보기"
    },
    {
      "title": "생산·물류·설비 인터페이스 표준화",
      "evidence": "MES·WMS·설비 연계와 SECS/GEM·TCP/IP·Socket 기반 통신 기능을 개발했습니다. 장비별 이벤트·데이터를 공통 규격과 설정형 매핑으로 정리해 신규 설비 연동 및 해외 사이트 적용을 지원했습니다.",
      "href": "#project-secs-gem",
      "linkLabel": "설비 통신 표준화 보기"
    },
    {
      "title": "공정 조건을 자동 검증 로직으로 구현",
      "evidence": "Basket 안의 여러 Lot에 대해 Recipe·Tool·MES Validation을 일괄 처리하고, 자재가 분리돼도 작업 흐름이 이어지도록 개선했습니다. Q-Time 8시간 Rule과 Alert·Pre-Alert로 공정 시간 제약도 자동 검증했습니다.",
      "href": "#project-amr",
      "linkLabel": "Multi-Lot 검증과 자동투입 보기"
    },
    {
      "title": "해외 MES 현지화와 구축·안정화",
      "evidence": "일본에서는 현지 MES에 맞춘 자동화 시스템과 DB 구조 수정·마이그레이션을 수행했습니다. 베트남에서는 한국·중국 이관 시스템의 Gap 20건 이상을 분석하고 데이터 변환, 현지 셋업, 교육·매뉴얼 작성으로 운영을 지원했습니다.",
      "href": "#project-global",
      "linkLabel": "해외 FAB 구축 사례 보기"
    },
    {
      "title": "제조 데이터 모델과 조회 로직 개선",
      "evidence": "MS SQL·DB2 기반 업무 데이터 처리, DB 모델링·쿼리 튜닝과 생산 데이터 Traceability 업무를 수행했습니다. RMS·TMS·FDC·CDT Report와 현지 MES의 데이터 구조 차이를 분석해 업무 기능과 데이터 흐름을 개선했습니다.",
      "href": "#career",
      "linkLabel": "데이터 개발·운영 경력 보기"
    },
    {
      "title": "현장 요구 분석과 운영 문제 해결",
      "evidence": "애플리케이션 로그·설비 통신·DB 데이터를 함께 분석해 장애 원인을 파악하고, RMS Recipe·iEMS 이상감지·설비 Hold 기능을 개선했습니다. 화학용품 모니터링에서는 관리자와 작업자의 서로 다른 요구를 PLC 연계 업무로 구체화했습니다.",
      "href": "#project-chemical",
      "linkLabel": "현장 협업·모니터링 사례 보기"
    }
  ],
  "career": [
    {
      "company": "앰코테크놀로지코리아",
      "team": "Corp. IT/Automation 자동화기술팀 · SW",
      "title": "책임 · 제조 IT 시스템 개발·운영",
      "employmentType": "재직중",
      "period": "2022.01.24 ~ 현재",
      "scope": "현업 요구사항 분석 → Java 기반 업무 로직·인터페이스 개발 → DB·통신 분석 → 현장 적용·운영 개선. 제조 자동화 시스템, 웹 서비스 현대화, AI 업무지원 서비스와 해외 FAB 구축 업무를 수행합니다.",
      "keyResults": [
        "eCIM 생산분석 리포트를 Spring Boot·Vue.js 웹 서비스로 전환하고 현업 적용 후 대량 조회 시 클라이언트 비정상 종료 문제 개선 확인",
        "SECS/GEM 사내 기술문서·운영 매뉴얼 기반 LLM 질의응답 서비스를 구축해 현업 운영환경에 적용",
        "베트남 시스템 Gap 20건 이상 분석·개선 및 초기 설비 가동률 90% 이상 목표 달성에 기여, 일본 Paperless 처리 속도 약 40% 개선에 기여",
        "8,000대 이상 생산 설비 통신 표준 연동 및 신규 장비 셋업 리드타임 50% 이상 단축",
        "ENIG 자동투입·Multi-Lot 일괄 검증과 공정 간 8시간 Rule 자동화로 생산 검증·반복 업무 개선",
        "Wire Bond 예지보전 PoC의 제조현장 적용 가능성을 검증하고 후속 투자 검토 대상으로 선정"
      ],
      "responsibilities": [
        "Java·Servlet/JSP·SWT 기반 eCIM 개발·유지보수, 현업 요구사항 분석 및 비즈니스 로직·UI 개선",
        "Spring Boot·Vue.js 웹 마이그레이션, 기존 SQL 데이터 조회 로직 분석·유지 및 현업 적용 검증",
        "Linux VM 서버 구축, Podman 컨테이너 기반 서비스 실행·배포 및 CI/CD 환경 구성",
        "REST API·TCP/IP·Socket·PLC·SECS/GEM 기반 MES·WMS·설비 인터페이스 개발",
        "MS SQL·DB2 데이터 조회·처리, DB 모델링·쿼리 튜닝, Oracle 활용 및 해외 MES 적응을 위한 DB 구조 수정·마이그레이션",
        "RMS Recipe 관리, TMS·FDC·CDT Report와 생산 데이터 Traceability 관련 기능 개발·개선",
        "설비 자동투입 Validation, Basket 단위 Recipe·Tool·MES 검증과 Multi-Lot 일괄 처리",
        "Q-Time 8시간 Rule·Alert·Pre-Alert, iEMS 이상감지·설비 Hold 및 운영 장애 대응",
        "AMAT E3 연계 FDC 미들웨어, 설비 파라미터 매핑·라우터 구조 설계",
        "사내 SECS/GEM 문서 기반 Copilot Agent 질의응답 서비스 구성·현업 적용",
        "Python·Pandas 제조 데이터 분석 및 Wire Bond 예지보전 PoC 기획·설계·개발, 분석 모델·업체 검토",
        "일본·베트남 현지 MES 연계, 설비 인터페이스 셋업·통합 검증, 현지 엔지니어 기술지원·교육 및 운영 매뉴얼 작성",
        "PLC 연동 화학용품 모니터링과 반복 점검 자동화, 현장 관리자·작업자 요구사항 반영"
      ]
    }
  ],
  "projects": [
    {
      "id": "project-ecim-web",
      "title": "eCIM 생산분석 웹 전환과 운영환경 현대화",
      "problem": "생산라인 PC에서 대량 데이터를 조회할 때 메모리 부족으로 기존 생산분석 리포트 애플리케이션이 비정상 종료됐습니다. 조회 업무의 연속성을 확보하면서 기존 기능과 데이터 일관성을 유지해야 했습니다.",
      "role": "기존 업무 흐름·SQL 분석부터 Spring Boot·Vue.js 웹 전환, 서비스 운영환경 구성, 현업 적용 후 개선 여부 검증까지 수행했습니다.",
      "actions": [
        "기존 생산분석 리포트의 업무 흐름과 SQL 조회 로직을 분석하고, 기존 SQL 로직을 유지해 데이터 일관성 확보",
        "Java Spring Boot 백엔드와 Vue.js 프런트엔드로 웹 애플리케이션 마이그레이션",
        "Linux VM 서버 및 Podman 컨테이너 기반 서비스 실행·배포와 CI/CD 환경 구성",
        "GitHub Copilot Agent의 Claude·GPT 계열 모델을 기존 코드 분석·웹 전환 개발에 활용",
        "실제 현업 운영환경에 적용하고 대량 데이터 조회 시 기존 비정상 종료 문제의 개선 여부 검증"
      ],
      "results": [
        "라인 PC 메모리 부족으로 발생하던 클라이언트 비정상 종료 문제 개선 확인",
        "생산분석 리포트의 웹 서비스 전환 및 현업 운영 적용",
        "Linux VM·Podman 기반 서비스 실행·배포 환경 구축"
      ],
      "technologies": [
        "Java",
        "Spring Boot",
        "Vue.js",
        "SQL",
        "Linux VM",
        "Podman",
        "CI/CD",
        "GitHub Copilot Agent"
      ]
    },
    {
      "id": "project-llm-support",
      "title": "LLM 기반 SECS/GEM 기술문서 검색 서비스",
      "problem": "장비 통신 오류와 기술 문의가 개발자에게 집중돼 현업 엔지니어가 즉시 필요한 정보를 찾기 어려웠습니다. 사내 기술문서와 운영 매뉴얼을 직접 검색할 수 있는 업무지원 수단이 필요했습니다.",
      "role": "현업 요구사항과 활용 시나리오를 분석하고, Copilot Agent에 사내 기술문서를 연결한 자연어 질의응답 서비스를 구성해 운영환경에 적용했습니다.",
      "actions": [
        "SECS/GEM 오류·기술 문의의 현업 지원 요구사항과 사용 시나리오 정의",
        "Copilot에서 제공하는 Agent 프로그램을 활용해 LLM 기반 질의응답 서비스 구성",
        "사내 SECS/GEM 기술문서·운영 매뉴얼을 연동해 전문 기술정보 검색 기능 구현",
        "엔지니어가 자연어로 통신 관련 기술정보를 조회하도록 구성하고 실제 현업에 적용"
      ],
      "results": [
        "현업 엔지니어가 SECS/GEM 정보를 직접 검색할 수 있는 AI 업무지원 서비스 제공",
        "제조 자동화 도메인 경험을 사내 기술정보 검색·지원 서비스로 확장"
      ],
      "technologies": [
        "LLM",
        "Copilot Agent",
        "기술문서 연동",
        "SECS/GEM"
      ]
    },
    {
      "id": "project-ai",
      "title": "Wire Bond 설비 데이터 기반 AI/ML 예지보전 PoC",
      "problem": "기존 Wire Bond 장비의 통신·센싱 데이터를 활용해 이상 징후를 분석하고, 분석 결과를 엔지니어의 판단에 연결할 수 있는지 검증하는 과제였습니다.",
      "role": "전체 PoC의 기획·설계와 이상 예측 백엔드 개발에 참여했습니다. 데이터 분석, 모델 적용 가능성 검토, LLM/RAG 결과 제공 구조와 관련 업체 리서치를 수행했습니다.",
      "actions": [
        "Wire Bond 설비 데이터를 Python·Pandas로 전처리·분석",
        "Random Forest 등 분석 모델을 활용한 설비 이상 예측 백엔드 개발 및 적용 가능성 검증",
        "강화학습 모델을 포함한 분석 접근을 PoC 범위에서 검토",
        "분석 결과와 업무정보를 엔지니어에게 제공하는 LLM/RAG 활용 구조 기획·설계·개발",
        "설비 데이터 특성과 분석 결과를 바탕으로 모델 선정 및 관련 업체 리서치 수행"
      ],
      "results": [
        "제조설비 데이터에 대한 머신러닝 적용 가능성 검증",
        "기존 제조 시스템의 AI 도입 가능성에 대해 긍정적 평가를 받고 후속 투자 검토 대상으로 선정",
        "검증 단계는 PoC이며, 현업 운영 중인 기술문서 검색 서비스와 구분"
      ],
      "technologies": [
        "Python",
        "Pandas",
        "Random Forest",
        "Machine Learning",
        "LLM/RAG PoC"
      ]
    },
    {
      "id": "project-secs-gem",
      "title": "SECS/GEM 장비 인터페이스 표준화 프레임워크",
      "problem": "장비 벤더별 Custom Protocol로 인해 신규 장비 도입마다 1:1 개발이 필요했고 셋업에 평균 4~6주가 소요됐습니다.",
      "role": "공통 데이터 분류와 통신 가이드라인을 수립하고 Java Spring Boot 기반 설정형 매핑 프레임워크를 설계·개발했습니다.",
      "actions": [
        "SECS-I/II·HSMS 기반 장비 이벤트와 데이터 포맷을 공통 Taxonomy로 분류",
        "코드 재배포 없이 UI 설정으로 공정·장비별 시나리오를 구성하는 구조 구현",
        "MES–Machine–DB 데이터 흐름을 재설계하고 인터페이스 정합성 자동 검증 적용"
      ],
      "results": [
        "신규 장비 통신 셋업 리드타임 50% 이상 단축(기존 4~6주 → 1.5주)",
        "8,000대 이상의 반도체 생산 설비에 통신 표준 연동",
        "베트남·일본 신규 FAB에 동일 프레임워크 이식"
      ],
      "technologies": [
        "Java 8/11",
        "Spring Boot",
        "SECS/GEM",
        "IBM DB2",
        "MSSQL",
        "REST API",
        "JBOSS WAS"
      ]
    },
    {
      "id": "project-global",
      "title": "베트남 ATV 신규 FAB 시스템 통합·초기 양산 지원",
      "period": "2024.03 ~ 2024.09",
      "problem": "한국·중국 등에서 이관된 설비와 자동화 시스템의 인터페이스·데이터 처리 방식이 달랐습니다. 이를 베트남 현지 MES에 맞춰 통합하고 신규 FAB의 초기 가동을 지원해야 했습니다.",
      "role": "시스템 Gap 분석, 데이터 변환·표준화 로직 개발, 현지 MES에 맞춘 시스템·DB 수정과 설비 셋업·안정화 업무를 수행했습니다.",
      "actions": [
        "국가별 설비 인터페이스와 데이터 처리 구조의 Gap 20건 이상 분석·개선",
        "한국·중국 시스템의 데이터 형식 차이를 반영한 변환·표준화 로직 개발",
        "베트남 MES 데이터를 수용하도록 자동화 시스템과 DB 구조 수정",
        "이관 설비의 인터페이스 셋업·연동 테스트, 오류 원인 분석과 운영 안정화",
        "현지 엔지니어 대상 기술교육·지원 및 운영 매뉴얼 작성"
      ],
      "results": [
        "신규 FAB 초기 설비 가동률 90% 이상 목표 달성에 기여",
        "국가별 상이한 시스템을 현지 MES와 연계하고 설비 데이터·인터페이스 표준화",
        "현지 교육과 매뉴얼 제공으로 운영 지원"
      ],
      "technologies": [
        "Java",
        "SQL",
        "MES",
        "eCIM",
        "SECS/GEM",
        "TCP/IP",
        "DB2",
        "MS SQL"
      ]
    },
    {
      "id": "project-japan",
      "title": "일본 ATJ MES 연계·DB 마이그레이션",
      "period": "2023.09 ~ 2023.12",
      "problem": "한국의 자동화 시스템을 일본 Wire Bond·Mold 생산라인에 적용하면서 현지 MES와의 데이터 구조·업무 로직 차이를 해소해야 했습니다.",
      "role": "현지 MES에 맞춘 자동화 시스템 수정과 DB 아키텍처 변경·마이그레이션, 기능 테스트·셋업 및 초기 운영 안정화를 수행했습니다.",
      "actions": [
        "한국·일본 MES 간 데이터·업무 처리 차이 분석 및 인터페이스 로직 수정",
        "현지 MES 연계를 위한 DB 구조 변경과 데이터 마이그레이션",
        "Wire Bond·Mold 공정의 Rescue Mode·Tool Validation·Paperless 기능 테스트·개선",
        "현업 사용자와 시스템 오류·프로세스 개선사항을 분석하고 적용 후 이슈 대응"
      ],
      "results": [
        "Paperless 처리 속도 약 40% 개선에 기여",
        "현지 MES·설비 인터페이스 안정화 및 생산라인 자동화 업무 개선 지원"
      ],
      "technologies": [
        "Java",
        "SQL",
        "MES",
        "eCIM",
        "SECS/GEM",
        "DB2",
        "MS SQL"
      ]
    },
    {
      "id": "project-amr",
      "title": "ENIG Multi-Lot 검증·물류로봇 자동투입 개선",
      "problem": "물류에서 인계받은 자재를 ENIG 라인의 각 장비에 자동 투입하고 다음 공정으로 연결하는 과정에서, Basket 내 여러 Lot의 조건 검증과 반복 전송에 따른 지연을 해결해야 했습니다.",
      "role": "자동투입 백엔드와 MES·ACS 연계, Basket 단위 Recipe·Tool·MES Validation 및 일괄 처리 인터페이스를 개발·개선했습니다.",
      "actions": [
        "Basket 안의 여러 Lot에 대해 Recipe·Tool·MES 조건을 일괄 검증하고, 자재가 Split돼도 작업이 안정적으로 이어지도록 로직 개선",
        "Lot별 반복 전송을 Basket 단위 일괄 처리로 변경해 자동투입 지연 완화",
        "Java WAS·REST API로 ACS와 투입 정보를 연계하고 MES·설비 간 자동투입 흐름 구현",
        "Basket·Strip 단위 RMS/TMS 추적 흐름과 고객·공정별 인터록 구현",
        "물류로봇의 ENIG 공정 반송·장비 투입·다음 공정 인계를 지원하는 시스템 연계"
      ],
      "results": [
        "Basket 단위 Multi-Lot 검증과 일괄 처리로 반복 전송·자동투입 지연 개선",
        "프로젝트 결과: 자재 투입 프로세스 100% 무인화 및 수작업 오투입 차단",
        "프로젝트 결과: UPH 약 30% 향상, 자재 리젝·폐기율 70% 이상 절감"
      ],
      "technologies": [
        "Java 8",
        "Spring Boot",
        "Quartz Scheduler",
        "PostgreSQL",
        "REST API",
        "ACS",
        "PLC",
        "Linux"
      ],
      "period": "2025.06 ~ 2026.06"
    },
    {
      "id": "project-rule-engine",
      "title": "Q-Time 8시간 Rule 자동검증·사전 알림",
      "problem": "공정 간 허용시간을 수동으로 확인하는 부담을 줄이고, 기준시간 초과로 인한 공정 이탈·자재 리젝 위험에 사전 대응해야 했습니다.",
      "role": "MES·설비 이벤트를 기반으로 Inter-Operation Time 8시간 Rule 검증과 Quartz 스케줄링, Alert·Pre-Alert 기능을 개발했습니다.",
      "actions": [
        "MES·설비 이벤트와 공정 시간 기준을 연결해 자동 검증 로직 구현",
        "Quartz Scheduling으로 시간 조건을 확인하고 실시간 Alert·Pre-Alert 제공",
        "검증 결과를 EMS 모니터링과 인터록에 연결해 공정 이탈 사전 대응 지원"
      ],
      "results": [
        "공정 간 허용시간 확인과 반복 검증 업무 자동화",
        "기준시간 초과 및 자재 리젝 위험 감소에 기여",
        "프로젝트 결과: 폐기 비용 약 15% 절감 및 표준 Rule Engine 확대 적용"
      ],
      "technologies": [
        "Java",
        "Spring Boot",
        "Quartz",
        "Oracle",
        "PostgreSQL",
        "EMS",
        "SECS/GEM"
      ],
      "period": "2026.01 ~ 2026.09"
    },
    {
      "id": "project-fdc",
      "title": "FDC 설비 데이터 미들웨어·파라미터 연계",
      "problem": "설비·챔버별 파라미터를 제조 데이터 분석 환경과 연결하기 위해 데이터 매핑과 전달 구조가 필요했습니다.",
      "role": "AMAT E3 연계 FDC 미들웨어와 설비 파라미터 매핑·라우터 구조를 설계했습니다.",
      "actions": [
        "AMAT E3와 연동하는 챔버·설비 파라미터 매핑 미들웨어 설계",
        "설비 데이터 전달을 위한 라우터 구조 설계",
        "FDC·CDT Report 관련 데이터 조회·처리 및 생산 데이터 활용 업무 수행"
      ],
      "results": [
        "설비 파라미터를 제조 데이터 분석 환경과 연결하는 미들웨어 구조 마련"
      ],
      "technologies": [
        "AMAT E3",
        "FDC",
        "SECS/GEM",
        "SQL"
      ]
    },
    {
      "id": "project-chemical",
      "title": "PLC 연동 화학용품 모니터링·점검 자동화",
      "problem": "관리자는 화학용품 누수에 대한 대응을, 작업자는 현장을 일일이 방문하는 반복 점검의 자동화를 요구했습니다. 두 요구를 함께 반영할 수 있는 모니터링 방식이 필요했습니다.",
      "role": "현장 요구를 반영한 PLC 연동 화학 탱크 모니터링과 수동 점검 자동화 업무를 수행했습니다.",
      "actions": [
        "관리자의 누수 대응 요구와 작업자의 반복 점검 업무를 구분해 개선 요구사항 정리",
        "PLC 연동 화학 탱크 모니터링 기능으로 현장 상태 확인 업무 지원",
        "기존 수동 점검 프로세스를 자동화하는 방향으로 기능 개선"
      ],
      "results": [
        "매일 수행하던 수동 점검 프로세스 자동화",
        "서로 다른 현장 요구를 하나의 모니터링 업무로 연결"
      ],
      "technologies": [
        "PLC Communication",
        "eCIM",
        "모니터링"
      ]
    }
  ],
  "technologies": [
    {
      "category": "백엔드 · 제조 애플리케이션",
      "description": "eCIM 업무 로직, API, 생산 검증 엔진과 웹 서비스 개발·운영",
      "items": [
        "Java",
        "Spring Boot",
        "Servlet/JSP",
        "Java SWT",
        "REST API",
        "Quartz Scheduler",
        "JBoss",
        "Ant"
      ],
      "href": "#project-ecim-web"
    },
    {
      "category": "웹 전환 · 개발 도구",
      "description": "생산분석 리포트 웹 전환 및 기존 코드 분석·개발에 활용",
      "items": [
        "Vue.js",
        "JavaScript",
        "GitHub Copilot Agent",
        "Claude·GPT 계열 모델"
      ],
      "href": "#project-ecim-web"
    },
    {
      "category": "제조 시스템 · 인터페이스",
      "description": "생산·물류·설비 데이터 연계, 자동투입과 이력 추적에 활용",
      "items": [
        "SECS-I/II",
        "HSMS",
        "TCP/IP",
        "Socket",
        "PLC",
        "eCIM",
        "MES",
        "WMS",
        "RMS/TMS",
        "FDC/CDT Report",
        "iEMS",
        "AGV/AMR·ACS"
      ],
      "href": "#project-amr"
    },
    {
      "category": "DB · 생산 데이터",
      "description": "현지 MES 적응, DB 구조 변경·마이그레이션, 조회·처리·쿼리 튜닝에 활용",
      "items": [
        "MS SQL",
        "DB2",
        "Oracle",
        "PostgreSQL",
        "SQL",
        "DB 모델링",
        "Traceability"
      ],
      "href": "#project-japan"
    },
    {
      "category": "현업 운영 · LLM 업무지원",
      "description": "사내 기술문서 기반 자연어 검색·질의응답 서비스를 현업에 적용",
      "items": [
        "LLM",
        "Copilot Agent",
        "기술문서·매뉴얼 연동",
        "SECS/GEM 기술정보"
      ],
      "href": "#project-llm-support"
    },
    {
      "category": "제조 AI · PoC",
      "description": "제조 데이터·AI 개발 도구. 최신 Wire Bond PoC는 Python·Pandas·Random Forest와 LLM/RAG 활용 검증 중심",
      "items": [
        "Python",
        "Pandas",
        "Random Forest",
        "Machine Learning",
        "LLM/RAG",
        "강화학습 모델 검토",
        "PyTorch",
        "Scikit-Learn",
        "FastAPI",
        "Vector DB"
      ],
      "href": "#project-ai"
    },
    {
      "category": "서비스 인프라 · 협업",
      "description": "서비스 실행·배포 환경 구성, 기존 시스템 운영 및 글로벌 협업에 활용",
      "items": [
        "Linux",
        "Windows",
        "VM",
        "Podman",
        "CI/CD",
        "Docker",
        "Git",
        "SVN",
        "Jira",
        "Confluence"
      ],
      "href": "#career"
    },
    {
      "category": "추가 개발 경험",
      "description": "주력 실무 기술과 구분되는 사내 토이프로젝트 경험",
      "items": [
        "C# / .NET · 사내 토이프로젝트"
      ]
    }
  ],
  "education": [
    {
      "school": "세종사이버대학교",
      "major": "컴퓨터AI공학과",
      "period": "2023.03 ~ 2025.02",
      "status": "편입 · 졸업",
      "detail": "학점 4.0 / 4.5"
    },
    {
      "school": "조선대학교",
      "major": "경영학부",
      "period": "2015.03 ~ 2021.02",
      "detail": "학점 3.72 / 4.5"
    }
  ],
  "certifications": [
    {
      "name": "TOEIC Speaking Test",
      "date": "2026.08",
      "issuer": "영어",
      "detail": "140점 · Intermediate High · PASS"
    },
    {
      "name": "데이터분석준전문가(ADsP)",
      "date": "2026.06",
      "issuer": "한국데이터베이스진흥원"
    },
    {
      "name": "CSTS Foundation Level",
      "date": "2024.12",
      "issuer": "한국정보통신기술협회"
    },
    {
      "name": "SQL개발자(SQLD)",
      "date": "2021.10",
      "issuer": "한국데이터베이스진흥센터"
    },
    {
      "name": "정보처리기사",
      "date": "2021.09",
      "issuer": "한국산업인력공단"
    },
    {
      "name": "사회조사분석사 2급",
      "date": "2021.06",
      "issuer": "한국산업인력공단"
    }
  ],
  "training": [
    {
      "name": "AWS Academy Cloud Foundations",
      "period": "2024.06",
      "detail": "AWS 클라우드 기초 교육과정 이수"
    },
    {
      "name": "한국기술교육대학교 반도체장비통신기술과정",
      "period": "2022.11",
      "detail": "SECS/GEM Protocol 전문 교육과정 이수"
    },
    {
      "name": "SSAFY(삼성 청년 SW 아카데미)",
      "period": "2021.01 ~ 2021.10",
      "detail": "Vue·React·Unity, SW 알고리즘 및 웹 서비스 개발 교육"
    },
    {
      "name": "스마트인재개발원 빅데이터 기반 융합 SW개발자 과정",
      "period": "2020.06 ~ 2020.11",
      "detail": "DB 설계, 머신러닝 기반 빅데이터 분석 및 웹 서비스 개발"
    },
    {
      "name": "스마트인재개발원 SNS 기반 빅데이터 분석 입문과정",
      "period": "2018.12 ~ 2019.01",
      "detail": "비정형 데이터 분석 및 HTML 기반 웹 개발"
    }
  ],
  "contact": {
    "email": "toproot7913@gmail.com"
  }
}
