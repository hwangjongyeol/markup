# Work Rules (Design + Publishing + Development)

meta:
  doc_type: site_rules
  version: 1.0
  last_updated: 2026-03-03
  owner: IT 마크업 작업 규칙 위원회

hard_rules:
  - id: RULE-1
    title: 브랜드 아이덴티티 동기화 금지
    detail: 색상, 로고, 주요 타이포 설정을 임의로 변경하지 않는다.
    action: 변경 시 01-design/index.md 기준값을 먼저 갱신한다.
  - id: RULE-2
    title: 시맨틱 마크업 준수
    detail: header/main/section/article/footer/nav 구조를 기본으로 유지하고 역할이 분명한 태그를 사용한다.
    action: 장식 목적 div 남발 금지, 리스트/테이블/폼은 올바른 요소 사용
  - id: RULE-3
    title: 반응형 일관성
    detail: 모바일(390), 태블릿(768), 데스크탑(1024/1360) 동작을 동시에 유지한다.
    action: 레이아웃 붕괴 및 오버플로우를 방치하지 않는다.
  - id: RULE-4
    title: 접근성 기본 점검
    detail: alt, label, 포커스 이동, 버튼/링크 문구의 의미성을 확인한다.
    action: 핵심 콘텐츠는 키보드와 스크린리더 기준에서 접근 가능해야 한다.
  - id: RULE-5
    title: 퍼블리싱 자산 규칙
    detail: CSS는 Sass 소스 기준으로 관리하고 빌드 산출물과 동기화한다.
    action: assets/sass 변경 시 관련 css 파일을 함께 갱신한다.
  - id: RULE-6
    title: 불필요한 JS 의존 억제
    detail: 기존 동작과 무관한 플러그인 추가를 제한한다.
    action: 기존 로직 내 jQuery/유틸 스크립트는 재사용하고, 새 기능은 단순한 vanilla JS 우선.
  - id: RULE-7
    title: 이미지/미디어 효율성
    detail: 이미지는 용도별 크기별 포맷으로 관리하고 중복 에셋을 줄인다.
    action: 큰 미디어 파일은 필요 시 대체안과 지연 로딩을 검토한다.
  - id: RULE-8
    title: 규칙 문서 동기화
    detail: 작업이 끝나면 변경 범위와 근거를 docs/01~03 영역에 반영한다.
  - id: RULE-9
    title: 파비콘 404 방지
    detail: 브라우저 파비콘 요청(기본/명시 경로)을 충족시키기 위해 실제 파일 또는 링크를 제공한다.
    action: 신규 페이지에 `<link rel="icon">`와 실제 아이콘 파일을 함께 적용한다.

validation_rules:
  pre_check:
    - docs/work-rules.md 규칙 1~8 충족 여부 확인
    - 대상 파일 경로/영향범위 문서화
    - 신규 클래스명·컴포넌트명 명명 규칙 확인
  post_check:
    - desktop(1440), mobile(390), tablet(768) 렌더 확인
    - 콘솔 에러 0개 확인
    - 주요 폼/버튼 동작 수동 확인
    - 폰트, 색 대비, 인터랙션 포커스 상태 확인
    - 변경 파일과 docs/index.md 참조의 매핑 일치 확인
    - favicon 404 및 링크 경로 동작 확인
  stop_condition:
    - 규칙 위반, 접근성 실패, 레이아웃 붕괴 시 즉시 보류

documentation_rules:
  - docs/index.md: 전체 진입점
  - docs/00-root.md: 작업 우선순위/거버넌스
  - docs/01-design/index.md: 디자인 토큰, 컴포넌트 톤앤매너
  - docs/02-publishing/index.md: 마크업/반응형/퍼블리싱 기준
  - docs/03-development/index.md: 코드 작성/빌드/유지보수 기준
  - docs/99-progress/checklist.md: 완료 승인 포맷

references:
  - docs/00-root.md
  - docs/01-design/index.md
  - docs/02-publishing/index.md
  - docs/03-development/index.md
  - assets/sass/main.scss
  - assets/js/main.js
