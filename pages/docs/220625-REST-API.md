---
title: REST API
date: '2022-06-25'
tags: 기타
---



# REST API

REST 원리 따르는 API



## REST (Representational State Transfer)

- 자원을 이름으로 구분해  해당 자원의 상태를 주고 받는 것
- HTTP URI를 통해 자원을 명시,  HTTP Method(CRUD)를 통해 해당 자원에 대한 상태를 주고 받는 방식

### 구성

- 자원(Resource) - URI
- 행위(Verb) - HTTP Method
- 표현(Representations)

### 특징

- Uniform Interface
- Stateless
- Cacheable
- Self-descriptiveness
- Server-Client구조
- Layered System

### HTTP Method

| POST   | POST를 통해 해당 URI를 요청하면 리소스를 생성합니다.         |
| ------ | ------------------------------------------------------------ |
| GET    | GET를 통해 해당 리소스를 조회합니다. 리소스를 조회하고 해당 도큐먼트에 대한 자세한 정보를 가져온다. |
| PUT    | PUT를 통해 해당 리소스를 수정합니다.                         |
| DELETE | DELETE를 통해 리소스를 삭제합니다.                           |



## REST API 디자인 가이드

### REST API 중심 규칙

- URI는 정보의 자원 표현(리소스명은 명사 사용)

- 자원에 대한 행위는 HTTP Method(CRUD)로 표현

```
GET /members/delete/1 	(x)
DELETE / members/1 		(o)

GET /members/show/1     (x)
GET /members/1          (o)

GET /members/insert/2	(x)
POST /members/2			(o)
```

### 주의

- `/`는 계층 관계 나타낼 때 사용
- URI 마지막 문자로 `/` 사용 불가
- `-`은 URI 가독성 높이는데 사용
- `_`은 URI에 사용하지 않음
- URI 경로는 소문자가 적합
- 파일 확장자는 URI에 포함시키지 않음



## HTTP 응답 상태 코드

#### 200

- 클라이언트 요청을 정상적으로 수행

#### 201

- 클라이언트가 어떠한 리소스 생성을 요청, 생성 성공(POST를 통한 리소스 생성 작업 시)

### 301

- 클라이언트가 요청한 리소스에 대한 URI 변경시 사용하는 응답 코드
- 응답 시 Location header에 변경된 URI를 적어줘야 함

#### 400

- 클라이언트 요청이 부적절 할 경우 사용하는 응답 코드

#### 401

- 클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청했을 때 사용하는 응답 코드
- 로그인 하지 않은 유저가 로그인 했을 때, 요청 가능한 리소스를 요청했을 때

#### 403

- 유저 인증상태와 관계 없이 응답하고 싶지 않은 리소스를 클라이언트가 요청했을 때 사용하는 응답 코드
- 403 보다는 400이나 404를 사용할 것을 권고
- 403는 리소스가 존재한다는 뜻

#### 405

- 클라이언트가 요청한 리소스에서는 사용 불가능한 Method를 이용했을 때 사용하는 응답 코드

#### 500

- 서버에 문제가 있을 때 사용하는 응답 코드



---

