---
title: 브라우저 렌더링
date: '2022-09-02'
desc: 브라우저에 URL 입력 후 일어나는 일과 렌더링 원리
tags: 기타
---

## 브라우저에 URL을 입력하면...

1. 브라우저 주소창에 URL 입력
2. IP 탐색 - 입력된 URL의 도메인을 IP주소로 변환
   - IP 탐색 과정:
     1. (로컬 hosts 파일 탐색)
     2. (DNS Cache 탐색)
     3. DNS 서버 탐색

   - DNS(Domain Name System): 사람이 읽을 수 있는 도메인을 기계가 읽을 수 있는 IP 주소로 변환하는 시스템

3. 해당 IP 서버와 TCP 연결
   - TCP(Transmission Control Protocol):
     - 전송 제어 프로토콜
     - 두 호스트가 데이터 통신을 하기 위한 네트워크 프로토콜
     - Three Way Handshake 통해 연결
       1. 상대에게 통신을 하고 싶다는 메시지 전송 (SYN)
       2. 상대는 그 메시지에 대한 응답 + 통신 준비 완료 메시지 전송 (SYN-ACN)
       3. 2번에서 받은 메시지에 응답 전송(ACN)
       - 현재 통신이 연결돼있음을 보장
4. HTTP Request
5. HTTP Response
6. 데이터 파싱 및 처리
7. 브라우저 출력


## 브라우저 렌더링 원리

렌더링 : HTML, CSS, Javascript 등 개발자가 작성한 문서를 브라우저에 출력하는 과정

1. HTML, CSS 다운로드
2. 다운로드 받은 HTML, CSS로  각각 DOM과 CSSOM 생성
   - OM : Object Model

3. 생성된 DOM, CSSOM으로 Render Tree 생성
4. Render Tree 배치
   - Render Treed의 목적:
     - Render Tree는 실제 화면에 표현되는 요소들로 구성됨
     - 표시해야 할 순서와 문서의 시각적 구성요소로써 올바른 순서로 내용을 그려낼 수 있도록 하기 위함

5. Render Tree를 그리는 과정을 통해 브라우저가 서버에 요청한 내용을 픽셀화시키는 것을 브라우저 렌더링이라 함

