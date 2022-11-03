---
title: Cookie, localStorage, sessionStorage
date: '2022-10-25'
desc:
tags: javascript 기술면접
---

## 개요
브라우저 정보 저장소는 크게 세 가지로 나뉩니다.
- Cookie
- localStorage
- sessionStorage

| | Cookie | localStorage | sessionStorage |
 :--: | :--: | :--: | :--: |
| 용량 | 4KB | 10MB | 5MB |
| 데이터 형태 | 문자열 | 문자열, 객체 | 문자열. 객체 |
| 저장위치 | 클라이언트, 서버 | 클라이언트 | 클라이언트 |
| 만료일 | 임의지정 | 반영구적 | 세션/탭 종료 전까지 |
| 브라우저 호환성 | HTML4/HTML5 | HTML5 | HTML5 |
| HTTP요청 송신 | ◯ | ⨉ | ⨉ |



## Cookie
- HTTP 요청시 브라우저는 Cookie를 헤더에 넣어 서버로 보냄
  - Cookie 용량이 크면 performance에 지장
- Cookie 헤더는 optional
- "사생활 보호 설정"에서 Cookie를 blocK할 경우 생략 가능

```javascript
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```
`<cookie-list>`
- `<cookie-name>=<cookie-value>` 형태의 이름-값 쌍의 목록
- 목록 내 쌍들은 `;`으로 구분

```javascript
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;
```


## localStorage
- 로컬에 도메인 별로 지속되는 storage
- 시간제한이 없으며 브라우저가 닫혀도 사라지지 않음
- "사생활 보호 모드" 중 생성한 데이터는 마지막 "사생활 보호" 탭이 닫힐 때 지워짐

```javascript
myStorage = window.localStorage;

// 항목 추가
localStorage.setItem('myCat', 'Tom');

// 항목 호출
const cat = localStorage.getItem('myCat');

// 항목 제거
localStorage.removeItem('myCat');

// 전체 제거
localStorage.clear();
```


## sessionStorage
- 세션(프로세스, 탭, 브라우저)이 종료될 때까지 지속되는 storage
- 브라우저가 열려있다면 새로고침과 페이지 복구를 거쳐도 남아있음
- 같은 URL이라도 새 탭/창으로 열면 새로운 세션을 생성함

```javascript
myStorage = window.sessionStorage;

// 항목 추가
sessionStorage.setItem('myCat', 'Tom');

// 추적할 텍스트 입력 칸 가져오기
let field = document.getElementById("field");

// 자동저장 값이 존재하는지 판별
// (의도치 않게 페이지를 새로 불러올 경우에만 발생)
if (sessionStorage.getItem("autosave")) {
  // 입력 칸 콘텐츠 복구
  field.value = sessionStorage.getItem("autosave");
}

// 텍스트 입력 칸 변화 수신
field.addEventListener("change", function() {
  // 결과 세션 저장
  sessionStorage.setItem("autosave", field.value);
})
```



## 참고
- [【JavaScript】Cookie , localStorage, sessionStorageの違い](https://qiita.com/terufumi1122/items/76bafb9eed7cfc77b798)
- [📚 LocalStorage / SessionStorage (vs 쿠키와 비교 정리)](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-localStorage-sessionStorage#recentEntries)
- [MDN-Cookie](https://developer.mozilla.org/ko/docs/Web/HTTP/Headers/Cookie)
- [MDN-localStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/localStorage)
- [MDN-sessionStorage](https://developer.mozilla.org/ko/docs/Web/API/Window/sessionStorage)

