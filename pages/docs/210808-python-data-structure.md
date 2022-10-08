---
title: python 데이터 구조
tags: python
---



# 데이터 구조 - Data Structure

- 데이터에 편리하게 접근하고, 변경하기 위해 데이터를 저장하거나 조작하는 방법
- Program = DataStructure + Algorithm



## 문자열

- immutable, ordered, iterable

### 조회/탐색

- .find(x)
- .index(x)

### 문자열 변경

- .replace(old, new[, count]) : count 개수만큼 시행
- .strip([chars])
- .split([chars])
- 'separator'.join(iterable)
- .capitalize(), .title(), .upper(), .lower(), .swapcase()



## 리스트

### 값 추가 및 삭제

- .append(x)
- .extend(iterable)
- .insert(i, x)
- .remove(x)
- .pop(i)
- .clear()

### 탐색 및 정렬

- .index(x)
- .count(x)
- .sort()
- .reverse()

### 리스트 복사

- slice 연산자 `[:]`
- `list()`
- copy 모듈 : `copy.deepcopy()`



### List Comprehension

```python
[expression for 변수 in iterable]
list(expression for 변수 in iterable)

# [number * 2 for number in numbers]
```



#### List Comprehension + 조건문

```python
[expression for 변수 in iterable if 조건식]

# 피타고라스 정리
[(x,y,z) for x in range(1, 50) for y in range(1, 50) for z in range(1, 50) if x**2 + y**2 == z**2] 
```



### 데이터 구조에 적용가능한 Built-in Function

- 순회 가능한(iterable) 데이터 구조에 적용가능한 Built-in Function
- iterable타입 : list, dict, set, str, bytes, tuple, range



#### `map(function, iterable)`

- 순회가능한 데이터 구조의 모든 요소에 function을 적용한 후 그 결과를 돌려줌
- return은 `map_object` 형태

```python
new_numbers = list(map(int, numbers))
print(new_numbers)
```



#### `filter(function, iterable)`

- 순회가능한 function의 반환된 결과가 True인 것들만 구성해 반환
- `filter object`를 반환

```python
new_numbers = list(filter(odd,numbers))
print(new_numbers)
```



#### `zip(*iterable)`

- 복수의 iterable 객체를 모아줌
- 결과는 튜플의 모음으로 구성된 `zip object` 반환





## 세트 - Set

- mutable, unordered, iterable



### 추가 및 삭제

- .add(elem)
- .update(*others)
- .remove(elem)
- .discard(elem)
- .pop()

