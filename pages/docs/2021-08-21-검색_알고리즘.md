---
title: 검색 알고리즘
tags: 알고리즘
---



# 검색 - Search

- 저장된 자료 중 원하는 항목 찾는 작업
- 목적의 탐색 키를 가진 항목을 찾는 것
  - 탐색 키 - search key: 자료를 구별해 인식할 수 있는 키
- 검색 종류
  - 순차 검색 - sequential search
  - 이진 검색 - binary search
  - 해쉬 - hash



## 순차 검색

- 일렬로 된 자료를 순서대로 검색하는 방법
  - 가장 간단, 직관적 검색법
  - 순차구조로 구현된 자료구조에서 검색할 때 유용
  - 구현이 쉬우나, 검색 대상의 수가 많은 경우 비효율적



### 정렬되지 않은 경우

- 검색 과정
  - 첫번째 원소부터 순서대로 검색 대상과 키 값이 같은 원소가 있는지 비교
  - 키 값이 동일한 원소를 찾으면 그 원소의 인덱스를 반환
  - 자료구조 마지막까지 검색 대상을 찾지 못하면 검색 실패

```python
def SequentialSearch(a, n, key):
    i = 0
    while i < n and a[i] != key:
        i += 1
    if i < n:
        return i
    else:
        return -1
```



### 정렬된 경우

- 검색 과정
  - 오름차순으로 정렬된 자료 가정
  - 자료를 순차적으로 검색
  - 원소 키 값이 검색 대상의 키 값보다 클 경우, 찾는 원소가 없다는 것이므로 검색 종료

```python
def SequentialSearch(a, n, key):
    i = 0
    i += 1
    while i < n and a[i] < key:
        i += 1
    if i < n and a[i] = key:
        return i
    else:
        return -1
```





## 이진 검색

- 자료 가운데에 있는 항목 키 값과 비교 후, 다음 검색 위치 결정해 검색하는 방법
- 자료가 정렬된 상태여야 함
- 검색 과정
  - 자료 중앙의 원소 선택
  - 중앙의 원소값과 찾고자 하는 목표값 비교
  - 목표값이 중앙 원소값보다 작을 경우, 왼쪽 반에 대해 검색
  - 클 경우, 오른쪽 반에 대해 검색
  - 검색 값을 찾을 때까지 반복

```python
def binarySearch(a, key):
    start = 0
    end = len(a) - 1

    while start <= end:
        middle = (start + end) // 2
        if a[middle] == key:
            return true
        elif a[middle] > key:
            end = middle - 1
        else:
            start = middle + 1
    return false


# 재귀 함수 이용한 경우
def binarySearch2(a, low, high, key):
    if low > hight:
        return false
    else:
        middle = (low + high) // 2
        if key == a[middle]:
            return true
        elif key < a[middle]:
            return binarySearch2(a, low, middle-1, key)
        elif a[middle] < key:
            return binarySearch2(a, middle+1, high, key)
```





## 해쉬