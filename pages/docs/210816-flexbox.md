---
title: flexbox
tags: css
---

# flexbox 정리



- display: flex

  - 정렬하려는 부모 요소에 작성
  - inline-flex: flex 영역을 블록으로 쓰지 않고 인라인 블록으로 사용

- flex-direction

  - item이 쌓이는 방향 설정

  - main-axis가 변경됨
  - row : 주축의 방향이 왼쪽에서 오른쪽 (기본값)
  - row-reverse: 주축의 방향이 오른쪽에서 왼쪽
  - column: 주축의 방향이 위에서 아래
  - column-reverse: 주축의 방향이 아래에서 위

- flex-wrap

  - 요소들의 강제 한줄 배치 여부 설정
  - nowrap: 모든 아이템들을 한줄에 배치 (자리 없어도 튀어나옴) (기본값)
  - wrap: 넘치면 다음 줄로
  - wrap-reverse: 넘치면 윗줄로 (역순)

- flex-flow

  - flex-direction과 flex-wrap의 shorthand
  - flex-direction과 flex-wrap에 대한 설정값을 차례로 작성

- justify-content

  - main 축 정렬
  - flex-start: 시작 지점부터 차례로 쌓임 (기본값)
  - flex-end: 쌓이는 방향이 뒤쪽부터 시작 (역순이 아닌 아이템이 뒤로 몰림)
  - center: 정중앙
  - space-between: 좌우 정렬(item 간 간격 동일)
  - space-around: 균등 좌우 정렬 (내부 요소 여백은 외곽 여백의 2배)
  - space-around: 균등 정렬 (내부 요소와 외곽 여백 모두 동일)

- align-items

  - cross 축 정렬
  - stretch: 컨테이너를 가득 채움 (기본값)
  - flex-start: 위
  - flex-end: 아래
  - center: 가운데
  - baseline: item 내부의 text에 기준선을 맞춤

- align-self
  - 개별 item에 적용하는 속성 (정렬 방식은 align-items와 동일, 속성이 적용되는 대상이 다름)
  - auto (기본값)
  - flex-start
  - flex-end
  - center
  - baseline
  - stretch: 부모 컨테이너에 자동으로 맞춰 늘어남
- order
  - 작은 숫자일수록 앞쪽(우선 쌓이는 방향)으로 이동
  - 기본값: 0
- flex-grow
  - 주축에서 남는 공간을 항목들에게 분배하는 방법
  - 각 아이템의 상대적 비율을 정하는 것은 아님
  - 기본값: 0
  - 음수 불가능