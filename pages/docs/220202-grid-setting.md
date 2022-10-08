---
title: 초기 Grid 세팅(React + styled-component)
date: "2020-02-02"
desc: this is a test
tags: React typescript css
---

# 초기 Grid 세팅(React + styled-component)
Grid는 두 방향 (가로-세로) 레이아웃 시스템입니다. 본 게시물에서는 CSS Grid 이용해 초기 화면구조를 잡아보도록 하겠습니다.

# 개발환경
- React
- typescript
- styled-components

# 프로젝트 생성 및 라이브러리 설치
```bash
$ npx create-react-app my-app --template=typescript
$ cd my-app
$ npm i styled-components @types/styled-components
$ npm start
```

# Grid 적용
## App.js
```javascript
import React from 'react';
import styled from 'styled-components';

function App() {
  return (
    <Wrap>
      <Header>Header</Header>
      <SideLeft>SideLeft</SideLeft>
      <Main>Main</Main>
      <SideRight>SideRight</SideRight>
      <Footer>Footer</Footer>
    </Wrap>
  );
}

export default App;
```

## Wrap
- `display: grid`로 grid 적용
- `grid-template`로 각 그리드 비율 결정
  - `/` 앞이 row, 뒤가 column
  - `fr`은 비율. `"1fr 2fr 1fr"`은 1:3:1 비율.
- `grid-template-areas`로 그리드 영역 지정
  - 같은 이름 영역을 한 그룹으로 취급
  - 같은 그룹은 항상 인접해 있어야
    - 예) `"side main side"`는 잘못된 사례. `"sideleft main sideright"` 등으로 변경해야 함
- `@media` 부분은 화면 넓이가 550px 이하일때 레이아웃 변경하도록 하는 내용

```javascript
const Wrap = styled.div`
  height: 100vh;
  display: grid;
  grid-template: 80px 1fr 80px / 1fr 3fr 1fr;
  grid-template-areas:
    "nav nav nav"
    "sideleft main sideright"
    "footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sideleft"
      "main"
      "sideright"
      "footer";
  }
  color: white;
`
```

## 기타 각 컴퍼넌트
```javascript
const Header = styled.div`
  background-color: #3a3a55;
  grid-area: nav;
  padding: 0.25rem;
`
const SideLeft = styled.div`
  background-color: #9aaab7;
  grid-area: sideleft;
  padding: 0.25rem;
`
const Main = styled.div`
  background-color: #1f2128;
  grid-area: main;
  padding: 0.25rem;
`
const SideRight = styled.div`
  background-color: #9aaab7;
  grid-area: sideright;
  padding: 0.25rem;
`
const Footer = styled.div`
  background-color: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`
```

# 결과화면
![desktop](./2022-09-07-grid-setup/desktop.png)
![mobile](./2022-09-07-grid-setup/mobile.png)
