---
title: python 에러 & 예외 처리
tags: python
---



# 에러 & 예외 처리



## 에러

### 문법에러 - Syntax Error

- 파일이름, 줄번호, `^` 문자 통해 parser 문제 발생 위치 표시
- parser는 줄에서 에러가 감지된 가장 앞 위치를 가리키는 캐럿 기호`^` 표시
- 정확한 위치를 지어하지 않을 수도 있으므로 지저오딘 위치 전후 모두 확인
- `EOL` : 괄호 닫기 에러



### 예외 - Exception

- 문법적으로는 옳으나 실행시 발생하는 에러
- Exception을 상속받아 에러발생 가능
- ZerodivisionError : 어떤 수를 0을 나눌 때
- NameError : 정의되지 않은 변수를 호출했을 때
- TypeError :
  - 자료형이 올바르지 않을 때 (`round('3.5')` 등)
  - 필수 매개변수가 누락된 경우
  - 매개변수 개수가 초과된 경우
- ValueError :
  - 자료형은 올바르나 값이 적절하지 않은 경우 (`int('3.5')` 등)
  - 존재하지 않는 값을 찾고자 하는 경우 (index 등)
- KeyError: 딕셔너리에서 key가 없는 경우
- ModuleNotFoundError : 모듈 찾을 수 없는 경우 (존재하지 않는 모듈 호출)
- ImportError : 모듈을 찾았으나 가져오는 과정에서 실패 (존재하지 않는 클래스/함수 호출)
- KeyboardInterrupt : 무한 반복문을 정지시켰을 때 발생
  - 주피터 노트북에서는 정지 버튼, 실제 코드에서는 ctrl+c





## 예외 처리 - Exception Handling

### `try` & `except`

- `try` 아래 코드블럭을 실행
- 예외 발생하지 않는 경우 `except`없이 실행 종료
- 예외 발생할 경우 남은 부분 수행하지 않고, `except`가 실행됨
- 예외 지정 가능

```python
try:
    <코드블럭 1>
except (예외):
    <코드블럭 2>
```



#### 복수의 예외 처리

```python
try:
    <코드블럭 1>
except (예외1, 예외2):
    <코드블럭 2>
except 예외3:
    <코드블럭 3>
```

- 에러는 순차적으로 수행되므로, 가장 작은 범주부터 시작



### `else`

- 에러가 발생하지 않는 경우 수행되는 문장은 `else`를 이용
- 모든 `except` 절 뒤에 위치해야 함
- try 절이 예외를 일으키지 않을 때 실행되어야만 하는 코드에 적절

```python
try:
    <코드블럭 1>
except 예외:
    <코드블럭 2>
else:
    <코드블럭 3>
```



### `finally`

- 반드시 수행해야하는 문장
- 예외 발생 여부와 관계없이 try 문을 떠날 때 항상 실행

```python
try:
    <코드블럭 1>
except 예외:
    <코드블럭 2>
finally:
    <코드블럭 4>
```



### `as`

- 에러 메시지를 보여줄 수 있음

```python
try:
    <코드블럭 1>
except 예외 as err:
    <코드블럭 2>
    # print(f'{err}, 오류가 발생했습니다.')
    ## list index out of range, 오류가 발생했습니다.
```





## 예외 발생 시키기 - Exception Raising

### `raise`

- 예외를 강제로 발생

```python
raise <에러>('메시지')
```



### `assert`

- 예외를 강제로 발생
  - 보통 디버깅, 상태 검증에 사용됨
  - 무조건 `AssertionError` 반환

```python
assert <Boolean expression>, errormessage
# assert len([1, 2]) == 1, '길이가 1이 아닙니다.'
## AssertionError: 
```

