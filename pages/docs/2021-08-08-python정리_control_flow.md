---
title: python Control Flow
tags: python
---



# Control_flow

- 순차적 흐름 제어
- 제어문 : 조건문, 반복문



## 조건문

### 조건표현식

- `true_value if <조건식> else false_value`
- assign 사용하는 경우

```python
num = 2
result='홀수' if num % 2 else '짝수'
print(result)
```



## 반복문

### while 반복문

- 조건식이 참인 경우 반복적으로 코드 실행

```python
while <조건식>:
    <코드 블럭>
```

### for 반복문

- 시퀀스를 포함한 순회가능한 객체의 요소들을 순회

```python
for <임시변수> in <순회가능한 데이터(iterable)>:
    <코드 브럭>
```

- `for i in range(len(list)):`으로 indexing 사용 가능
- `enumerate` : 인덱스와 값을 tuple 형식으로 같이 반환
  - `enumerate(list, start = 1)`으로 인덱스 1부터 시작 가능

### 반복 제어

- `break` : 반복문 종료
- `continue` : continue 이후 코드를 수행하지않고 다음 요소부터 반복 수행

```python
ages = [10, 23, 8, 30, 25, 31]

for age in ages:
    if age < 20:
        continue
    print(f'{age} 살은 성인입니다.')
```

- ``for-else`
  - `else` : 끝까지 반복문을 실행한 이후 실행
    - 반복문이 `break`로 종료될 때는 실행되지 않음

- `pass` : 아무것도 하지 않음
  - pass : 자리만 차지
  - continue : 다음 loop 실행

