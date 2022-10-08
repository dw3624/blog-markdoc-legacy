---
title: 완전검색, 탐욕법
tags: 알고리즘
---



## 완전 검색 - Exhaustive Search

- Brute-force, generate-and-test

- 문제의 해법으로 생각할 수 있는 모든 경우의 수를 나열, 확인하는 기법
- 경우의 수가 상대적으로 작을 때 유용
- 자격검정평가 등에서는 우선 완전검색으로 해답 도출 후, 성능 개선을 위해 다른 알고리즘 사용 및 확인하는 것이 바람직함 



### 순열 - Permutation

- 서로 다른 것들 중 일부 추출해 한 줄로 나열하는 것
- 서로 다른 n개 중 r개 택하는 순열은  nPr로 표현

```python
# {1,2,3} 포함하는 모든 순열 생성
## 각 자릿수별 loop 사용
for i1 in range(1, 4):
    for i2 in range(1, 4):
        if i2 != i1:
            for i3 in range(1,4):
                if i3 != i1 and i3 != i2:
                    print(i1, i2, i3)
```





## 탐욕 알고리즘 - Greedy Algorithm

- 여러 경우 중 하나를 결정해야 할 때마다 그 순간에 최적이라고 생각되는 것을 선택해 나가는 방식으로 진행해 해답 도출
- 각 선택 시점에서 이뤄지는 결정은 지역적으로 최적이나, 최종적인 해답이 최적이라는 보장은 없음
- 동작과정
  - 해 선택 : 현상태에서 부분 문제의 최적해를 구한 뒤, 이를 부분해집합 Solution Set에 추가
  - 실행 가능성 검사 : 새로운 부분해 집합의 실행 가능여부 확인 (문제의 제약 조건 위반 여부 확인)
  - 해 검사 : 새로운 부분해 집합의 해답 부합 여부 확인
  - 해답 아닌 경우 반복

```python
# baby-gin
num = 456789
c = [0] * 12

# 각 자릿수를 배열에 저장
for i in range(6):
    c[num % 10] += 1
    num //= 10
    
i = 0
tri = run = 0
while i < 10:
    if c[i] >= 3:	# triplet 조사 후 데이터 삭제
        c[i] -= 3
        tri += 1
        continue;
    if c[i] >= 1 and c[i+1] >= 1 and c[i+2] >= 1:	# run 조사 후 데이터 삭제
        c[i] -= 1
        c[i+1] -= 1
        c[i+2] -= 1
        run += 1
        continue
    i += 1
    
if run + tri == 2: print('Baby Gin')
else: print('Lose')
```

