---
title: Card flip (CSS)
tags: css django
---

## Card Flip

- django로 개발 중 사용한 css 스타일 코드
- 마우스가 img 위로 올라가면 img가 옆으로 회전, 뒷면의 내용이 나타남



### html

```html
<div class="flip-card px-0" OnClick="location.href='#'" style="cursor:pointer;">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="" alt="" style="width:100%;height:100%;" class="img-thumbnail">
    </div>
    <div class="flip-card-back">
      <br>
      <div class="p-3">
        <b>제목</b>
      </div>
      <div class="p-4 text-start">
        <p>내용</p>
      </div>
    </div>
  </div>
</div>
```



### css

- 아래 코드를 html의  `<style></style>` 내부에 작성

```css
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 350px;
  border: 1px solid #f1f1f1;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front img {
  object-fit: cover;
  border-radius:10px;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color: #999999;
  color: black;
  border-radius:10px;
}

/* Style the back side */
.flip-card-back {
  background-color: #1B150D;
  color: white;
  transform: rotateY(180deg);
  border-radius:10px;
}
```



### 기타

- 카드 뒷면 내용은 100자로 제한, 아래와 같이 구현

```
{{ movie.overview|truncatechars:100}}
```



---

