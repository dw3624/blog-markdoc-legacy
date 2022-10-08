---
title: Pandas Cheat Sheet (1)
tags: pandas python
---

```python
import pandas as pd
```


## 1. Syntax - Creating Dataframes

```python
# 각 열별로 값 지정
df = pd.DataFrame({
    'a' : [4,5,6],
    'b' : [7,8,9,],
    'c' : [10,11,12]},
    index = [1,2,3])
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>7</td>
      <td>10</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>8</td>
      <td>11</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6</td>
      <td>9</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 각 행별로 값 지정
df = pd.DataFrame(
    [[4,7,10],
    [5,8,11],
    [6,9,12]],
    index = [1,2,3],
    columns = ['a','b','c'])
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>7</td>
      <td>10</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>8</td>
      <td>11</td>
    </tr>
    <tr>
      <th>3</th>
      <td>6</td>
      <td>9</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
# 추출
sub1 = df['a']   # a열 추출
sub2 = df[['a','b']]   # a,b열 추출
sub3 = df.loc[1]   # 1행 추출
sub4 = df.loc[3,'a']   # 3행 a열 추출
sub5 = df.loc[[1,2],['a','b']]   # 여러 특정 행열 추출

print(sub1,sub2,sub3,sub4,sub5,sep='\n\n')
```

    1    4
    2    5
    3    6
    Name: a, dtype: int64
    
       a  b
    1  4  7
    2  5  8
    3  6  9
    
    a     4
    b     7
    c    10
    Name: 1, dtype: int64
    
    6
    
       a  b
    1  4  7
    2  5  8
    


```python
df2 = pd.DataFrame({
    'a' : [4,5,6],
    'b' : [7,8,9,],
    'c' : [10,11,12]},
    index = pd.MultiIndex.from_tuples(
        [('d',1),('d',2),('e',2)],
        names = ['n','v']))
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
    <tr>
      <th>n</th>
      <th>v</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">d</th>
      <th>1</th>
      <td>4</td>
      <td>7</td>
      <td>10</td>
    </tr>
    <tr>
      <th>2</th>
      <td>5</td>
      <td>8</td>
      <td>11</td>
    </tr>
    <tr>
      <th>e</th>
      <th>2</th>
      <td>6</td>
      <td>9</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>



## 2. Subset Operations (Rows)


```python
df = pd.DataFrame({
    'a':[4,4,7,10],
    'b':[5,5,8,11],
    'c':[6,6,9,12]},
    index = [1,2,3,4])
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df[df.a > 4]  # 조건에 맞는 행 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.drop_duplicates()  # 중복된 행 제거
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.head(2)   # 처음 2 행을 추출 
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.tail(2)   # 마지막 2행을 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.sample(frac = 0.5)
    # df에서 무작위로 행 추출
    # frac: 전체 중 지정한 비율의 행을 추출
    ## frac = 0.5: 전체 행 수의 반만 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.sample(n = 3)
    # 3개의 행을 무작위로 추출
    # frac과 병용할 수 없다
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.iloc[1:3]   # 위치 지정해 행 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.nlargest(2,'b') # b열 기준, 큰 순서로 2행 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.nsmallest(2,'b') # b열 기준, 작은 순서로 2행 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>



### ※ Logic in Python (and pandas)

Logic | Meaning || Logic | Meaning
--- | --- || --- | ---
< | Less than || != | Not equal to
--- | --- || --- | ---
\> | Greater than || df.column.isin(values) | Group membership
--- | --- || --- | ---
== | Equals || pd.isnull(obj) | Is NaN
--- | --- || --- | ---
<= | Less than or equals || pd.notnull(obj) | Is not NaN
--- | --- || --- | ---
\>= | Greater than or equals || &,\|,~,^,df.any(),df.all() | Logical and, or, not, xor, any, all

## 3. Subset Variable (Columns)


```python
df[['a','b']]   # 여러 열 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['a']
df.a
```




    1     4
    2     4
    3     7
    4    10
    Name: a, dtype: int64




