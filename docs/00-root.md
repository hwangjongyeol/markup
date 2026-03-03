# docs root

meta:
  project: markup
  doc_type: static_site_governance
  last_updated: 2026-03-03
  owner: frontend 운영/퍼블리싱 협업 체계

purpose:
  - 마크업, 스타일, 스크립트, 에셋 기준을 통해 IT 기업형 페이지 품질을 유지한다.
  - 규칙은 구현 전후 모두 동일하게 적용한다.

scope:
  - 페이지 구조: header, hero, section, footer, menu, partner, timenet, footer page
  - 자산 구조: assets/css, assets/js, assets/sass, images, assets/mov
  - 스타일 토폴로지: Sass → CSS 컴파일 산출물 동기화
  - 탭 아이콘 및 브라우저 파비콘: 브라우저 요청에 대응되는 실제 파일 존재를 기본값으로 관리

governance:
  - 0. 작업 전: 영향 파일(HTML/CSS/JS/이미지/동영상)과 변경 의도를 checklist에 기록
  - 1. 작업 중: docs/work-rules.md 하드 룰 위반 의심 시 즉시 중단 후 이유 기록
  - 2. 작업 후: 변경 파일과 연관된 docs/<category>/index.md를 동기화
  - 3. 배포 전: 반응형/접근성/성능 체크를 완료 체크리스트에 기록
  - 4. 공통 자산(아이콘/파비콘) 변경 시, 기본 경로와 대체 경로를 모두 확인해 404를 제거

primary_rules:
  - 우선순위: Hard Rule > design/publishing/development 룰 > 코드 스타일 제약 > 임시 처리
  - docs/01-design, docs/02-publishing, docs/03-development는 카테고리별 운영 규칙 저장소다.
  - docs/99-progress/checklist.md는 완료 기준(최종 승인) 문서다.

project_structure:
  source:
    - HTML: index*.html, partner*.html, menu.html, footer.html, timenet.html
    - CSS: assets/css/main.css, assets/css/noscript.css, assets/css/styles.css, assets/css/brand.css
    - JS: assets/js/main.js, assets/js/includes.js, assets/js/form-submission-handler.js
    - Sass: assets/sass/main.scss, assets/sass/noscript.scss, components/layout/libs 패턴 파일들
    - Media: images/*, assets/mov/*

reference_files:
  - docs/index.md
  - docs/work-rules.md
  - docs/01-design/index.md
  - docs/02-publishing/index.md
  - docs/03-development/index.md
