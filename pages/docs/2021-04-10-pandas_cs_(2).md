---
title: Pandas Cheat Sheet (2)
tags: pandas python
---

```python
import pandas as pd
import numpy as np
import seaborn as sns   # 시각화 라이브러리
```

## 5. Summarize Data

```python
df = sns.load_dataset('iris')
df.shape   # (행, 열)
```
    (150, 5)




```python
df.head(2)
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5.1</td>
      <td>3.5</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.9</td>
      <td>3.0</td>
      <td>1.4</td>
      <td>0.2</td>
      <td>setosa</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['species'].value_counts()   # 항목별 개수 카운트
```




    virginica     50
    setosa        50
    versicolor    50
    Name: species, dtype: int64




```python
pd.DataFrame(df['species'].value_counts())   # dataframe 형태로
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
      <th>species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>virginica</th>
      <td>50</td>
    </tr>
    <tr>
      <th>setosa</th>
      <td>50</td>
    </tr>
    <tr>
      <th>versicolor</th>
      <td>50</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['species'].nunique()   # 중복되지 않은 항목의 개수
```




    3




```python
df.describe()   # 수치형 데이터만 표시
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>5.843333</td>
      <td>3.057333</td>
      <td>3.758000</td>
      <td>1.199333</td>
    </tr>
    <tr>
      <th>std</th>
      <td>0.828066</td>
      <td>0.435866</td>
      <td>1.765298</td>
      <td>0.762238</td>
    </tr>
    <tr>
      <th>min</th>
      <td>4.300000</td>
      <td>2.000000</td>
      <td>1.000000</td>
      <td>0.100000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>5.100000</td>
      <td>2.800000</td>
      <td>1.600000</td>
      <td>0.300000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>5.800000</td>
      <td>3.000000</td>
      <td>4.350000</td>
      <td>1.300000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>6.400000</td>
      <td>3.300000</td>
      <td>5.100000</td>
      <td>1.800000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>7.900000</td>
      <td>4.400000</td>
      <td>6.900000</td>
      <td>2.500000</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.describe(include = 'all')   # top: top frequency를 갖는 항목
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150</td>
    </tr>
    <tr>
      <th>unique</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>3</td>
    </tr>
    <tr>
      <th>top</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>virginica</td>
    </tr>
    <tr>
      <th>freq</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>50</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>5.843333</td>
      <td>3.057333</td>
      <td>3.758000</td>
      <td>1.199333</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>std</th>
      <td>0.828066</td>
      <td>0.435866</td>
      <td>1.765298</td>
      <td>0.762238</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>min</th>
      <td>4.300000</td>
      <td>2.000000</td>
      <td>1.000000</td>
      <td>0.100000</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>5.100000</td>
      <td>2.800000</td>
      <td>1.600000</td>
      <td>0.300000</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>5.800000</td>
      <td>3.000000</td>
      <td>4.350000</td>
      <td>1.300000</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>6.400000</td>
      <td>3.300000</td>
      <td>5.100000</td>
      <td>1.800000</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>max</th>
      <td>7.900000</td>
      <td>4.400000</td>
      <td>6.900000</td>
      <td>2.500000</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.describe(include=[np.object])  # object type만 표시
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
      <th>species</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>150</td>
    </tr>
    <tr>
      <th>unique</th>
      <td>3</td>
    </tr>
    <tr>
      <th>top</th>
      <td>virginica</td>
    </tr>
    <tr>
      <th>freq</th>
      <td>50</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.describe(include=[np.number])   # number type만 표시
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
      <td>150.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>5.843333</td>
      <td>3.057333</td>
      <td>3.758000</td>
      <td>1.199333</td>
    </tr>
    <tr>
      <th>std</th>
      <td>0.828066</td>
      <td>0.435866</td>
      <td>1.765298</td>
      <td>0.762238</td>
    </tr>
    <tr>
      <th>min</th>
      <td>4.300000</td>
      <td>2.000000</td>
      <td>1.000000</td>
      <td>0.100000</td>
    </tr>
    <tr>
      <th>25%</th>
      <td>5.100000</td>
      <td>2.800000</td>
      <td>1.600000</td>
      <td>0.300000</td>
    </tr>
    <tr>
      <th>50%</th>
      <td>5.800000</td>
      <td>3.000000</td>
      <td>4.350000</td>
      <td>1.300000</td>
    </tr>
    <tr>
      <th>75%</th>
      <td>6.400000</td>
      <td>3.300000</td>
      <td>5.100000</td>
      <td>1.800000</td>
    </tr>
    <tr>
      <th>max</th>
      <td>7.900000</td>
      <td>4.400000</td>
      <td>6.900000</td>
      <td>2.500000</td>
    </tr>
  </tbody>
</table>
</div>



df.sum() : 각 항목의 합  
df.count() : 각 항목의 개수 (non-NA/null)  
df.median() : 각 항목의 최빈값  
df.quantile() : 각 항목의 사분위수 (df.quantile([0.25,0.75])형태로 지정 가능)  
df.min() : 각 항목의 최솟값  
df.max() : 각 항목의 최댓값  
df.mean() : 각 항목의 평균  
df.var() : 각 항목의 분산  
df.std() : 각 항목의 표준편차  
apply(_function_) : 각 항목에 함수를 적용  

### apply(_function_)


```python
df.apply(lambda x : x[1])   # 임의의 함수
```




    sepal_length       4.9
    sepal_width          3
    petal_length       1.4
    petal_width        0.2
    species         setosa
    dtype: object




```python
df['species_3'] = df['species'].apply(lambda x : x[:3])
    # species열에서 첫 3글자 추출 후 species_3 열에 추가
