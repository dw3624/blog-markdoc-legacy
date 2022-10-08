---
title: setdefault
tags: python
---

## setdefault() - 기본값 삽입

### setdefault(key[, default])

- key가 딕셔너리 내부에 존재할 경우 해당값을 반환
- 내부에 존재하지 않을 경우, default값을 갖는 key를 삽입, default를 반환
- default의 기본값은 None



#### 예시1

```python
d = {'one':1, 'two':2, 'three':3}
d.setdefault('one')
# 1

d.setdefault('four', 4)
# 'four'가 없으므로 default값인 4를 반환
# 4

print(d)
# {'one':1, 'two':2, 'three':3, 'four':4}
```



#### 예시2

```python
nodes = {}  # dict
for _ in range(M):
    s, e = map(int, input().split())
    # nodes에 s가 있는 경우, e를 value의 리스트에 추가
    # 없는 경우, 빈 리스트를 value에 추가
    nodes.setdefault(s, []).append(e)

print(nodes)
# {1: [2], 3: [4, 1], 5: [4, 2]}
```



---