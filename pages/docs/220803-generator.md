---
title: Generator
date: '2022-08-03'
tags: python
---

## generator

### 개요

iterator를 생성해주는 함수, 함수 안에 yield 키워드 사용

> iteration : 어떤 객체 내 원소에 하나씩 차례로 접근하는 것
>
> iterable : member 하나씩 반환 가능한 object (예 : list, string, tuple, ...)
>
> iterator : `next()` 메소드 이용해 데이터에 순차적으로 접근 가능한 object
>
> `next()` : 다음 데이터 호출, 없을 경우 StopIteration 에러
>
> ※ iterable 하다고 반드시 iterator는 아님, `iter()`로 iterator로 변환 가능

- iterable한 순서 지정됨
- 함수 내부 로컬 변수를 통해 내부상태 유지됨
- lazy evaluation 가능
- 무한하게 데이터 생성이 가능함

```python
# 예
def generator():
    yield 1
    yield 2
    yield 3

gen = generator()
next(gen) # 1
next(gen) # 2
next(gen) # 3
```



### Lazy Evaluation

계산값이 필요할 때까지 계산 늦추는 효과

- list 사용할 경우

```python
import time

def return_abc():
  alphabets = []
  for ch in "ABC":
    time.sleep(1)
    alphabets.append(ch)
  return alphabets

for ch in return_abc():
  print(ch)
# 3초 경과
A
B
C
```

- generator 사용한 경우

```python
def yield_abc():
  for ch in "ABC":
    time.sleep(1)
    yield ch

for ch in return_abc():
  print(ch)
# 1초 경과
A
# 1초 경과
B
# 1초 경과
C
```

### 무한 데이터 생산

- generator이용해 이론적으로 무한한 데이터 생산 가능
- generator는 사이즈 커져도 차지하는 메모리 사이즈 동일
  - next() 메소드 통해 차례로 값을 메모리에 적재하기 때문
  - list는 list 내부 데이터를 모두 메모리에 적재함

```python
def generator():
    i = 0
    while i < n:
        yield i
        i += 1
```

### yield

generator 함수 정의시에만 쓰임, 여러번에 나눠 결과값 반환

- generator 함수 실행 중 yield 만나면 해당 함수는 그 상태로 정지, 반환값을 next() 호출한 쪽으로 전달
  - 함수에서 사용된 local 변수 등 함수 내부에서 정의된 데이터들이 유지됨
- 데이터 무한하게 제공하는 함수는 yield 키워드 없이는 작성이 거의 불가능
  - 컴퓨터 물리적 메모리에 한계 있기 때문