df.tail(3)
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
      <th>species_3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>147</th>
      <td>6.5</td>
      <td>3.0</td>
      <td>5.2</td>
      <td>2.0</td>
      <td>virginica</td>
      <td>vir</td>
    </tr>
    <tr>
      <th>148</th>
      <td>6.2</td>
      <td>3.4</td>
      <td>5.4</td>
      <td>2.3</td>
      <td>virginica</td>
      <td>vir</td>
    </tr>
    <tr>
      <th>149</th>
      <td>5.9</td>
      <td>3.0</td>
      <td>5.1</td>
      <td>1.8</td>
      <td>virginica</td>
      <td>vir</td>
    </tr>
  </tbody>
</table>
</div>




```python
def smp(x):
    # 뒤에서부터 세번째까지 문자 추출
    x = x[:-3]
    return x

df['species_3_b'] = df['species'].apply(smp)   # 함수 적용
df.tail(3)
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
      <th>species</th>
      <th>species_3</th>
      <th>species_3_b</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>147</th>
      <td>6.5</td>
      <td>3.0</td>
      <td>5.2</td>
      <td>2.0</td>
      <td>virginica</td>
      <td>vir</td>
      <td>virgin</td>
    </tr>
    <tr>
      <th>148</th>
      <td>6.2</td>
      <td>3.4</td>
      <td>5.4</td>
      <td>2.3</td>
      <td>virginica</td>
      <td>vir</td>
      <td>virgin</td>
    </tr>
    <tr>
      <th>149</th>
      <td>5.9</td>
      <td>3.0</td>
      <td>5.1</td>
      <td>1.8</td>
      <td>virginica</td>
      <td>vir</td>
      <td>virgin</td>
    </tr>
  </tbody>
</table>
</div>



## 6. Handling Missing Data

df.dropna(axis=0) : NA/null이 들어있는 행 전체 삭제  
df.dropna(axis=1) : NA/null이 들어있는 열 전체 삭제  
df[ ].dropna() : NA/null 들어있는 특정 행 또는 열을 삭제  
df.fillna(value) : 모든 NA/null에 값 대체  

## 7. Make New Columns


```python
df = pd.DataFrame({'A':range(1,6),'B':np.random.randn(5)})
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0.989189</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>-0.341036</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>-0.294497</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>2.668057</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0.759853</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.assign(Area = lambda df: df.A * df.B)
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
      <th>Area</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0.989189</td>
      <td>0.989189</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>-0.341036</td>
      <td>-0.682072</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>-0.294497</td>
      <td>-0.883491</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>2.668057</td>
      <td>10.672227</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0.759853</td>
      <td>3.799263</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.assign(ln_A = lambda x: np.log(x.A))
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
      <th>ln_A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0.989189</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>-0.341036</td>
      <td>0.693147</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>-0.294497</td>
      <td>1.098612</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>2.668057</td>
      <td>1.386294</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0.759853</td>
      <td>1.609438</td>
    </tr>
  </tbody>
</table>
</div>




