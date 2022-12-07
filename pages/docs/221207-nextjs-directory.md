---
title: NextJS 프로젝트 디렉토리 구성 사례
date: '2022-12-07'
desc: Atomic 디자인패턴을 참고한 디렉토리 구성 사례
tags: Nextjs
---

## 디렉토리 구성
```
project_root/ 
├── docs/
├── public/
├── src/
│   ├── api/
│   ├── components/
│   │   ├── atoms/
│   │   ├── blocks/
│   │   └── templates/
│   ├── foundations/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── stores/
│   ├── styles/
│   └── utils/
└── types/
```

### `docs/`
- 문서 파일
- 가이드라인, OpenAPI 정의 등

### `public/`
- 정적 파일

### `src/api`
- 외부 API 클라이언트
- 자동생성된 API Wrapper 등

### `src/components`
- UI 컴포넌트
- Atomic Design 참고
- 총 다섯 단계 분류를 세 단계로 간략화
	- `atoms` : 최소 UI 컴포넌트 단위 (1 컴포넌트 1 역할)
	- `blocks`: `atoms`를 조합한 UI 컴포넌트
	- `templates` : 각 화면 UI

### `src/foundations`
-  UI에 직접 영향을 주지 않는 기능 컴포넌트

### `src/hooks`
- react hooks 관련 기능
- 특정 context에 의존하지 않도록 한다

### `src/lib`
- 로직 모듈 파일
- `lib` 파일 간 의존 가능

### `src/pages`
- Nextjs에서 라우팅되는 페이지 컴포넌트

### `src/stores`
- 글로벌 상태관리 hooks

### `src/styles`
- 글로벌 스타일 파일 등
- 테마 및 기본 스타일 요소 정의

### `src/utils`
- 기능 로직 파일

### `types/`
- 사용자 정의 type정보 (Typescript 사용시)

