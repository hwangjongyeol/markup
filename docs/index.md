# docs entrypoint (IT 기업형 마크업 사이트)

meta:
  project: markup
  source: /Users/hwangjong-yeol/IdeaProjects/test/markup
  type: static website (HTML/CSS/JS)
  doc_purpose: 디자인 / 퍼블리싱 / 개발 룰 통합 기준
  parser_hint: docs/index.md를 우선 읽고 00-root.md로 이동

codex_entrypoint:
  - docs/index.md: 프로젝트 문서 트리 확인
  - 00-root.md: 작업 거버넌스 및 우선순위 확인
  - work-rules.md: 강제 규칙 확인
  - 01~03 문서: 영역별 세부 룰 확인
  - 충돌 시: 99-progress/checklist.md 기준으로 재평가

entry:
  root: 00-root.md
  work_rules: work-rules.md
  design_rules: 01-design/index.md
  publishing_rules: 02-publishing/index.md
  development_rules: 03-development/index.md
  checklist: 99-progress/checklist.md

project_files:
  pages:
    - index.html
    - index2.html
    - index3.html
    - index4.html
    - index5.html
    - index6.html
    - index_bk.html
    - index_bk2.html
    - partner.html
    - partner_sample.html
    - menu.html
    - footer.html
    - timenet.html
  style_sources:
    - assets/sass/main.scss
    - assets/sass/noscript.scss
    - assets/css/main.css
    - assets/css/noscript.css
    - assets/css/styles.css
    - assets/css/brand.css
  scripts:
    - assets/js/main.js
    - assets/js/includes.js
    - assets/js/form-submission-handler.js
  media:
    - images/*
    - assets/mov/*
    - images/timenet-favicon.svg

scope:
  - 웹 페이지 마크업과 레이아웃 품질 관리
  - 스타일/컴포넌트 일관성 유지
  - JS 동작, 성능, 접근성, 반응형 기준 준수
  - 문서와 실제 코드 동기화

recent_updates:
  - date: 2026-03-03
    scope: favicon 및 가이드 룰 정합성 반영
    actions:
      - 브라우저 탭 아이콘 링크를 `images/timenet-favicon.svg`로 고정
      - index.html / partner.html에 `skip-link`, TIMENET 중복 텍스트, 카드 3열 규칙 유지
      - 50-sample 이미지 게이트/네이밍 상태를 docs/50-sample/image-guide.md에 반영한 기준으로 운영 기준 정리

non_goals:
  - 백엔드/배치 운영 규칙
  - 서버 API 계약 관리
  - 외부 프레임워크 도입 규칙 (현재 구조는 정적 마크업 중심)

navigation:
  - 01-design/index.md (컬러, 타이포, 컴포넌트, 모션)
  - 02-publishing/index.md (시맨틱 구조, 반응형, 접근성)
  - 03-development/index.md (코드 작성/빌드/유지보수)
  - 99-progress/checklist.md (작업 완료 점검)

sync_rule:
  - docs는 작업 판단의 단일 기준이다.
  - 코드 변경 시 docs 항목과 실제 수정 대상 파일은 항상 1:1로 매핑되어야 한다.
  - 사람용 검토가 필요한 산출물은 별도 커뮤니케이션으로 분리한다.
