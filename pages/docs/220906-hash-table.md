---
title: Hash Table
date: '2022-09-06'
tags: python
---

## hash table

해시 함수 사용해 변환한 값을 index 삼아 key와 value를 저장하는 자료구조 (python의 dict 해당됨)

> python에서 dict는 hash table로, set은 dict 참조해 구현됨
>
> dict와 set 모두 hash table에 해당되나 set은 value없이 key만 저장

- 기본연산으로 search, insert, delete
- 데이터 순서는 저장하지 않음
- key 통해 value 얻을 수 있으며 속도가 빠름
- 큰 데이터 축약 가능
- value는 중복 가능하나 key는 unique해야
- 수정 가능
- key-value가 1:1 매핑돼 있어 검색, 삽입, 삭제 과정 모두 평균 O(1)의 시간복잡도 가짐

### hash function

임의의 길이 갖는 메시지 입력받아 고정된 길이의 해시값 출력하는 함수

- 입력값이 새로운 형태 데이터로 변환돼 암호화 영역에서 자주 사용됨 (Secure Hash Algorithm 등)

- 눈사태 효과 : 입력값 일부 변경됐을때 다른값 출력하는 현상
  - 결과값으로 입력값 유추 불가 (단방향으로 구현돼 있기 때문)

### hash collision

입력값 다름에도 같은 결과값 나오는 현상

- 해시 함수 입력값 길이에 무관하게 고정된 길이 값을 출력하기 때문에 발생
- 해시 충돌 하나도 없는 해시 함수 만드는건 불가능
- 무한한 가짓수 입력값 받아 유한한 가짓수 출력값 생성하는 경우 비둘기집 원리로 충돌 발생

### hash collision 완화

- Open addressing : 해시테이블 크기 고정, 해시충돌 발생했을 경우 빈 곳 찾아 저장
- Separate chaining : 해시충돌 발생할 경우
