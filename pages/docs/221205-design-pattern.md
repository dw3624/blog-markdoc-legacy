---
title: FE 디자인 패턴
date: '2022-12-05'
desc: MV*, Flux 등 프론트엔드 디자인 패턴 소개
tags: frontend
---

## MVC (Model-View-Controller)
사용자는 View를 통해 명령을 입력합니다. Controller가 Input을 처리해 Model에 전달합니다. Model은 명령에 따라 View를 업데이트합니다.

- Model: 데이터와 로직 관리
- View: 레이아웃과 화면 처리
- Controller: Model과 View에 명령 라우팅 (Model과 View 중개)

### 장점
- 동시다발적 개발 가능
- 높은 응집도
- 개발용이성 (책임 구분으로 )

### 단점
- Controller가 다수의 View를 선택할 수 있어, 하는 일이 너무 많아질 수 있음
- 코드 일관성 유지에 노력이 필요
- View와 Model 사이 의존성 높음 (규모 커질수록 유지보수 어려워짐)


## MVP (Model-View-Presenter)
화면과 로직을 분리한 디자인 패턴입니다.
사용자는 뷰를 통해 명령을 입력합니다. Presenter가 input을 받아 Model에 전달합니다. 모델에서 명령 처리 후 Presenter가 View를 업데이트합니다.
- Model: 데이터와 로직 관리
- View: 레이아웃과 화면 처리
- Presenter: Model과 View 중개, View와 직접 연결되며 1:1 관계

### 장점
- 좋은 확장성 (Model과 View 간 의존성 해결)
- 유닛테스트시 테스트코드 작성이 비교적 용이함
- UI, Data 각 파트가 나눠져 있어, 동시 코딩이 용이함

### 단점
- 애플리케이션이 복잡할수록 View와 Presenter 간 의존성 강해짐
- Presenter에 로직 집중되는 경향이 있음
- View와 Presenter가 1:1로 매칭돼, View가 많아질수록 Presenter도 많아


## MVVM (Model-View-ViewModel)
VIew와 ViewModel을 양방향 데이터 바인딩하는 디자인 패턴입니다.
양방향 데이터 바인딩이란 View의 데이터와 ViewModel의 데이터를 엮어, 한 쪽이 갱신되면 다른 한쪽도 갱신하는 구조를 말합니다.

- Model: 도메인 특화 데이터 처리
- View: 레이아웃과 화면 처리
- ViewModel: 상태와 연산 View의 실제 논리 및 데이터 흐름 담당

### 장점
- View와 Model 간 의존성 없음
- View와 ViewModel 간 의존성 없음 (Command 패턴과 Data Binding 사용)

### 단점
-  ViewModel 설계가 어려


## Container-Presenter
컴포넌트의 레이아웃과 로직을 분리하는 디자인 패턴입니다.

### 장점
- 관심사 분리 (기능과 UI 분리로 인해 코드 구조 이해가 쉽고 유지보수가 용이함)
- 높은 재사용성 (Presentor 컴포넌트는 의존성 갖지 않아 재사용이 용이함)

### 단점
- 필요 이상으로 패턴 강제하는 현상 있음
- Hooks 통해 로직 분리 가능 (Hooks 사용시 로직 재사용도 가능)


## Flux
MVC 모델의 양방향 데이터 흐름 단점을 보완하기 위해 고안된 단방향 디자인 패턴입니다.
데이터 흐름이 항상 Dispatcher → Store → View → Action → Dispatcher → ... 순으로 이뤄집니다.

- Dispatcher :  
	- Flux의 데이터 흐름을 관리
	- Action 발생시, 전달된 Action을 확인 후 콜백함수 실행해 Store로 전달
- Store: 
	- 어플리케이션의 상태변경 결정
	- 콜백 함수 통해 Dispatcher로부터 데이터 수신
	- Store 변경되면 View에 변경된 사실 전달
- View: 
	- 레이아웃과 화면 처리
	- 자식 View로 데이터 보내는 View 컨트롤러 역할도 수행
- Action: 
	- Dispatcher에서 콜백 함수 실행 시 전달되는 인수 객체
	- 대체로 Action creator에서 만들어

### 장점
- 오류 발생 지점 착기가 용이함
- 구조 흐름 파악이 용이함


## Atomic
컴포넌트를 기능의 단위로 나눈 디자인 패턴입니다.
Atoms, Molecules, Organisms, Templates, Pages의 다섯 단계로 디자인을 나눠 구성합니다.
간단한 문법으로 컴포넌트 외부에서 공통의 데이터를 Set, Get할 수 있도록 합니다.

### 장점
- 높은 UI 재사용성 

### 단점
- 초기 디자인 시스템 구축 비용이 많이 필요함
- props drilling issue


## 참고
### RIDI (Atomic + Container-Presenter)

컴포넌트를 세 단계로 나눠 props drilling issue 예방
- atom: 한 가지 기능을 담당하는 최소 단위 컴포넌트 (버튼, 체크박스 등)
- block: atom의 조합으로 이뤄진 pages의 하위 컴포넌트
- pages: 각 화면 컴퍼넌트

각 pages는 Container와 Presenter를 분리

### 디렉토리 구조
```
src/
	components/
		atoms/
		blocks/
		pages/
			Home/
				index.tsx
				Home.tsx
				styles.ts
	hocs/
	hooks/
```



개인적으로 UI 작업시 주로 styled-components를 사용한다.
styled-components는 작은 단위의 UI부터 블럭을 쌓아올리는 것처럼 구축해간다는 설계 철학을 갖고 있기 때문에 atomic 디자인과 잘 어울릴 것 같다. 
리디북스는 style 파일도 분리했지만 styled-components를 사용한다면 같은 파일에 통합해서 작성하게 좀 더 어울릴 듯 하다.


## 출처
- [디자인패턴 mvc, mvp, mvvm 그리고 flux](https://velog.io/@pica_pica/%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4-mvc-mvp-mvvm-%EA%B7%B8%EB%A6%AC%EA%B3%A0-flux)
- [presentational and container 패턴이란 무엇인가](https://tecoble.techcourse.co.kr/post/2021-04-26-presentational-and-container/)  
- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)  
- [리액트 어플리케이션 구조 - 아토믹 디자인](https://ui.toast.com/weekly-pick/ko_20200213) 
- [리액트 React 로 만든 웹사이트, 풀스택 개발 장단점 | Manta 2부 | 리디 RIDI dev.](https://www.youtube.com/watch?v=exf4enLbVm4)