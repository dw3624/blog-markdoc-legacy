---
title: CSS layout
tags: css
---


# 02 Web

### CSS page layout techniques

- display
- position
- float
- flexbox
- grid system 
- table layout, multiple-column layout, ...



## float

- 본래 이미지 좌우측 주변으로 텍스트를 둘러싸는 레이아웃 위해 도입
- 웹사이트 전체 레이아웃 만드는데까지 발전
- float화된 블럭 요소는 내부적으로 height 상실 --> `clearfix` 사용
  - [참고링크](http://ideahacker.net/2013/07/30/6144/)

```html
<body>
    <div class="box left">float left</div>
    <p>lorem300 자동 완성으로 길게...</p>
</body>
```

```css
.box {
    width: 150px;
    height: 150px;
    background-color: crimson;
    color: white;
    margin-right: 30px;
}

.left {
    float: left;
}
```



### float clear

- 선택한 요소의 맨 마지막 자식으로 가상 요소를 하나 생성
- 보통 content 속성과 함께 짝지어, 요소에 장식용 콘텐츠를 추가할 때 사용
- 기본값은 inline
- 선행 floating 요소 다음일 수 있는지 또는 그 아래로 내려가야 하는지 지정
- clear 속성은 부동 및 비부동 요소 모두에 적용됨

```css
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```





## flexbox

### CSS Flexible Box Layout

- 요소 간 공간 배분과 정렬 기능을 위한 1차원(단방향) 레이아웃
- 요소
  - Flex Container (부모 요소)
    - flex item이 놓여있는 영역
    - display 속성을 flex 혹은 inline-flex로 지정
  - Flex Item (자식 요소)
- 축
  - main axis (메인축)
  - cross axis (교차축)

![flexbox](../../../github/self-studying/CSS_page_layout.assets/flexbox.png)

#### 부모 요소에 `display: flex` 혹은 `inline-flex`를 작성

- `display: flex` : 정렬하려는 부모 요소에 작성
- `inline-flex` : flex 영역을 블록으로 쓰지 않고 인라인 블록으로 사용

```css
.flex-container {
    display: flex;
}
```

#### flex 적용 속성

- flex-direction : 
  - item이 쌓이는 방향 설정
  - main-axis 방향이 바뀜
- justify : 메인축 정렬
- align : 교차축 정렬
- content : 여러 줄
- items : 한 줄
- self : flex item 개별 요소

```css
flex-direction: row;
justify-content: center;
align-items: center;
...
```





## Bootstrap

- [링크](https://getbootstrap.com/)
- `<head>` 마지막에 추가

```html
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

- `<body>` 마지막에 추가

```html
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

- spacing : [참고링크](https://getbootstrap.com/docs/5.0/utilities/spacing/)



### CDN - Content Delivery(Distribution) Network

- 컨텐츠(CSS, JS, image, text 등)을 효율적으로 전달하기 위해 여러 노드에 가진 네트워크에 데이터를 제공하는 시스템



### Responsive Web Design

- 다양한 화면 크기를 가진 디바이스들이 생기면서 개념 등장
- Media Queries, Flexbox, Bootstrap Grid System, The viewport meta tag



## bootstrap grid system

- flexbox로 제작됨
- `container`, `rows`, `columns`로 컨텐츠 배치 및 정렬
  - 12개 column
  - 6개 grid breakpoints