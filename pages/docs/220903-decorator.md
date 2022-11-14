---
title: Decorator
date: '2022-09-03'
tags: python
---

## 개요

특정 함수 받아 명령 추가한 뒤 다시 함수 형태로 반환하는 함수

- 특정 함수 수정하지 않은 상태에서 추가 기능 구현할 때 사용
- 함수를 꾸며주는 함수

## 기본구조

인자로 `func` 받아 내부함수 `wrapper()`로 명령 추가, `wrapper()` 함수 반환

```python
def decorator(func):
    def wrapper(*args, **kwargs):
        print('Hello')
        return func(*args, **kwargs)
    return wrapper
```

## 적용

```python
def func(tmp):
    print('exmaple1')

decorated_func = decorator(func)
```

@로 단축 표기 가능

```python
@decorator
def func(tmp):
    print('exmaple1')
```

## 중첩 decorator

func 함수와 가까운 순으로 decorator 적용

```python
@decorator2
@decorator1
def func(tmp):
    print('example')
```

## @wraps

참고 : https://nachwon.github.io/decorator/