```python
df['ln_A'] = np.log(df.A)   # 혹은 df.ln_A = np.log(df.A)
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
      <th>ln_A</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0.989189</td>
      <td>0.000000</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>-0.341036</td>
      <td>0.693147</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>-0.294497</td>
      <td>1.098612</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>2.668057</td>
      <td>1.386294</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0.759853</td>
      <td>1.609438</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.qcut(df.A, 3, labels = ["good", "medium", "bad"])
    # 숫자형을 카테고리형 데이터로 변환
    # 지정한 수 만큼 자동으로 나눠 분류
```




    0      good
    1      good
    2    medium
    3       bad
    4       bad
    Name: A, dtype: category
    Categories (3, object): ['good' < 'medium' < 'bad']




```python
pd.qcut(df.B, 2, labels = ["good", "bad"])
```




    0     bad
    1    good
    2    good
    3     bad
    4    good
    Name: B, dtype: category
    Categories (2, object): ['good' < 'bad']




```python
df.min(axis = 0)   # 열별 최솟값
```




    A       1.000000
    B      -0.341036
    ln_A    0.000000
    dtype: float64




```python
df.min(axis=1)   # 행별 최솟값
```




    0    0.000000
    1   -0.341036
    2   -0.294497
    3    1.386294
    4    0.759853
    dtype: float64




```python
df['A'].clip(lower = 3, upper = 8)
    # 임계치 지정
    # 최솟값은 lower로, 최댓값은 upper로 대체
```




    0    3
    1    3
    2    3
    3    4
    4    5
    Name: A, dtype: int64




```python
df['B'].abs()   # 절댓값
```




    0    0.989189
    1    0.341036
    2    0.294497
    3    2.668057
    4    0.759853
    Name: B, dtype: float64



## 8. Group Data


```python
df = sns.load_dataset('iris')

group = df.groupby(by = 'species')
group
```




    <pandas.core.groupby.generic.DataFrameGroupBy object at 0x0000019F6BCF7880>



df.groupby(level='ind') :  groupby object를 반환. 'ind'란 이름의 index 값들을 grouping  


```python
group.size()
```




    species
    setosa        50
    versicolor    50
    virginica     50
    dtype: int64




```python
group.mean()
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
      <th>sepal_length</th>
      <th>sepal_width</th>
      <th>petal_length</th>
      <th>petal_width</th>
    </tr>
    <tr>
      <th>species</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>setosa</th>
      <td>5.006</td>
      <td>3.428</td>
      <td>1.462</td>
      <td>0.246</td>
    </tr>
    <tr>
      <th>versicolor</th>
      <td>5.936</td>
      <td>2.770</td>
      <td>4.260</td>
      <td>1.326</td>
    </tr>
    <tr>
      <th>virginica</th>
      <td>6.588</td>
      <td>2.974</td>
      <td>5.552</td>
      <td>2.026</td>
    </tr>
  </tbody>
</table>
</div>



shift(1) : 행을 하나씩 아래로  
shift(-1) : 행을 하나씩 위로

동점 데이터의 순위 결정:  
rank(method = 'min') : 동점 관측치에 그룹 내 최소 순위 부여  
rank(method = 'dense') : 'min'과 같은 방법으로 순위부여. 단 그룹 간 순위가 1씩 증가  
rank(method = 'first') : 그룹에서 표시되는 순서대로 순위 부여  
rank(pct = True) : 반환된 순위를 백분위 수 형식으로 표시  


```python
df = pd.DataFrame({'name': ['KIM', 'KANG', 'YANG','YOON', 'LEE'],
                   'age': [24, 32, 43, 24, np.nan]})

df['rank_average'] = df['age'].rank(method='average')
df['rank_min'] = df['age'].rank(method='min')
df['rank_max'] = df['age'].rank(method='max')
df['rank_first'] = df['age'].rank(method='first')
df['rank_dense'] = df['age'].rank(method='dense')
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
      <th>name</th>
      <th>age</th>
      <th>rank_average</th>
      <th>rank_min</th>
      <th>rank_max</th>
      <th>rank_first</th>
      <th>rank_dense</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>KIM</td>
      <td>24.0</td>
      <td>1.5</td>
      <td>1.0</td>
      <td>2.0</td>
      <td>1.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>KANG</td>
      <td>32.0</td>
      <td>3.0</td>
      <td>3.0</td>
      <td>3.0</td>
      <td>3.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>YANG</td>
      <td>43.0</td>
      <td>4.0</td>
      <td>4.0</td>
      <td>4.0</td>
      <td>4.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>YOON</td>
      <td>24.0</td>
      <td>1.5</td>
      <td>1.0</td>
      <td>2.0</td>
      <td>2.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>LEE</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



