---
title: Pandas Cheat Sheet (3)
tags: pandas python
---


```python
import pandas as pd
```

## 9. Combine Data Sets


```python
adf = pd.DataFrame({'x1':['A','B','C'], 'x2':[1,2,3]})
adf
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>




```python
bdf = pd.DataFrame({'x1':['A','B','D'], 'x3':['T','F','T']})
bdf
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
      <th>x1</th>
      <th>x3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>T</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2</th>
      <td>D</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
</div>



### Standard joins


```python
pd.merge(adf, bdf, how = 'left',on = 'x1')
    # Join matching rows from bdf to adf
    # x1열 기준 일치하는 행을 bdf에서 adf로 합침
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
      <th>x1</th>
      <th>x2</th>
      <th>x3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>T</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
      <td>NaN</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(adf, bdf, how = 'right', on = 'x1')
    # Join mathching rows from adf to bdf
    # x1열 기준 일치하는 행을 adf에서 bdf로 합침
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
      <th>x1</th>
      <th>x2</th>
      <th>x3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
      <td>T</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2</th>
      <td>D</td>
      <td>NaN</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(adf, bdf, how = 'inner', on = 'x1')
    # Join data. Retain only rows in both sets.
    # 양쪽 df에 공통적으로 존재하는 행만 합침
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
      <th>x1</th>
      <th>x2</th>
      <th>x3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>T</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
      <td>F</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(adf, bdf, how = 'outer', on = 'x1')
    # Join data. Retain all values, all rows
    # 모든 값, 행을 합침.
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
      <th>x1</th>
      <th>x2</th>
      <th>x3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1.0</td>
      <td>T</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2.0</td>
      <td>F</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3.0</td>
      <td>NaN</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>NaN</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
</div>



### Filtering joins


```python
adf[adf.x1.isin(bdf.x1)]
    # All rows in adf that have a mathch in bdf.
    # bdf와 일치하는 값을 가진 adf의 모든 행
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
adf[~adf.x1.isin(bdf.x1)]
    # All rows in adf that do not have a match in bdf.
    # bdf와 일치하는 값이 없는 adf의 모든 행
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>



### Set-like Operations


```python
ydf = pd.DataFrame({'x1':['A','B','C'],'x2':[1,2,3]})
ydf
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>




```python
zdf = pd.DataFrame({'x1':['B','C','D'],'x2':[2,3,4]})
zdf
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>D</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(ydf,zdf)
    # Rows that appear in both ydf and zdf (Intersection)
    # ydf와 zdf에서 공통되는 행 (교집합)
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>C</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(ydf, zdf, how = 'outer')
    # Rows that appear in either or both ydf and zdf (Union)
    # ydf와 zdf에서 보이는 모든 행 (합집합)
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(ydf, zdf, how = 'outer', indicator = True)
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
      <th>x1</th>
      <th>x2</th>
      <th>_merge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>left_only</td>
    </tr>
    <tr>
      <th>1</th>
      <td>B</td>
      <td>2</td>
      <td>both</td>
    </tr>
    <tr>
      <th>2</th>
      <td>C</td>
      <td>3</td>
      <td>both</td>
    </tr>
    <tr>
      <th>3</th>
      <td>D</td>
      <td>4</td>
      <td>right_only</td>
    </tr>
  </tbody>
</table>
</div>




```python
pd.merge(ydf, zdf, how = 'outer', indicator = True).query('_merge == "left_only"')
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
      <th>x1</th>
      <th>x2</th>
      <th>_merge</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
      <td>left_only</td>
    </tr>
  </tbody>
</table>
</div>




```python
(pd.merge(ydf, zdf, how = 'outer', indicator = True)
    .query('_merge == "left_only"')
    .drop(columns=['_merge']))
    # Rows that appear in ydf but not zdf (Setdiff)
    # zdf에는 없지만 ydf에는 있는 행 (차집합, ydf - zdf)
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
      <th>x1</th>
      <th>x2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>A</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
</div>