```python
df.filter(regex = '^a')  # 정규표현식(regex)에 맞는 열을 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
    </tr>
  </tbody>
</table>
</div>



### ※ regex (Regular Expressions) Examples  
```
'\.' | '.'을 포함한 string
'Length$' | 'Length'로 끝나는 string
'^Sepal' | 'Sepal'로 시작하는 string
'^x[1-5]$' | 'x'로 시작하고 1,2,3,4,5로 끝나는 string
'^(?!Species$).*' | 'Species'를 제외한 string
```


```python
df.loc[:,'a':'c']   # a부터 c열까지 모든 열 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>b</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>8</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>11</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.iloc[:,[0,2]]   # 0, 2번째 위치 열 추출 (첫 열 위치는 0)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>6</td>
    </tr>
    <tr>
      <th>2</th>
      <td>4</td>
      <td>6</td>
    </tr>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.loc[df['a']>4,['a','c']]   # 지정한 열에서 조건에 맞는 행 추출
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>a</th>
      <th>c</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>3</th>
      <td>7</td>
      <td>9</td>
    </tr>
    <tr>
      <th>4</th>
      <td>10</td>
      <td>12</td>
    </tr>
  </tbody>
</table>
</div>



## 4. Reshaping Data - Change the layout of a data set

### pd.melt(df)
열에서 행으로 변환


```python
df = pd.DataFrame({'A': {0: 'a', 1: 'b', 2: 'c'},
                   'B': {0: 1, 1: 3, 2: 5},
                   'C': {0: 2, 1: 4, 2: 6}})
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>3</td>
      <td>4</td>
    </tr>
    <tr>
      <th>2</th>
      <td>c</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.melt(df)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>a</td>
    </tr>
    <tr>
      <th>1</th>
      <td>A</td>
      <td>b</td>
    </tr>
    <tr>
      <th>2</th>
      <td>A</td>
      <td>c</td>
    </tr>
    <tr>
      <th>3</th>
      <td>B</td>
      <td>1</td>
    </tr>
    <tr>
      <th>4</th>
      <td>B</td>
      <td>3</td>
    </tr>
    <tr>
      <th>5</th>
      <td>B</td>
      <td>5</td>
    </tr>
    <tr>
      <th>6</th>
      <td>C</td>
      <td>2</td>
    </tr>
    <tr>
      <th>7</th>
      <td>C</td>
      <td>4</td>
    </tr>
    <tr>
      <th>8</th>
      <td>C</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.melt(df, id_vars=['A'], value_vars=['B']) # B열을 행으로
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>A</th>
      <th>variable</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>B</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>B</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>c</td>
      <td>B</td>
      <td>5</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.melt(df, value_vars=['B','C']).rename(columns={
    'variable':'var','value':'val'})
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>var</th>
      <th>val</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>B</td>
      <td>5</td>
    </tr>
    <tr>
      <th>3</th>
      <td>C</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>C</td>
      <td>4</td>
    </tr>
    <tr>
      <th>5</th>
      <td>C</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>



### df.pivot (columns = 'var', values = 'val')
행에서 열로 변환


```python
df2 = pd.DataFrame({'foo': ['one', 'one', 'one', 'two', 'two','two'],
                    'bar': ['A', 'B', 'C', 'A', 'B', 'C'],
                    'baz': [1, 2, 3, 4, 5, 6]})
df2
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>foo</th>
      <th>bar</th>
      <th>baz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>one</td>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>one</td>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>C</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>two</td>
      <td>A</td>
      <td>4</td>
    </tr>
    <tr>
      <th>4</th>
      <td>two</td>
      <td>B</td>
      <td>5</td>
    </tr>
    <tr>
      <th>5</th>
      <td>two</td>
      <td>C</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
df2.pivot(index='foo',columns='bar',values='baz')
    # 행: foo, 열: bar, 값: baz
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>bar</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
    </tr>
    <tr>
      <th>foo</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>one</th>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>two</th>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
df3 = df2.pivot(index='foo',columns='bar',values='baz').reset_index()
df3
    # reset_index(): index로 세팅한 열을 df 열로 변환
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th>bar</th>
      <th>foo</th>
      <th>A</th>
      <th>B</th>
      <th>C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>one</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>two</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>




