---
title: 기술면접
date: '2022-07-10'
tags: 기타
---


# Javascript

## js-prototype

## 브라우저 저장소

## URL vs URI

URI는 식별(identifier), URL는 위치 가리킴(locator)

![URI & URL](2022-07-10-기술면접.assets/uri.png)

### URI - Uniform Resourse Identifier

논리적 물리적 리소스를 식별하는 고유 문자열 시퀀스

```
scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
```

- scheme : 사용할 프로토콜을 뜻하며 웹에서는 http 또는 https를 사용

- user와 password : (서버에 있는) 데이터에 접근하기 위한 사용자의 이름과 비밀번호

- host와 port : 접근할 대상(서버)의 호스트명과 포트번호

- path : 접근할 대상(서버)의 경로에 대한 상세 정보

- query : 접근할 대상에 전달하는 추가적인 정보 (파라미터)

- fragment : 메인 리소스 내에 존재하는 서브 리소스에 접근할 때 이를 식별하기 위한 정보

### URL

리소스가 컴퓨터 네트워크 상에서 어디에 있는지 알려주기 위한 규약. 흔히 웹 주소라고 함. URI의 부분집합.

### 사례

- `https://www.example.com/index.html`
  - URI : True
  - URL : True
  - 웹서버의 실제 파일 위치 나타냄
- `https://www.example.com/index`
  - URI : True
  - URL : False
  - 웹서버에 index라는 파일 존재하지 않으므로 URL 해당되지 않으나, 서버에서 처리해 index.html 가리키기 때문에 URI 해당됨.



## http 프로토콜


## 비동기처리

## OOP 프로그래밍

## CSS - margin과 padding

![margin & padding](2022-07-10-기술면접.assets/margin_padding.png)

### margin

요소의 상하좌우 바깥쪽 여백

- margin-top, margin-right, margin-bottom, margin-left

속성

- auto : 브라우저가 여백을 계산, 컨테이너 내 가로 중앙에 배치

- length : pt, px, cm 등 여백 지정

- % : 포함하는 요소 너비 %로 여백 지정

- inherit : 상위 요소에서 여백 속성 상속

  > 음수 값 불가
  >
  >  속기 속성 사용 가능 (top, right, bottom, left 순) (예 : `margin: 25px 50px 75px 100px`)

### padding

요소의 상하좌우 안쪽 여백

- padding-top, padding-right, padding-bottom, padding-left

속성

- length : px, pt, cm 등 패딩 지정

- % : 포함하는 요소 너비 %로 패딩 지정

- inherit : 상위 요소에서 패딩 속성 상속

  > 음수 값 불가
  >
  > 속기 속성 사용 가능 (top, right, bottom, left 순)


# 기타

## 코딩 즐겨하나?

## 시간복잡도

## 재귀함수(+왜 느린지)