cumsum() : 누적합  
cummax() : 누적 최댓값  
cummin() : 누적 최솟값  
cumprod() : 누적 곱


```python
df = pd.DataFrame([[1,2,3],[4,5,6]],columns = ['A','B','C'])
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
      <td>1</td>
      <td>2</td>
      <td>3</td>
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
df.cumprod()
    # 1 * 4, 2 * 5, 3 * 6
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
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>10</td>
      <td>18</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.cumprod(axis=1)
    # 1 * 2 * 3
    # 4 * 5 * 6
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
      <td>1</td>
      <td>2</td>
      <td>6</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4</td>
      <td>20</td>
      <td>120</td>
    </tr>
  </tbody>
</table>
</div>



### agg(_function_)


```python
df = pd.DataFrame([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9],
                   [np.nan, np.nan, np.nan]],
                  columns=['A', 'B', 'C'])
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
      <td>1.0</td>
      <td>2.0</td>
      <td>3.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>4.0</td>
      <td>5.0</td>
      <td>6.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>7.0</td>
      <td>8.0</td>
      <td>9.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.agg(['sum', 'min'])
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
      <th>sum</th>
      <td>12.0</td>
      <td>15.0</td>
      <td>18.0</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.0</td>
      <td>2.0</td>
      <td>3.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.agg({'A' : ['sum', 'min'], 'B' : ['min', 'max']})
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>max</th>
      <td>NaN</td>
      <td>8.0</td>
    </tr>
    <tr>
      <th>min</th>
      <td>1.0</td>
      <td>2.0</td>
    </tr>
    <tr>
      <th>sum</th>
      <td>12.0</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.agg(x=('A', max), y=('B', 'min'), z=('C', np.mean))
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
      <th>x</th>
      <td>7.0</td>
      <td>NaN</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>y</th>
      <td>NaN</td>
      <td>2.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>z</th>
      <td>NaN</td>
      <td>NaN</td>
      <td>6.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.agg("mean", axis="columns")
```




    0    2.0
    1    5.0
    2    8.0
    3    NaN
    dtype: float64



## 8. Windows & Plotting

### Windows


```python
df = pd.DataFrame({"B": [0, 1, 2, np.nan, 4]})
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
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>0.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>4.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.expanding(min_periods = 2,
             axis = 0).sum()
    # provide expanding transformations.
    # 2개의 관측치 보일 때까지는 NaN 반환
    # 이후로 sum을 적용
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
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>3.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>7.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.rolling(window = 2,
           min_periods = None, 
           center = False,
           win_type = None,
           on = None,
           axis = 0,
           closed = None
          ).sum()
    # provide rolling window calculations.
    # 2개씩 건너뛰며 sum을 적용  
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
      <th>B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>1</th>
      <td>1.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>NaN</td>
    </tr>
    <tr>
      <th>4</th>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>



### Plotting


```python
df = pd.DataFrame({'A': np.random.randn(1000)+1,
                   'B': np.random.randn(1000),
                   'C': np.random.randn(1000)-1},
                 columns = ['A','B','C'])
df.head(3)
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
      <td>1.641035</td>
      <td>-0.116209</td>
      <td>-0.279715</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0.975435</td>
      <td>-0.874098</td>
      <td>-1.965071</td>
    </tr>
    <tr>
      <th>2</th>
      <td>-0.652109</td>
      <td>0.714793</td>
      <td>-1.649675</td>
    </tr>
  </tbody>
</table>
</div>




```python
df.plot.hist(alpha = 0.5)   # alpha: 투명도
```




    <AxesSubplot:ylabel='Frequency'>




    
![output_53_1](https://user-images.githubusercontent.com/62541648/114256208-07174400-99f3-11eb-910d-0813b0675c13.png)
    



```python
df.plot.hist(stacked=True, bins=20) # bins : 막대개수, bin따라 freq도 바뀜
```




    <AxesSubplot:ylabel='Frequency'>




    
![output_54_1](https://user-images.githubusercontent.com/62541648/114256246-13030600-99f3-11eb-937d-37b7340de5d2.png)
    



```python
df.plot.scatter(x='A',y='B')
```




    <AxesSubplot:xlabel='A', ylabel='B'>




    
![output_55_1](https://user-images.githubusercontent.com/62541648/114256264-1bf3d780-99f3-11eb-88e3-37fddf8c6e0e.png)
    