```python
(df3.melt(id_vars=['foo'], value_vars=['A','B','C'])
    .sort_values(['foo','bar'])   # foo, bar 순으로 오름차순 정렬
    .rename(columns={'value':'baz'}))   # value열을 baz로 변경
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>foo</th>
      <th>bar</th>
      <th>baz</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>one</td>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>2</th>
      <td>one</td>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>one</td>
      <td>C</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>two</td>
      <td>A</td>
      <td>4</td>
    </tr>
    <tr>
      <th>3</th>
      <td>two</td>
      <td>B</td>
      <td>5</td>
    </tr>
    <tr>
      <th>5</th>
      <td>two</td>
      <td>C</td>
      <td>6</td>
    </tr>
  </tbody>
</table>
</div>



### pd.concat([df1, df2])
데이터프레임의 행 확장

#### Series 확장


```python
s1 = pd.Series(['a', 'b'])
s2 = pd.Series(['c', 'd'])
print(s1)
print(s2)
```

    0    a
    1    b
    dtype: object
    0    c
    1    d
    dtype: object
    


```python
pd.concat([s1,s2])
```




    0    a
    1    b
    0    c
    1    d
    dtype: object




```python
pd.concat([s1, s2], ignore_index=True)
```




    0    a
    1    b
    2    c
    3    d
    dtype: object




```python
pd.concat([s1, s2], keys=['s1','s2'])
```




    s1  0    a
        1    b
    s2  0    c
        1    d
    dtype: object




```python
pd.concat([s1, s2],
    keys=['s1','s2'],
    names=['Series name','Row ID'])
```




    Series name  Row ID
    s1           0         a
                 1         b
    s2           0         c
                 1         d
    dtype: object



#### 데이터프레임 확장


```python
df1 = pd.DataFrame([['a', 1], ['b', 2]],
                   columns=['letter', 'number'])
df1
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
df2 = pd.DataFrame([['c', 3], ['d', 4]],
                    columns = ['letter', 'number'])
df2
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>c</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>d</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df1,df2])   # 행 확장
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
    </tr>
    <tr>
      <th>0</th>
      <td>c</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>d</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
df3 = pd.DataFrame([['c', 3, 'cat'],
                    ['d', 4, 'dog']],
                   columns = ['letter', 'number', 'animal'])
df3
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
      <th>animal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>c</td>
      <td>3</td>
      <td>cat</td>
    </tr>
    <tr>
      <th>1</th>
      <td>d</td>
      <td>4</td>
      <td>dog</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df1,df3])   # 없는 행값은 NaN으로 할당됨 (join='outer' 상태)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
      <th>animal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>0</th>
      <td>c</td>
      <td>3</td>
      <td>cat</td>
    </tr>
    <tr>
      <th>1</th>
      <td>d</td>
      <td>4</td>
      <td>dog</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df1,df3], join='inner')   # 공통된 열에 대해서만 행 확장
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
    </tr>
    <tr>
      <th>0</th>
      <td>c</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>d</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
df4 = pd.DataFrame([1], index=['a'])
df4
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>a</th>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>




```python
df5 = pd.DataFrame([2], index=['a'])
df5
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>a</th>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df4,df5])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>0</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>a</th>
      <td>1</td>
    </tr>
    <tr>
      <th>a</th>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>



pd.concat([df4,df5],verify_integrity=True)  
 - value error : 같은 index값이 존재  
 - 합칠 때 중복된 값 있는지 검증 가능

### pd.concat([df1, df2], axis = 1)
데이터프레임의 열 확장


```python
df1
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
df6 = pd.DataFrame([['bird', 'polly'],
                    ['monkey', 'george']],
                   columns = ['animal', 'name'])
df6
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>animal</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>bird</td>
      <td>polly</td>
    </tr>
    <tr>
      <th>1</th>
      <td>monkey</td>
      <td>george</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df1,df6])   # 아래로 행 확장 (axis=0 상태)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
      <th>animal</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>0</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>bird</td>
      <td>polly</td>
    </tr>
    <tr>
      <th>1</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>monkey</td>
      <td>george</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.concat([df1,df6], axis=1)   # 데이터프레임 열 확장
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>letter</th>
      <th>number</th>
      <th>animal</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>a</td>
      <td>1</td>
      <td>bird</td>
      <td>polly</td>
    </tr>
    <tr>
      <th>1</th>
      <td>b</td>
      <td>2</td>
      <td>monkey</td>
      <td>george</td>
    </tr>
  </tbody>
</table>
</div>



### ※ Other Methods

df.sort_values('A') : 특정 열의 행값을 오름차순 정렬

df.sort_values('A', ascending=False) : 특정 열의 행값을 내림차순 정렬

df.rename(columns={'A':'A_col'}) : 데이터프레임의 열 이름 변경

df.sort_index() : 데이터프레임의 index를 정렬

df.reset_index() : 데이터프레임의 index를 행 번호로, index를 열로 리셋

df.drop(columns=['A','B']) : 데이터프레임에서 지정 열 삭제
