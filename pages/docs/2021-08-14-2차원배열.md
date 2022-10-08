---
title: 2차원 배열
tags: 알고리즘
---



# 2차원 배열

- 1차원 List를 묶어놓은 List



### 배열 순회

- n * m 배열의 모든 원소를 빠짐없이 조사하는 방법

```python
# 행 우선 순회
for row in range(len(Array)):
    for col in range(len(Array[0])):
        Array[row][col]
        
# 열 우선 순회
for col in range(len(Array[0])):
    for row in range(len(Array)):
        Array[row][col]
        
# 지그재그 순회
for row in range(len(Array)):
    for col in range(len(Array[0])):
        Array[row][col + (m-1 - 2*j) * (i % 2)]
        
        
# 델타 탐색
## 좌표에서 4방향의 인접 배열 요소를 탐색하는 방법
arr[[0...n-1][0...n-1]]
dx = [0,0,-1,1]  # 상하좌우
dy = [-1,1,0,0]  # 상하좌우

for x in range(len(arr)):
    for y in range(len(arr[x])):
        for i in range(4):
            testX = x + dx[mode]
            testY = y + dy[mode]
            test(arr[testX][testY])
            

# 전치 행렬
## 대각선 기준으로 항목 교환 (row, col 교환)
arr = [[1,2,3],[4,5,6],[7,8,9]]  # 3*3 행렬

for row in range(3):
    for col in range(3):
        if row < col:
            arr[row][col], arr[col][row] = arr[col][row], arr[row][col]
```

