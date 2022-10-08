---
title: javascript 2
tags: javascript
---

AJAX - Asynchronous JavaScript And XML (비동기식 JavaScript와 XML)

- XMLHttpRequest 객체 활용해 서버와 통신
- 다양한 포맷(JSON, XML, HTML, 일반 텍스트 형식 등)을 주고받을 수 있음



특징

- 비동기성
  - event 있는 경우 전체 페이지가 아닌 일부분만을 업데이트
- 아래 작업을 가능케 함
  1. 페이지 새로고침 없이 서버에 요청
  2. 서버로부터 데이터를 받고 작업을 수행



XMLHttpRequest 객체

- 서버와 상호작용하기 위해 사용됨
- 전체 페이지의 새로고침 없이 데이터를 받아올 수 있음
- 사용자의 작업을 방해하지 않으면서 페이지 일부를 업데이트할 수 있음
- 주로 AJAX 프로그래밍에 사용
- 모든 종류의 데이터를 받아올수 있음
- `XMLHttpRequest()`





Asynchronous JavaScript

동기식

- 순차적, 직렬적 Task 수행
- 요청을 보낸 후 응답을 받아야만 다음 동작이 이뤄짐
- blocking

비동기식

- 병렬적 Task 수행
- 요청을 보낸 후 응답을 기다리지 않고 다음 동작이 이뤄짐
- non-blocking



왜 비동기(Asynchronous)를 사용하는가

- 사용자 경험
- 데이터를 불러오는 동안 지속적으로 응답하는 화면을 보여줘, 쾌적한 사용자 경험을 제공



Threads

- 프로그램이 작업을 완료하기 위해 사용할 수 있는 단일 프로세스
- 각 스레드는 한번에 하나의 작업만 수행할 수 있음



JavaScript는 single threaded

- 이벤트를 처리하는 Call Stack이 하나인 언어
- 이를 해결하기 위해
  1. 즉시 처리하지 못하는 이벤트들을 다른곳(Web API)으로 보내서 처리
  2. 처리된 이벤트들은 처리된 순서대로 대기실(Task queue)에 줄 세움
  3. Call Stack이 비면 담당자(Event Loop)가 대기줄 제일 앞의 이벤트를 Call Stack으로 보냄



Concurrency model

- Event loop를 기반으로 하는 동시성 모델

1. Call Stack
   - 요청이 들어올 때마다 해당 요청을 순차적으로 처리하는 Stack(LIFO) 형태의 자료구조
2. Web API (Browser API)
   - 브라우저 영역에서 제공하는 API
   - setTimeout(), DOM events, AJAX로 데이터 가져오는 시간이 소요되는 일들을 처리
3. Task Queue (Event Queue, Message Queue)
   - 비동기 처리된 callback 함수가 대기하는 Queue(FIFO) 형태의 자료 구조
   - main thread가 끝난 후 실행돼 후속 JavaScript 코드가 차단되는 것을 방지
4. Event Loop
   - Call Stack이 비어 있는지 확인
   - 비어있는 경우 Task Queue에서 실행 대기 중인 callback 함수가 있는지 확인
   - Task Queue에 대기 중인 callback 함수가 있다면 가장 앞에 있는 callback 함수를 Call Stack으로 push



Zero delays

- 실제로 0ms 후에 callback 함수가 시작된다는 의미 아님
- delay는 JavaScript가 요청을 처리하는데 필요한 최소 시간
- `setTimeout` 함수에 시간제한을 설정했더라도 대기중인 메시지의 모든 코드가 완료되기까지 대기해야 함



순차적인 비동기 처리하기

- Web API로 들어오는 순서는 중요하지 않고, 어떤 이벤트가 먼저 처리되느냐가 중요 (실행 순서 불명확)
- 이를 해결하기 위한 작성 방식

1. Async callbacks
   - 백그라운드에서 코드 실행을 시작할 함수를 호출할 때 인자로 지정된 함수
   - 백그라운드 코드 실행이 끝나면 callback 함수를 호출해 작업완료를 알리거나, 다음 작업을 실행하게 할 수 있음
   - 예) `addEventListener()`의 두 번째 인자
2. promise-style
   - Modern Web APIs에서의 새로운 코드 스타일
   - XMLHttpRequest 객체를 사용하는 구조보다 조금 더 현대적인 버전





Callback function

- 다른 함수에 인자로 전달된 함수
- 외부 함수 내에서 호출돼 일종의 루틴 또는 작업을 완료함
- 동기식, 비동기식 모두 사용됨
- 비동기 콜백 : 비동기 작업이 완료된 후 코드 실행을 계속하는 데 사용되는 경우



일급 객체 - First Class Object

- 다른 객체들에 적용할 수 있는 연산을 모두 지원하는 객체(함수)

- JavaScript의 함수는 일급 객체
- 조건
  - 인자로 넘길 수 있어야 함
  - 함수의 반환 값으로 사용할 수 있어야 함
  - 변수에 할당할 수 있어야 함



callback hell

- 여러 비동기 작업이 반복적으로 연쇄되는 상황
- 디버깅, 코드 가독성에 제한 발생

- 해결법
  1. 코드 깊이를 얕게
  2. 모듈화
  3. 모든 단일 오류 처리
  4. Promise 콜백 방식 사용





Promise object

- 비동기 작업의 최종 완료 또는 실패를 나타내는 객체



Promise methods

- `.then(callback)`
  - 이전 작업이 성공했을때 수행할 작업
  - 반환값이 반드시 있어야 함
- `.catch(callback)`
  - `.then()`이 하나라도 실패하면 동작
  - 실패로 인해 생성된 error 객체는 catch 블록에서 사용 가능
  - 반환값이 반드시 있어야 함
- `.finally(callback)`
  - 결과와 상관없이 무조건 지정된 callback 함수가 실행
  - 인자 전달받지 않음



Promise가 보장하는 것

- callback 함수는 JavaScript의 Event Loop가 현재 실행 중인 Call Stack을 완료하기 전에는 절대 호출되지 않음
- 비동기 작업이 성공하거나 실패한 뒤 `.then()` 메서드 이용해 추가한 경우도 위와 같이 동작
- `.then()` 을 여러번 사용해 여러개 callback 함수를 추가할 수 있음 (chaining)





Axios

- 브라우저를 위한 promise 기반의 클라이언트
- 편리한 AJAX 요청이 가능토록 함