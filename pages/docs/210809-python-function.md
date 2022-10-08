---
title: python Function
tags: python
---



# Function

### 함수 쓰는 이유

- 가독성
- 재사용성
- 유지보수



## 함수의 선언과 호출

- 함수 선언은 `def` 이용
- 동작 후 하나의 객체 반환 (`return`통해 결과값 전달)

```python
def <함수이름>(parameter1, parameter2):
    <코드블럭>
    return value
```

- `dir(__builtins__)`으로 내장함수 목록 확인 가능



## 함수의 Output

### 함수의 `return`

- 오직 한 개의 개체만 반환
- 함수가 return되거나 종료되면, 함수를 호출한 곳으로 돌아감



## 함수의 Input

### 매개변수 & 전달인자 - parameter & argument

#### parameter

```python
def func(x):
    return x + 2
```

- `x`는 매개변수
- 입력을 받아 함수 내부에서 활용할 변수

#### argument

```python
func(2)
```

- `2`는 전달인자
- 실제로 전달되는 입력값



### 함수의 인자

- 위치 인자 : 인자는 위치에 따라 함수 내에 전달
- 기본 인자값 : 함수 정의 시, 기본값 지정 가능
- 키워드 인자 : 함수 호출 시, 키워드 인자 활용해 직접 변수 이름으로 특정 인자 전달 가능
- 가변 인자 리스트 :
  - 개수가 정해지지 않은 임의의 인자 받을 경우, 함수 정의시 가변 인자 리스트 `*args` 활용
  - 가변 인자 리스트는 `tuple` 형태로 처리됨
- 가변 키워드 인자 :
  - 정해지지 않은 키워드 인자들은 함수 정의시 가변 키워드 인자 `**kwargs`  활용
  - 가변 키워드 인자는 `dict` 형태로 처리되며, 매개변수에 `**`로 표시됨

```python
# 식별자는 숫자만으로 이루어질 수 없음
dict(1=1, 2=2)	# SyntaxError
# key가 숫자인 딕셔너리 만들 경우 아래와 같이
dict([(1,1),(2,2)])
dict(((1,1),(2,2)))
```



#### `print`

- `end = ' '`로 마지막 문자 지정 가능 (기본값은 `\n`)
- `sep = ' '`로 인자간 구분자 지정 가능 (기본값은 공백)



## 함수와 스코프

- 전역 스코프 : 코드 어디에서든 참조할 수 있는 공간
- 지역 스코프 : 함수가 만든 스코프로 함수 내부에서만 참조할 수 있는 공간
- 전역 변수 : 전역 스코프에 정의된 변수
- 지역 변수 : 로컬 스코프에 정의된 변수



### 변수의 수명주기 - lifecycle

- 빌트인 스코프 : 파이썬이 실행된 이후부터 영원히 유지
- 전역 스코프 : 모듈이 호출된 시점 이후 혹은 이름 선언된 이후부터 인터프리터 끝날때까지 유지
- 지역(함수) 스코프 : 함수가 호출될 때 생성되고, 함수가 종료될 때까지 유지
  - 함수 내에서 처리되지 않는 예외를 일으킬 때 삭제됨



### 이름 검색 규칙 - resolution

- LEGB Rule : 아래 순서로 이름 찾아나감
  - Local scope : 함수
  - Enclosed scope : 특정 함수의 상위 함수
  - Global scope : 함수 밖의 변수 혹은 import된 모듈
  - Built-in scope : 파이썬 안에 내장된 함수 또는 속성
- 기본적으로 함수에서 선언된 변수는 Local scope에 생성되며, 함수 종료시 사라짐



## 재귀 함수

- 함수 내부에서 자기 자신을 호출하는 함수
- 작성시 반드시 `base case`가 존재해야 함
  - `base case` : 점점 범위가 줄어들어 반복되지 않는 최종적으로 도달하는 곳
  - 팩토리얼 경우 n이 1일때, 함수 아닌 정수 반환하는 것
- 코드가 더 직관적이고 이해하기 쉬운 경우 있으나, 메모리 부하가 큰 편
- 최대 재귀 깊이 : Stack overflow 방지를 위해 1,000번 넘어가면 함수 종료됨

### 팩토리얼

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

### 피보나치

```python
def fib(n):
    if n < 2:
        return n
    else:
        return fib(n-2) + fib(n-1)
```

```python
def fib_loop(n):
    tmp = [0,1]
    for i in range(1, n+1):
        num = tmp[n-1] + tmp[n]
        tmp.append(num)
    return(tmp[n])
```

