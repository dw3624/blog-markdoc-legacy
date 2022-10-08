---
title: python 컨테이너
tags: python
---



# 컨테이너 - Container

- Sequence : 순서가 있는 데이터
- Non-sequence : 순서가 없는 데이터

- list, tuple, range, string, binary



## Sequence

### 특징

- 순서를 가질 수 있음
- 특정 위치의 데이터를 가리킬 수 있음



### Tuple

```python
empty = ()
type(empty)	# tuple
len(empty)	# 0

single_tuple = (1,)
type(single_tuple)  # tuple
len(single_tuple)	# 1

tuple_or_not = ('hello')
print(type(tuple_or_not))	# <class 'str'>
```



### range

```python
# n부터 m-1까지 s만큼씩 증가한다.
range(n, m, s)
```

- 활용할 수 있는 연산자/함수

```python
x in s		# containment test
x not in s	# containment test
s1 + s2		# concatenation
s * n		# n번만큼 반복해 더하기
s[i]		# indexing
s[i:j]		# slicing
s[i:j:k]	# k간격으로 slicing
len(s)		# 길이
min(s)		# 최솟값
max(s)		# 최댓값
s.count(x)	# x의 개수
```





## Non-Sequence

- 세트
- 딕셔너리



### Set

- 순서가 없고 중복된 값이 없는 자료구조 (집합)

- `{}` 통해 생성, 순서 없으면 중복값 없음
- `set()`로 빈 세트를 생성

- `-` (차집합), `|` (합집합), `&` (교집합)



### Dictionary

- `key`와 `value`의 쌍으로 이뤄져 있음
- `{}`를 통해 만들며, `dict()`로 만들 수 있음
- `key`는 변경 불가능(immutable)한 데이터만 가능
  - immutable: string, integer, float, boolean, tuple, range
- `value`는 `list`, `dictionary`를 포함한 모든 것이 가능



#### dictionary 형변환

```python
d = {'name': 'ssafy', 'year': 2020}
str(d)
list(d)
tuple(d)
set(d)		# {'name', 'year'}
# range(d)
```



#### 데이터의 분류

- `mutable` : 변경 가능
  - list, dict, set
- `immutable` : 변경 불가능
  - literal : Number, string, bool
  - range()
  - tuple()
  - frozenset()

```python
# mutable
## 객체의 메모리 주소값을 복사 > 같은 객체를 참조
a = [1,2,3,4]
b = a
b[0] = 100

print(a)	# [100,2,3,4]
print(b)	# [100,2,3,4]

# immutable
a = 20
b = a
b = 10

print(a)	# 20
print(b)	# 10
```



## 정리

### Container

- #### Sequence (Ordered)

  - string : immutable
  - list : mutable
  - tuple : immutable
  - range() : immutable

- #### Unordered

  - set : mutable
  - dictionary : mutable

  