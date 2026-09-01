export const portfolioData = {
  profile: {
    name: "박성준",
    role: "Frontend & Fullstack Developer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    statusBadge: "🚀 새로운 도전을 준비 중입니다",
    email: "developer@example.com",
    github: "https://github.com",
    blog: "https://velog.io",
    linkedin: "https://linkedin.com",
    resumeUrl: "#", // 이력서 다운로드 링크
  },

  about: {
    badge: "About Me",
    headline: "사용자 중심의 가치를 코드로 구현하는 개발자입니다.",
    description: `기술의 발전 속에서 본질인 '사용자 경험'과 '안정적인 시스템'을 고민합니다.
React, TypeScript, Next.js 기반의 직관적이고 반응이 빠른 인터페이스를 제작하며,
팀원들과의 원활한 소통과 코드 리뷰를 통한 동반 성장을 중요하게 생각합니다.`,
    highlights: [
      { label: "문제 해결 지향", desc: "복잡한 요구사항을 분석하여 재사용성 높은 모듈로 구조화" },
      { label: "웹 성능 최적화", desc: "Lighthouse 점수 개선 및 렌더링 최적화 경험" },
      { label: "협업과 커뮤니케이션", desc: "기획·디자인과의 유연한 소통 및 애자일 스프린트 리드" },
    ],
    skills: [
      "JavaScript (ES6+)", "TypeScript", "React", "Next.js",
      "Tailwind CSS", "Node.js", "Express", "REST API",
      "Git / GitHub", "Docker", "Figma"
    ]
  },

  // 상단 네비게이션 및 각 섹션 매핑 정보
  quickNavItems: [
    { id: "project-1", label: "프로젝트 1", category: "Project", desc: "AI 기반 스마트 대시보드" },
    { id: "project-2", label: "프로젝트 2", category: "Project", desc: "실시간 협업 웹 에디터" },
    { id: "career", label: "경력", category: "Career", desc: "실무 및 프로젝트 이력" },
    { id: "certifications", label: "자격증", category: "Certificates", desc: "공인 기술 및 어학 자격" },
    { id: "education", label: "활동 및 교육", category: "Activities", desc: "부트캠프, 해커톤 및 교육" },
  ],

  projects: [
    {
      id: "project-1",
      number: "01",
      badge: "대표 프로젝트",
      title: "AI 기반 데이터 시각화 & 인사이트 대시보드",
      subtitle: "실시간 대용량 메트릭 모니터링 및 AI 자동 요약 리포트 플랫폼",
      period: "2024.03 - 2024.08 (5개월)",
      role: "프론트엔드 리드 (기여도 70%)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
      description: "다양한 데이터 소스로부터 유입되는 일일 10만 건 이상의 메트릭을 실시간 차트로 시각화하고, LLM을 결합해 주간 이상치 분석 리포트를 1초 만에 자동 생성하는 서비스입니다.",
      keyFeatures: [
        "Canvas 기반 대용량 시계열 차트 렌더링으로 60fps 유지",
        "WebSocket을 활용한 실시간 알림 및 지표 스트리밍 파이프라인 구축",
        "React Query 기반 캐싱 전략으로 중복 API 호출 45% 절감",
        "반응형 대시보드 그리드 커스텀 위젯 드래그 앤 드롭 구현"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts", "Zustand", "FastAPI"],
      links: {
        demo: "https://example.com/demo1",
        github: "https://github.com/example/project-1",
      }
    },
    {
      id: "project-2",
      number: "02",
      badge: "팀 협업 프로젝트",
      title: "동시 접속 웹 기반 마크다운 문서 협업 도구",
      subtitle: "CRDT 알고리즘을 적용한 초저지연 실시간 협업 에디터",
      period: "2023.09 - 2023.12 (4개월)",
      role: "풀스택 개발 및 알고리즘 구현 (기여도 50%)",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      description: "여러 사용자가 동시에 문서를 작성하고 충돌 없이 실시간으로 동기화할 수 있는 마크다운 기반의 협업 지식 저장소 서비스입니다.",
      keyFeatures: [
        "Yjs(CRDT)와 WebRTC/WebSocket을 결합한 분산 동시 편집 아키텍처",
        "실시간 사용자 커서 위치 및 텍스트 선택 하이라이트 동기화",
        "오프라인 편집 후 재연결 시 충돌 없는 자동 머지 메커니즘 개발",
        "Markdown 실시간 프리뷰 및 PDF/HTML 내보내기 지원"
      ],
      techStack: ["React", "Next.js", "Node.js", "WebSocket", "Yjs", "Tailwind CSS", "PostgreSQL"],
      links: {
        demo: "https://example.com/demo2",
        github: "https://github.com/example/project-2",
      }
    }
  ],

  careers: [
    {
      period: "2023.01 - 현재",
      company: "(주)테크솔루션스",
      role: "프론트엔드 엔지니어 / 사원",
      type: "정규직",
      description: "B2B SaaS 솔루션의 프론트엔드 신규 기능 개발 및 디자인 시스템 구축 주도",
      achievements: [
        "사내 디자인 시스템 컴포넌트 30종 개발 및 문서화로 신규 페이지 개발 공수 35% 단축",
        "Webpack에서 Vite로 번들러 마이그레이션 진행하여 로컬 빌드 속도 7배 향상",
        "주요 사용자 흐름(결제/대시보드) E2E 테스트 도입 (Playwright) 및 커버리지 80% 달성"
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"]
    },
    {
      period: "2022.04 - 2022.12",
      company: "스타트업 넥스트랩",
      role: "웹 프론트엔드 인턴",
      type: "인턴십",
      description: "반응형 랜딩 페이지 제작 및 고객 어드민 관리자 페이지 개발",
      achievements: [
        "모바일 최적화 및 웹 접근성(A11y) 기준 준수로 Lighthouse 접근성 점수 98점 획득",
        "반응형 레이아웃 리팩토링으로 모바일 사용자 이탈률 18% 감소 기여"
      ],
      skills: ["JavaScript", "HTML5/CSS3", "React", "REST API"]
    }
  ],

  certifications: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2023.06",
      status: "취득",
      badgeColor: "sky"
    },
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2023.09",
      status: "취득",
      badgeColor: "emerald"
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      issuer: "Amazon Web Services",
      date: "2024.02",
      status: "취득",
      badgeColor: "amber"
    },
    {
      name: "TOEIC Speaking AL (170점)",
      issuer: "ETS",
      date: "2023.11",
      status: "취득",
      badgeColor: "indigo"
    }
  ],

  education: [
    {
      period: "2023.06 - 2023.12",
      title: "풀스택 웹 서비스 개발 부트캠프 수료",
      organization: "멋쟁이사자처럼 / K-Digital Training",
      details: "800시간 집중 코스. React, Node.js 기반 실무 프로젝트 3회 진행 및 최우수 프로젝트상 수상"
    },
    {
      period: "2023.08",
      title: "제2회 대학생 오픈소스 SW 해커톤 장려상",
      organization: "오픈소스소프트웨어재단",
      details: "공공 데이터를 활용한 교통 약자 지원 웹서비스 48시간 내 개발"
    },
    {
      period: "2018.03 - 2023.02",
      title: "컴퓨터공학과 학사 졸업",
      organization: "한국대학교",
      details: "자료구조, 알고리즘, 컴퓨터구조, 데이터베이스, 네트워크 등 CS 기초 전공 이수 (학점 3.8 / 4.5)"
    }
  ]
};
