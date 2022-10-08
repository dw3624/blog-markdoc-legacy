---
title: JavaScript
tags: javascript
---

# JavaScript

### 브라우저

- 웹 서버를 이동하며 클라이언트와 서버 간 양방향으로 통신해, HTML문서나 파일을 출력하는 GUI 기반의 소프트웨어
- 인터넷 컨텐츠를 검색 및 열람하도록 함



### JavaScript의 필요성

- 브라우저 화면을 동적으로
- 브라우저를 조작할 수 있는 유일한 언어



### 크로스 브라우징

- 각 브라우저마다 다르게 구현되는 기술을 비슷하게 만들되, 어느 한쪽에 치우치지 않도록 웹 페이지를 제작하는 방법론(동일성 아닌 동등성)



### Vanilla JavaScript

- 브라우저 전쟁과 ES6이후, 다양한 도구의 등장으로 순수 자바스크립트 활용의 증대





## DOM

브라우저에서 할 수 있는 일

- DOM 조작 (문서(HTML) 조작)
- BOM 조작
- JavaScript Core



### DOM - Document Object Model

- HTML, XML과 같은 문서를 다루기 위하 문서 프로그래밍 인터페이스
- 문서를 구조화, 구조화된 구성 요소를 하나의 객체로 취급해 다루는 논리적 트리 모델
- 각 요소를 객체로 취급
- 단순한 속성 접근, 메서드 활용뿐만 아니라 프로그래밍 언어적 특성을 활용한 조작 가능



### DOM 해석

- 파싱
  - 구문분석, 해석
  - 브라우저가 문자열을 해석, DOM Tree로 만드는 과정
- 스타일
- 레이아웃



### BOM - Browser Object Model

- 자바스크립트가 브라우저와 소통하기 위한 모델
- 브라우저 창이나 프레임을 추상화해, 프로그래밍적으로 제어할 수 있도록 제공하는 수단
- window 객체는 모든 브라우저로부터 지원받으며 브라우저의 창을 지칭
- DOM은 현재 보이는 HTML 웹 문서를, BOM은 기타 부수적인 기능을 제어



### JavaScript Core

- 프로그래밍 언어





### DOM 조작

- Document는 문서 한 장(HTML)에 해당하고 이를 조작
- 조작순서 : 선택 → 변경



### DOM 선택

```
Document.querySelector(selector) : 단일 element 선택
Document.querySelectorAll(selector) : NodeList 선택

Document.getElementById(id) : 단일 element 선택
Document.getElementsByTagName(name) : HTMLCollection 선택
Document.getElementsByClassName(names) : HTMLCollection 선택
```



## HTMLCollection & NodeList

- HTMLCollection
  - name, id, index 속성으로 각 항목에 접근 가능
  - `getElementByClassName()` 등에 의해 반환됨
- NodeList
  - index로만 각 항목에 접근 가능
  - forEach 함수 및 다양한 메서드 사용 가능
- 둘다 LiveCollection으로 DOM 변경사항을 실시간 반영
  - `querySelectorsAll()`에의해 반환되는 NodeList는 Static Collection으로 실시간 반영 안됨



### DOM 변경 - Creation

```
Document.createElement()   # 작성한 태그명의 HTML 요소를 생성 후 반환
Element.append()
Node.appendChild()
```

- `ParentNode.append()`
  - DOMString 객체 추가 가능
  - 반환값 없음
  - 여러 Node 개체와 문자열 추가 가능
- `Node.appendChild()`
  - `Node`만 추가 가능
  - 추가된 Node 객체 반환
  - 하나의 Node 객체만 추가 가능



### DOM 변경 - 변경관련 속성 - property

```
Node.innerText
Element.innerHTML : element 내에 포함된 HTML 마크업을 반환, XSS 공격에 취약
```



### XSS - Cross site Scripting

- 웹 사이트 클라이언트 측 코드에 악성 스크립트를 삽입해 공격하는 방법
- 액세스 제어를 우회하고 사용자를 가장할 수 있도록 함
- [SQL injection](https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2FSQL%2520injection&psig=AOvVaw01Ch6fNlQLag3EWqnaVVWl&ust=1635425484238000&source=images&cd=vfe&ved=0CAwQjhxqFwoTCKCjg-vQ6vMCFQAAAAAdAAAAABAD)과 유사



DOM 삭제

```
ChildNode.remove()
Node.removeChild()
```



DOM 속성

```
Element.setAttribute(name, value)
Element.getAttribute(attributeName)
```





### DOM 조작 - 정리

1. 선택한다
2. 변경한다





### Event

- 네트워크 활동이나 사용자와의 상호작용같은 사건의 발생을 알리기 위한 객체



### UIEvent

-  간단한 사용자 인터페이스 이벤트
- Event의 상속을 받음



### Event의 역할

- ~하면 ~한다



### Event handler

```
EventTarget.addEventListener()
target.addEventListener(type, listener)
Event.preventDefault()   # 현재 이벤트의 기본동작을 중단, 태그의 기본동작 취소
```

- type : 반응할 이벤트 유형
- listener : 지정된 타입의 이벤트가 발생했을때 알림을 받는 객체