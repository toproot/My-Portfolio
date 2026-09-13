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
  person: {
    name: '정상근',
    role: '반도체 스마트팩토리 자동화 · 장비 연동 백엔드 엔지니어',
    currentTitle: '앰코테크놀로지코리아 IT/Automation Team · 대리',
    experience: '총 4년 8개월',
    experienceAsOf: '2026년 9월 13일 기준',
    valueStatement:
      '제조 현장의 설비·공정 데이터를 안정적인 백엔드 시스템으로 연결하고, 표준화와 자동화로 운영 변화를 만듭니다.',
    summary: [
      'Java·Spring 기반 eCIM Host와 MES 인터페이스를 개발하며 반도체 후공정 설비 연동과 제조 데이터 흐름을 설계해 왔습니다.',
      'SECS/GEM 통신 표준화, AMR 물류 무인화, 해외 FAB 자동화 셋업, 제조 이상감지 AI PoC를 수행했습니다.',
    ],
    possibleRoles:
      '반도체 제조 IT 백엔드 개발, 설비 인터페이스 표준화, 스마트팩토리 자동화 구축과 글로벌 생산 사이트 통합 역할을 맡을 수 있습니다.',
  },
  highlights: [
    {
      value: '8,000대+',
      label: '반도체 생산 설비 통신 표준 연동',
      href: '#project-secs-gem',
    },
    {
      value: '50%+',
      label: '신규 장비 통신 셋업 리드타임 단축',
      href: '#project-secs-gem',
    },
    {
      value: '100%',
      label: 'AMR 라인 자재 투입 프로세스 무인화',
      href: '#project-amr',
    },
  ],
  competencies: [
    {
      title: '제조 장비 인터페이스 표준화',
      evidence:
        'SECS-I/II·HSMS 기반 공통 데이터 분류와 설정형 매핑 프레임워크를 설계·개발해 신규 장비 셋업 기간을 기존 4~6주에서 1.5주로 단축했습니다.',
      href: '#project-secs-gem',
      linkLabel: 'SECS/GEM 사례 보기',
    },
    {
      title: '무인화·추적성 백엔드 설계',
      evidence:
        'AMR·ACS·MES·CIM 양방향 파이프라인과 Multi-Lot 검증 엔진을 구축해 자재 투입 무인화와 오투입 차단을 구현했습니다.',
      href: '#project-amr',
      linkLabel: 'AMR 사례 보기',
    },
    {
      title: '글로벌 제조 IT 통합',
      evidence:
        '베트남·일본 신규 생산 사이트의 네트워크·설비 제약을 분석하고 표준 FA 아키텍처와 통합 검증 시나리오를 설계했습니다.',
      href: '#project-global',
      linkLabel: '해외 FAB 사례 보기',
    },
    {
      title: '제조 데이터 기반 AX 검증',
      evidence:
        'Wire Bonding 센서 데이터 이상감지와 RAG·LLM Agent 기반 조치 매뉴얼 추천 아키텍처의 PoC를 수행했습니다.',
      href: '#project-ai',
      linkLabel: 'AI PoC 사례 보기',
    },
  ],
  career: [
    {
      company: '앰코테크놀로지코리아',
      team: 'Corp. IT/Automation Team',
      title: '대리 · 백엔드/서버개발',
      employmentType: '재직중',
      period: '2022.01 ~ 현재',
      scope:
        '스마트팩토리 자동화 시스템 개발·운영, 반도체 설비 네트워크 통신과 서버 운영, 생산 데이터 수집·모니터링·이력 관리 시스템 설계',
      keyResults: [
        '8,000대 이상의 반도체 생산 설비에 통신 표준을 연동하고 신규 장비 셋업 리드타임을 50% 이상 단축',
        'AMR 기반 라인의 자재 투입 프로세스를 100% 무인화하고 라인 생산성(UPH)을 약 30% 향상한 프로젝트 수행',
        '베트남·일본 생산 사이트에 글로벌 IT/OT 표준 프로세스를 적용하고 자동화 시스템 셋업·안정화 수행',
      ],
      responsibilities: [
        'MES·FDC·RMS·TMS와 장비 간 End-to-End 데이터 흐름 및 인터페이스 정합성 설계',
        'Java·Spring 기반 eCIM Host, API, Validation Rule Engine 개발과 분산 WAS 운영',
        '자동화 라인 도입을 위한 공정 개선 및 IT 인프라 아키텍처 기획',
        '현지 엔지니어, 설비 벤더, HW·OT 팀과 글로벌 통합 테스트 및 기술 지원',
        'PLC 연동 화학 탱크 모니터링으로 매일 수행하던 수동 점검 프로세스를 자동화',
      ],
    },
  ],
  projects: [
    {
      id: 'project-secs-gem',
      title: 'SECS/GEM 장비 인터페이스 표준화 프레임워크',
      problem:
        '장비 벤더별 Custom Protocol로 인해 신규 장비 도입마다 1:1 개발이 필요했고 셋업에 평균 4~6주가 소요됐습니다.',
      role:
        '공통 데이터 분류와 통신 가이드라인을 수립하고 Java Spring Boot 기반 설정형 매핑 프레임워크를 설계·개발했습니다.',
      actions: [
        'SECS-I/II·HSMS 기반 장비 이벤트와 데이터 포맷을 공통 Taxonomy로 분류',
        '코드 재배포 없이 UI 설정으로 공정·장비별 시나리오를 구성하는 구조 구현',
        'MES–Machine–DB 데이터 흐름을 재설계하고 인터페이스 정합성 자동 검증 적용',
      ],
      results: [
        '신규 장비 통신 셋업 리드타임 50% 이상 단축(기존 4~6주 → 1.5주)',
        '8,000대 이상의 반도체 생산 설비에 통신 표준 연동',
        '베트남·일본 신규 FAB에 동일 프레임워크 이식',
      ],
      technologies: [
        'Java 8/11',
        'Spring Boot',
        'SECS/GEM',
        'IBM DB2',
        'MSSQL',
        'REST API',
        'JBOSS WAS',
      ],
    },
    {
      id: 'project-amr',
      title: 'AMR 무인공정 및 Multi-Lot Traceability',
      problem:
        'ENIG 도금·후공정에서 자재 이동과 Multi-Lot 혼류 생산 중 오투입을 방지하면서 물류를 무인화해야 했습니다.',
      role:
        'AMR–ACS–MES–CIM 실시간 연동 파이프라인과 Recipe–Lot 교차 검증 엔진을 구축했습니다.',
      actions: [
        'Java·Quartz Scheduler 기반 실시간 Validation Engine 구현',
        'Basket·Strip 단위 RMS/TMS End-to-End 이동 이력 흐름 설계',
        'Wafer–Frame ID 중복 검증과 고객사별 투입 인터록 구현',
      ],
      results: [
        '자재 투입 프로세스 100% 무인화 및 수작업 오투입 Zero화',
        '프로젝트 결과로 라인 생산성(UPH) 약 30% 향상',
        '오투입에 따른 자재 리젝·폐기율 70% 이상 절감',
      ],
      technologies: [
        'Java 8',
        'Spring Boot',
        'Quartz Scheduler',
        'PostgreSQL',
        'REST API',
        'ACS',
        'PLC',
        'Linux',
      ],
    },
    {
      id: 'project-global',
      title: '해외 FAB 자동화 시스템 통합 구축',
      problem:
        '베트남·일본 신규 생산 거점의 국가·라인별 네트워크와 이기종 설비 제약을 통합해야 했습니다.',
      role:
        'IT PM 및 Lead Architect 역할로 초기 자동화 셋업부터 라인 안정화까지 수행했습니다.',
      actions: [
        'IP·VM과 설비 인터페이스 제약을 분석해 글로벌 표준 FA 아키텍처 정의',
        '현지 엔지니어, 설비 벤더, HW·OT 팀의 통합 Test Case와 Validation 시나리오 설계·리딩',
      ],
      results: [
        '프로젝트 결과로 해외 신공장 초기 라인 가동률 95% 이상 제고',
        '해외 FAB에 동일한 글로벌 IT/OT 표준 프로세스 적용',
      ],
      technologies: [
        'Java EE',
        'Spring',
        'SECS/GEM',
        'PLC Protocol',
        'Linux/VM',
        'IP/Network Infra',
      ],
    },
    {
      id: 'project-ai',
      title: 'FDC 미들웨어 및 제조 이상감지 AI Agentic System PoC',
      problem:
        'Wire Bonding 레거시 설비의 시계열 센서에서 이상 징후를 조기에 감지하고 조치 정보를 제공해야 했습니다.',
      role:
        'FDC 데이터 미들웨어를 설계하고 Python 기반 이상감지 및 RAG·LLM Agent 아키텍처 PoC를 수행했습니다.',
      actions: [
        'AMAT E3와 연동하는 챔버·설비 파라미터 매핑 미들웨어와 라우터 구조 설계',
        '진동·초음파·온도 데이터를 수집·전처리하고 이상감지 알고리즘 개발',
        '이상 원인 추론과 설비 조치 매뉴얼 추천을 위한 Agent 구조 검증',
      ],
      results: [
        '설비 이상 징후 사전 예지 검증 성공 및 사내 우수 과제 평가',
        '공정 엔지니어용 실시간 분석 리포팅 환경 구축',
      ],
      technologies: [
        'Python',
        'PyTorch',
        'Scikit-Learn',
        'FastAPI',
        'Vector DB',
        'LLM Agent',
        'AMAT E3',
        'SECS/GEM',
      ],
    },
    {
      id: 'project-rule-engine',
      title: '공정 간 8hr Rule 검증 및 Alert 시스템',
      problem:
        'SMT와 주요 후공정에서 공정 간 허용 시간 이탈로 발생하는 자재 불량을 사전에 막아야 했습니다.',
      role:
        'SECS/GEM 이벤트를 정규화하고 Quartz 기반 실시간 검증·사전 경보 아키텍처를 설계·구현했습니다.',
      actions: [
        '마이크로 레벨 시간 검증을 수행하는 Validation Rule Engine 구현',
        'EMS 모니터링 대시보드와 타임아웃 Pre-Alert·인터록 체계 수립',
      ],
      results: [
        '시간 초과에 따른 자재 불량 사전 차단',
        '프로젝트 결과로 폐기 비용 약 15% 절감',
        '전사 표준 Rule Engine으로 확대 적용',
      ],
      technologies: [
        'Java',
        'Spring Boot',
        'Quartz',
        'Oracle',
        'PostgreSQL',
        'EMS',
        'SECS/GEM',
      ],
    },
  ],
  technologies: [
    {
      category: '백엔드 · API',
      description: 'eCIM Host, 제조 인터페이스와 검증 엔진 개발에 활용',
      items: [
        'Java 8/11',
        'Spring Boot',
        'Servlet',
        'JBOSS WAS',
        'RESTful API',
        'FastAPI',
        'Quartz Scheduler',
      ],
      href: '#project-secs-gem',
    },
    {
      category: '제조 시스템 · 프로토콜',
      description: '반도체 설비와 생산 시스템 간 데이터 연동에 활용',
      items: [
        'SECS-I/II',
        'HSMS',
        'PLC Communication',
        'TCP/IP',
        'eCIM Host',
        'MES',
        'FDC',
        'RMS',
        'TMS',
        'AMR/ACS',
      ],
      href: '#project-amr',
    },
    {
      category: '데이터베이스',
      description: '제조 트랜잭션 데이터 설계·연동과 정합성 검증에 활용',
      items: ['Oracle', 'PostgreSQL', 'IBM DB2', 'MSSQL', 'SQL Tuning'],
      href: '#project-rule-engine',
    },
    {
      category: 'AI · 데이터 분석',
      description: '시계열 센서 이상감지와 Agentic AI PoC에 활용',
      items: [
        'Python',
        'PyTorch',
        'Scikit-Learn',
        'Vector DB',
        'RAG',
        'LLM Agent',
      ],
      href: '#project-ai',
    },
    {
      category: '인프라 · 협업',
      description: '분산 서버 운영과 글로벌 프로젝트 협업에 활용',
      items: ['Linux/VM', 'Docker', 'Git', 'SVN', 'Jira', 'Confluence'],
      href: '#project-global',
    },
  ],
  education: [
    {
      school: '세종사이버대학교',
      major: '컴퓨터AI공학과',
      period: '2023.03 ~ 2025.02',
      status: '편입 · 졸업',
      detail: '학점 4.0 / 4.5',
    },
    {
      school: '조선대학교',
      major: '경영학부',
      period: '2015.03 ~ 2021.02',
      detail: '학점 3.72 / 4.5',
    },
  ],
  certifications: [
    {
      name: 'TOEIC Speaking Test',
      date: '2026.08',
      issuer: '영어',
      detail: '140점 · Intermediate High · PASS',
    },
    {
      name: '데이터분석준전문가(ADsP)',
      date: '2026.06',
      issuer: '한국데이터베이스진흥원',
    },
    {
      name: 'CSTS Foundation Level',
      date: '2024.12',
      issuer: '한국정보통신기술협회',
    },
    {
      name: 'SQL개발자(SQLD)',
      date: '2021.10',
      issuer: '한국데이터베이스진흥센터',
    },
    {
      name: '정보처리기사',
      date: '2021.09',
      issuer: '한국산업인력공단',
    },
    {
      name: '사회조사분석사 2급',
      date: '2021.06',
      issuer: '한국산업인력공단',
    },
  ],
  training: [
    {
      name: 'AWS Academy Cloud Foundations',
      period: '2024.06',
      detail: 'AWS 클라우드 기초 교육과정 이수',
    },
    {
      name: '한국기술교육대학교 반도체장비통신기술과정',
      period: '2022.11',
      detail: 'SECS/GEM Protocol 전문 교육과정 이수',
    },
    {
      name: 'SSAFY(삼성 청년 SW 아카데미)',
      period: '2021.01 ~ 2021.10',
      detail: 'Vue·React·Unity, SW 알고리즘 및 웹 서비스 개발 교육',
    },
    {
      name: '스마트인재개발원 빅데이터 기반 융합 SW개발자 과정',
      period: '2020.06 ~ 2020.11',
      detail: 'DB 설계, 머신러닝 기반 빅데이터 분석 및 웹 서비스 개발',
    },
    {
      name: '스마트인재개발원 SNS 기반 빅데이터 분석 입문과정',
      period: '2018.12 ~ 2019.01',
      detail: '비정형 데이터 분석 및 HTML 기반 웹 개발',
    },
  ],
  contact: {
    email: 'toproot7913@gmail.com',
  },
}
