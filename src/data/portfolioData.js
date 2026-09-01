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
    resumeUrl: "#",
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
      },
      detailSpec: {
        background: "데이터 파편화로 인해 비즈니스 운영진이 매일 2시간 이상 수작업으로 지표를 취합하고 보고서를 작성하는 비효율을 해결하고자, 실시간 데이터 시각화와 AI 기반 자동 인사이트 리포팅 시스템을 직접 기획하고 개발했습니다.",
        targetUsers: "스타트업 C-Level 임원진, 데이터 분석가, 비즈니스 운영 매니저",
        requirements: [
          {
            id: "REQ-01",
            category: "시각화",
            name: "실시간 시계열 메트릭 스트리밍 차트",
            description: "초당 최대 50회의 지표 갱신 시에도 화면 버벅임 없이 부드러운 60fps 인터랙션을 유지해야 함",
            priority: "High",
            status: "완료"
          },
          {
            id: "REQ-02",
            category: "AI 기능",
            name: "원클릭 LLM 기반 인사이트 보고서 생성",
            description: "선택한 기간 내 이상치(Anomaly)를 감지하고 3줄 핵심 요약 및 원인 분석 텍스트를 마크다운으로 자동 렌더링",
            priority: "High",
            status: "완료"
          },
          {
            id: "REQ-03",
            category: "대시보드",
            name: "드래그 앤 드롭 위젯 레이아웃 커스텀",
            description: "사용자가 원하는 차트 위젯을 그리드 상에서 자유롭게 재배치 및 크기 조절하고 로컬/클라우드 저장",
            priority: "Medium",
            status: "완료"
          },
          {
            id: "REQ-04",
            category: "알림 & 인증",
            name: "임계치 초과 시 실시간 웹 푸시 알림",
            description: "CPU/메모리/오류율 지표가 설정한 임계치를 넘으면 브라우저 토스트 및 WebSocket 알림 발송",
            priority: "Medium",
            status: "완료"
          }
        ],
        diagram: {
          title: "실시간 데이터 스트리밍 & AI 분석 아키텍처",
          steps: [
            {
              step: "01",
              title: "데이터 수집기 (Agent / Sensor)",
              desc: "서버 메트릭 및 로그 데이터를 1초 간격으로 경량 패킷 수집",
              tech: "FluentBit / Go"
            },
            {
              step: "02",
              title: "메시지 브로커 & API 게이트웨이",
              desc: "대량 유입 트래픽을 버퍼링하고 인증 토큰 검증 후 분기 처리",
              tech: "Kafka / FastAPI"
            },
            {
              step: "03",
              title: "시계열 DB & AI Anomaly 탐지",
              desc: "시계열 데이터 적재 및 통계 기반 이상 징후 자동 탐지 알고리즘 실행",
              tech: "TimescaleDB / Python"
            },
            {
              step: "04",
              title: "웹소켓 실시간 브로드캐스트",
              desc: "변화된 지표 델타값을 클라이언트로 압축 전송",
              tech: "WebSocket / Socket.io"
            },
            {
              step: "05",
              title: "프론트엔드 반응형 대시보드",
              desc: "Canvas 가상화 렌더링 및 드래그 앤 드롭 레이아웃 표시",
              tech: "React / Zustand / Tailwind"
            }
          ]
        },
        erd: {
          title: "데이터베이스 핵심 엔티티 관계도 (ERD)",
          description: "사용자, 조직, 대시보드 위젯, 수집된 메트릭 로그, 그리고 AI 생성 리포트 간의 관계를 설계했습니다.",
          tables: [
            {
              name: "users",
              desc: "대시보드 사용자 계정",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "사용자 고유 식별자" },
                { name: "email", type: "VARCHAR(255)", key: "", desc: "로그인 이메일 (Unique)" },
                { name: "role", type: "ENUM", key: "", desc: "ADMIN | ANALYST | VIEWER" },
                { name: "created_at", type: "TIMESTAMP", key: "", desc: "계정 생성 일시" }
              ]
            },
            {
              name: "dashboards",
              desc: "커스텀 대시보드 보드 정보",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "대시보드 식별자" },
                { name: "user_id", type: "UUID", key: "FK", desc: "소유자 외래키 (users.id)" },
                { name: "title", type: "VARCHAR(100)", key: "", desc: "대시보드 이름" },
                { name: "layout_json", type: "JSONB", key: "", desc: "위젯 x, y, w, h 좌표 정보" }
              ]
            },
            {
              name: "widgets",
              desc: "개별 차트/지표 위젯 구성",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "위젯 식별자" },
                { name: "dashboard_id", type: "UUID", key: "FK", desc: "소속 대시보드 (dashboards.id)" },
                { name: "widget_type", type: "VARCHAR(50)", key: "", desc: "LINE_CHART | BAR | METRIC" },
                { name: "metric_target", type: "VARCHAR(100)", key: "", desc: "모니터링 대상 지표명" }
              ]
            },
            {
              name: "ai_reports",
              desc: "LLM이 분석한 인사이트 리포트",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "리포트 식별자" },
                { name: "dashboard_id", type: "UUID", key: "FK", desc: "대상 대시보드 (dashboards.id)" },
                { name: "summary_markdown", type: "TEXT", key: "", desc: "AI 생성 요약 및 권고사항" },
                { name: "anomaly_score", type: "FLOAT", key: "", desc: "이상치 심각도 점수" }
              ]
            }
          ],
          relations: [
            "users (1) ──── (N) dashboards : 사용자는 여러 개의 대시보드를 소유",
            "dashboards (1) ──── (N) widgets : 대시보드는 여러 위젯을 배치",
            "dashboards (1) ──── (N) ai_reports : 대시보드 단위로 주기적 AI 리포트 생성"
          ]
        },
        troubleshooting: [
          {
            title: "초당 수십 회의 데이터 유입 시 브라우저 메인 스레드 병목 및 프레임 드랍",
            problem: "SVG 기반 차트 렌더링 시 DOM 노드가 3,000개를 넘어가면서 브라우저가 버벅거리고 메모리 누수 발생",
            cause: "React 상태 변경마다 대량의 SVG 패스를 전체 리렌더링하여 Reflow/Repaint가 빈번하게 발생함",
            solution: "1) SVG에서 HTML5 Canvas 기반의 고성능 렌더링 파이프라인으로 전환, 2) RequestAnimationFrame과 버퍼 큐를 적용하여 16ms(60fps) 단위로 변경사항 일괄 렌더링(Throttling)",
            outcome: "FPS 18fps ➔ 60fps로 대폭 향상, 렌더링 CPU 사용률 65% 감소 달성"
          },
          {
            title: "다중 위젯 동시 요청에 따른 중복 API 호출 및 네트워크 부하",
            problem: "페이지 로딩 시 10개 이상의 위젯이 동일한 원본 메트릭 API를 각각 중복 호출하는 문제",
            cause: "컴포넌트 단위로 독립적인 fetch가 실행되어 캐시가 공유되지 않음",
            solution: "React Query의 staleTime 및 queryKey 정규화를 통해 동일 쿼리 단일 요청으로 통합하고 클라이언트 메모리 캐싱 적용",
            outcome: "초기 페이지 진입 시 네트워크 호출 45% 절감 및 데이터 로딩 속도 0.8초 단축"
          }
        ]
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
      },
      detailSpec: {
        background: "원격 근무 환경에서 팀원들이 기술 문서와 회의록을 실시간으로 함께 작성할 때 겪는 버전 충돌 및 동기화 지연 문제를 해결하기 위해, Google Docs 수준의 실시간 동시 편집 기능을 오픈소스 기반으로 설계했습니다.",
        targetUsers: "원격 개발팀, 기술 문서 작성자, 프로젝트 스크럼 팀",
        requirements: [
          {
            id: "REQ-01",
            category: "협업 코어",
            name: "동시 텍스트 입력 무충돌 병합 (CRDT)",
            description: "다수의 참여자가 동일한 줄을 동시에 수정해도 글자 순서 뒤엉킴 없이 일관된 최종 상태로 수렴",
            priority: "High",
            status: "완료"
          },
          {
            id: "REQ-02",
            category: "실시간 UI",
            name: "참여자별 컬러 커서 및 텍스트 선택 표시",
            description: "다른 접속자의 마우스 커서 위치 및 드래그 선택 영역을 사용자별 고유 컬러와 닉네임 라벨로 실시간 렌더링",
            priority: "High",
            status: "완료"
          },
          {
            id: "REQ-03",
            category: "오프라인 모드",
            name: "네트워크 단절 시 로컬 편집 및 자동 동기화",
            description: "인터넷이 끊겨도 IndexedDB에 로컬 상태를 보존하고, 재연결 시 변경분을 서버와 충돌 없이 자동 결합",
            priority: "Medium",
            status: "완료"
          },
          {
            id: "REQ-04",
            category: "문서 관리",
            name: "마크다운 실시간 프리뷰 및 버전 히스토리",
            description: "좌측 에디터 입력 시 우측 실시간 렌더링, 특정 시점의 문서 스냅샷 복원 기능 제공",
            priority: "Medium",
            status: "완료"
          }
        ],
        diagram: {
          title: "CRDT 분산 동시 편집 & 상태 동기화 파이프라인",
          steps: [
            {
              step: "01",
              title: "사용자 키 입력 이벤트 캡처",
              desc: "CodeMirror 에디터에서 발생한 Delta 변경 사항을 로컬 Yjs Doc에 적용",
              tech: "Yjs / CodeMirror"
            },
            {
              step: "02",
              title: "바이너리 업데이트 인코딩",
              desc: "문서 변경분을 초경량 바이너리(Uint8Array) 포맷으로 직렬화",
              tech: "lib0 / Binary Protocol"
            },
            {
              step: "03",
              title: "WebRTC / WebSocket 릴레이 서버",
              desc: "P2P 메시지 전달 및 중앙 WebSocket 서버를 통한 세션 룸 브로드캐스팅",
              tech: "Node.js / ws"
            },
            {
              step: "04",
              title: "분산 충돌 해결 알고리즘 (CRDT)",
              desc: "중앙 락 없이 각 클라이언트에서 상태 벡터를 비교하여 결정론적으로 병합",
              tech: "CRDT (Y.Doc)"
            },
            {
              step: "05",
              title: "영속화 스토리지 비동기 저장",
              desc: "주기적으로 통합된 문서 스냅샷을 PostgreSQL 데이터베이스에 저장",
              tech: "PostgreSQL / Prisma"
            }
          ]
        },
        erd: {
          title: "데이터베이스 핵심 엔티티 관계도 (ERD)",
          description: "문서, 워크스페이스, 접속 세션 및 버전 기록을 관리하기 위한 관계형 DB 모델링입니다.",
          tables: [
            {
              name: "workspaces",
              desc: "팀별 작업 공간",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "워크스페이스 고유 식별자" },
                { name: "name", type: "VARCHAR(100)", key: "", desc: "워크스페이스 이름" },
                { name: "owner_id", type: "UUID", key: "FK", desc: "소유자 외래키" }
              ]
            },
            {
              name: "documents",
              desc: "개별 마크다운 문서",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "문서 식별자" },
                { name: "workspace_id", type: "UUID", key: "FK", desc: "소속 워크스페이스 (workspaces.id)" },
                { name: "title", type: "VARCHAR(200)", key: "", desc: "문서 제목" },
                { name: "content_binary", type: "BYTEA", key: "", desc: "Yjs CRDT 바이너리 상태값" },
                { name: "content_text", type: "TEXT", key: "", desc: "검색용 평문 텍스트" }
              ]
            },
            {
              name: "document_snapshots",
              desc: "버전 복원용 스냅샷 히스토리",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "스냅샷 식별자" },
                { name: "document_id", type: "UUID", key: "FK", desc: "대상 문서 (documents.id)" },
                { name: "version_number", type: "INT", key: "", desc: "순차적 버전 번호" },
                { name: "snapshot_binary", type: "BYTEA", key: "", desc: "해당 시점 상태 스냅샷" },
                { name: "created_at", type: "TIMESTAMP", key: "", desc: "저장 일시" }
              ]
            },
            {
              name: "active_sessions",
              desc: "현재 접속 중인 사용자 상태",
              columns: [
                { name: "id", type: "UUID", key: "PK", desc: "세션 식별자" },
                { name: "document_id", type: "UUID", key: "FK", desc: "참여 중인 문서 (documents.id)" },
                { name: "user_name", type: "VARCHAR(50)", key: "", desc: "표시될 닉네임" },
                { name: "color_hex", type: "VARCHAR(7)", key: "", desc: "커서 고유 색상 (#38bdf8 등)" }
              ]
            }
          ],
          relations: [
            "workspaces (1) ──── (N) documents : 워크스페이스는 다수의 문서를 관리",
            "documents (1) ──── (N) document_snapshots : 문서는 여러 시점의 버전 히스토리를 가짐",
            "documents (1) ──── (N) active_sessions : 문서마다 실시간 참여자 세션이 매핑됨"
          ]
        },
        troubleshooting: [
          {
            title: "재접속 시 과거 데이터 덮어쓰기로 인한 데이터 유실 위기",
            problem: "오프라인 상태에서 작성 후 다시 와이파이에 연결될 때 최신 서버 버전과 로컬 버전이 덮어쓰여지는 증상 발생",
            cause: "단순 타임스탬프 기반 Last-Write-Wins 방식을 채택했기 때문",
            solution: "Yjs의 State Vector 교환 프로토콜을 도입하여 양쪽의 누락된 Delta 바이너리 조각만 상호 교환하여 수학적으로 무충돌 병합되도록 전면 재설계",
            outcome: "동시 수정 시 0%의 데이터 손실률 달성 및 네트워크 복구 시 100ms 이내 자동 합체 확인"
          },
          {
            title: "동시 접속자 증가 시 커서 좌표 이벤트로 인한 소켓 패킷 폭증",
            problem: "사용자가 타이핑하거나 마우스를 움직일 때마다 매 밀리초 단위로 커서 패킷이 전송되어 서버 CPU 점유율 급증",
            cause: "이벤트 Throttling 부재",
            solution: "마우스 커서 동기화 주기를 50ms로 Debounce 처리하고, 변경되지 않은 좌표는 전송에서 제외하는差分 필터링 적용",
            outcome: "초당 소켓 전송 패킷량 72% 감소 및 서버 리소스 안정화"
          }
        ]
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
