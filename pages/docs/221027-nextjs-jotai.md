---
title: URL 쿼리 파라미터 이용해 Pagination 구현하기
date: '2022-10-27'
desc: Next.js와 Jotai 사용해 SSR Pagination 이슈 해결
tags: react nextjs jotai
---

## 개요
Nextjs로 정적 웹사이트 구축 중 게시물 목록 페이지에서 Pagination 이슈에 부딪혔습니다.

해당 페이지는 랜더링 시 모든 데이터를 받고 클라이언트에서 나눠 보여주는 식으로 구성했습니다. 따라서 페이지가 달라도 URL이 바뀌지 않아 뒤로가기를 눌렀을때 무조건 1페이지로 넘어갔습니다.

뒤로가기를 눌렀을때 원래 보던 페이지로 돌아가는게 자연스럽고 사용자 경험상 적합해 보여 해결방법을 생각해봤습니다.


## 구상
우선 다음의 두 가지 해결법을 생각해 봤습니다.
- `sessionStorage`에 현재 페이지 정보 저장
- recoil 전역변수에 현재 페이지 정보 저장

### sessionStorage
현재 페이지 정보를 `sessionStorage`에 저장하는 방식입니다.
- 페이지 진입시 `sessionStorage`에 저장된 현재 페이지 반환
- 없는 경우 1 반환
- 다른 페이지 클릭시 `sessionStorage` 갱신

nextjs는 서버에서 페이지 랜더링 후 client로 보내 화면을 보여줍니다. `sessionStorage는` client에 정보를 저장하기 때문에 nextjs에서는 랜더링시 `ReferenceError가` 발생합니다. 이를 해결하기 위해선 client에 window가 생성되기까지 기다린 뒤 javascript가 실행되도록 해야 합니다.

```javascript
const currentPage = typeof window !== "undefined"? sessionStorage.getItem("currentPage"): 1;
```

다만 위와 같이 구성하면 client에서 window가 생성될 때까지 기다려야 하기 때문에 규모가 커졌을때 성능 이슈가 생기지 않을까란 의문이 들었습니다. 또한 `sessionStorage`에 저장된 값과 사전 랜더링 값이 다른 경우 오류가 발생할 수도 있다는 정보가 있었습니다.

### [recoil](https://recoiljs.org/docs/recoil-sync/introduction/)
현재 페이지 정보를 recoil 전역변수에 저장하는 방식입니다.
- 페이지 진입시 전역변수에 저장된 현재 페이지 반환
- 없는 경우 1 반환
- 다른 페이지 클릭시 전역변수 갱신

위 방법을 비교해 봤을 때 recoil이 더 적합해 보입니다. 다만 SSR 환경에서는 여러번 atom을 생성해 경고 메시지를 출력한다는 이슈가 있다고 합니다.

## url 변경토록 하고싶다!
당초엔 recoil을 사용하려고 했습니다. 하지만 좀더 욕심을 내보도록 합니다! 현재 페이지 정보를 `dw3624.github.io/docs/?page=3` 형태로 저장토록 하겠습니다.

관련 기능은 `recoil-sync`와 `use-query-params`에서 제공하는 듯 하지만 아직 개발중이거나 next.js와 궁합이 별로 안좋아 보여 `jotai`를 사용하기로 했습니다.

## [Jotai](https://jotai.org/)
- 기본적으로 recoil과 비슷한 사용법
- url 변경기능

### 기본사용법
```javascript
// _app.js

import { Provider as JotaiProvider } from "jotai";
...
  <JotaiProvider>
    <Component {...pageProps} />
  </JotaiProvider>

```

```javascript
// state/jotai/example.js

import { atom } from "jotai";

export const exState = atom("default값");
```

```javascript
import { useAtom } from "jotai";
import { exState } from "../state/jotai/example"

export const Foo = () => {
  const [example, setExample] = useAtom(exState)
  ...
```

### Pagination 적용
다음 예시처럼 코드를 바꾸면 `setPage(3)` 등으로 값을 변경하면 `dw3624.github.io/docs#page=3`과 같이 URL에 반영됩니다. 좀더 자세한 내용은 [github](https://github.com/dw3624/dw3624.github.io)에서 확인해주세요.

```javascript
// state/jotai/currentPage.js

import { atomWithHash } from "jotai/utils";

export const currentPage = atomWithHash("page", 1);
```

```javascript
// pages/docs.js

import { useAtom } from 'jotai';
import { currentPage } from '../state/jotai/currentPage';
...
const Docs = () => {
  const [page, setPage] = useAtom(currentPage)
  ...
  return (
    <Pagination
      currentPage={page}
      setPage={setPage}
    />
  )
}
```

## 참고
- [【Next.js / React】URLのクエリパラメータで状態を指定する 【Recoil / Jotai】](https://qiita.com/ItsukiN32/items/c87b06dcab1b1383300c)
