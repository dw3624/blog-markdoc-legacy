---
title: HTML과 CSS
tags: html css
---

# 01 Web

- 현재 웹 표준
  - W3C - HTML5
  - WHATWG - HTML Living Standard



## HTML - Hyper Text Markup Language

- 웹 페이지가 어떻게 구조화돼 있는지 알 수 있도록하는 마크업 언어
- 웹페이지를 작성하기 위한(구조를 잡기 위한) 언어
- 웹 컨텐츠의 의미와 구조를 정의

### Hyper Text 

- Hyper
  - 텍스트 등의 정보가 다중으로 연결된 상태	

- Hyper Text
  - 참조(하이퍼링크)를 통해 사용자가 한 문서에서 다른 문서로 즉시 접근할 수 있는 텍스트

### Markup Language

- Markup
  - 문서가 화면에 표시되는 형식을 나타내거나 데이터의 논리적인 구조를 명시하기 위해 삽입되는 일련의 문자들이나 기호들
- Markup Language
  - 태그 등을 이용해 문서나 데이터의 구조를 명시하는 언어
  - 단순히 데이터를 표현하기만 함
  - 예: HTML, Markdown



### HTML 기본구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
</body>    
</html>
```

- html 요소 : HTML문서의 최상위 요소로 문서의 root를 뜻함. head와 body부분으로 구분됨
- head 요소
  - 문서제목, 인코딩 등 해당 문서 정보를 담고 있으며, 브라우저에 나타나지 않음
  - CSS 선언 및 외부 로딩 파일 지정 등도 포함
  - Open Graph Protocol
    - 카톡 등으로 보냈을 때 작은 카드형태로 뜨는 화면
    - 페이스북에서 제작
    - 메타정보에 해당하는 제목, 설명 등을 쓸 수 있도록 정의한 규약
- body 요소 : 브라우저 화면에 나타나는 정보, 실제 내용에 해당



#### 요소(element)

- `<h1>contents</h1>`의 `<h1>`와 `</h1>` 부분
- HTML 요소는 시작 태그, 종료 태그, 태그 사이에 위치한 내용으로 구성
  - 태그 : 컨텐츠를 감싸는 것으로 정보의 성격과 의미를 정의
  - 내용이 없는 태그들 : br, hr, img, input, link, meta, ...
- 요소는 중첩(nested)될 수 있음
  - 중첩을 통해 하나의 문서를 구조화
  - 여는 태그와 닫는 태그의 쌍을 잘 확인해야 함
  - 오류를 반환하지 않으며, 깨진 레이아웃을 출력하기 때문에 디버깅이 어려울 수 있음



#### 속성(attribute)

- `<a href="https://google.com"></a>`에서 `href`는 속성명, `https://google.com`은 속성값
- 쌍따옴표를 사용하고 공백을 넣지 않도록 한다.
- 태그의 부가적인 정보를 설정 가능
- 요소는 속성을 가질 수 있으며, 경로나 크기와 같은 추가적인 정보를 제공
- 요소의 시작 태그에 작성하며 보통 이름과 값이 하나의 쌍으로 존재
- 태그와 상관없이 사용 가능한 속성들(HTML Global Attribute)도 있음



#### DOM 트리 - Document Object Model 트리

- 브라우저가 HTML 문서를 로드한 후 파싱해 생성하는 모델

- 문서의 구조화된 표현을 제공하며, 프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공해 그들이 문서 구조, 스타일 내용 등을 변경할 수 있게 도움
- 동일한 문서를 표현, 저장, 조작하는 방법을 제공
- 객체 트리로 구조화돼 있어, Web Page의 객체 지향을 표현함



#### 시맨틱 태그

- 의미론적 요소를 담은 태그
  - header, nav, aside, section, article, footer, ...



### HTML 문서 구조화

- 인라인/블록 요소

```bash
그룹 컨텐츠: 
<p>
<hr>
<ol>, <ul>
<pre>, <blockquote>
<div>

텍스트 관련 요소:
<a>
<b> vs <strong>
<i> vs <em>
<span>, <br>, <img>

table:
<tr>, <td>, <th>
<thead>, <tbody>, <tfoot>
<caption>
셀 병합 속성: colspan, rowspan
scope 속성
<col>, <colgroup>

<form>의 기본 속성:
action, method

input: 다양한 타입을 가지는 입력 데이터 필드
<label> : 서식 입력 요소의 캡션
<input>의 공통 속성: 
name, placeholder, required, autofocus
```





## CSS - Cascading Style Sheets

- 스타일, 레이아웃 등을 통해 사용자에게 문서(HTML)을 표시하는 방법을 지정하는 언어
- CSS 구문은 선택자와 함께 열림
- 선택자를 통해 스타일을 지정할 HTML 요소를 선택
- 중괄호 안에서는 속성과 값, 하나의 쌍으로 이루어진 선언을 진행
- 각 쌍은 선택한 요소의 속성, 속성에 부여할 값을 의미
  - 속성 : 어떤 스타일 기능을 변경할지 결정
  - 값 : 어떻게 스타일 기능을 변경할지 결정

```html
h1 {
  color: blue;
  font-size: 15px;
}
```

- `h1` : 선택자 - selector
- `color: blue` : 선언 - declaration
- `font-size` : 속성 - property

- `15px` : 값 - value



#### CSS 정의 방법

- 인라인(inline) : 해당 태그에 직접 style 속성 활용
- 내부 참조(embedding) : head 태그 내 `<style>`에 지정
- 외부 참조(link file) : 외부 CSS 파일을 `<head>`  내 `<link>`를 통해 불러오기



---

### CSS Selectors

- HTML 문서에서 특정 요소를 선택해 스타일링 하기 위해서는 선택자 개념이 필요
- 기본 선택자
  - 전체 선택자 : `*`로 시작
  - 요소 선택자 : HTML 태그를 직접 선택
  - 클래스 선택자 : `.`으로 시작하며, 해당 클래스가 적용된 모든 항목을 선택
  - 아이디 선택자 : `#`으로 시작하며, 해당 아이디가 적용된 모든 항목을 선택(단일 id 사용을 권장 Unique) 
  - 속성 선택자
- 결합자
  - 자손 결합자, 자식 결합자
  - 일반 형제 결합자, 인접 형제 결합자
- 의사 클래스/요소(pseudo class)
  - 링크, 동적 의사 클래스
  - 구조적 의사 클래스



#### CSS 적용 우선순위 - cascading order

1. 중요도 : !important
2. 우선순위: 인라인 > id 선택자 > class 선택자 > 요소 선택자
3. 소스순서



#### CSS 상속

- CSS는 상속을 통해 부모 요소의 속성을 **모두** 자식에게 상속
  - 속성 중에는 상속이 되는 것과 되지 않는 것들이 있음





### CSS 단위

#### 크기 단위

- 픽셀 - 고정적인 단위
- % - 백분율 단위
- em - 배수 단위
  - 상속의 영향을 받음
  - 요소에 지정된 사이즈에 상대적 사이즈를 가짐
- rem - 배수 단위
  - 상속의 영향 받지 않음
  - 최상위 요소(html)의 사이즈를 기준으로 함
- viewport
  - 유저에게 바로 보이게 되는 웹 컨텐츠의 영역
  - 디바이스의 viewport를 기준으로 상대적인 사이즈가 결정됨
  - vw, vh, vmin, vmax, ...



#### 색상 단위

- 색상 키워드 : 특정 색 글자로 표기 (대소문자 구분없음)
- RGB : 16진수 표기법(`#` + 16진수 표기) or 함수형 표기법(`rgb()` 함수형 표기)
- HSL : 색상, 채도, 명도 지정

```bash
# 검은색 표기
p { color: black; }
p { color: #000; }
p { color: #000000; }
p { color: rgb(0, 0, 0); }
p { color: hsl(120, 100%, 0); }

p { color: rgba(0, 0, 0, 0.5); }
p { color: hsla(120, 100%, 0.5); }
## a는 alpha(투명도) 추가
```



#### CSS 문서 표현

- 텍스트
  - 변형 서체 : <b>, <i>, <strong>, <em>
- 컬러, 배경 : color, background-image, background-color

- 목록 꾸미기



### Selectors 심화

#### 결합자 - Combinators

- 자손 결합자 : ex)`div span`
  - selector A 하위의 모든 selector B 요소
- 자식 결합자 : ex)`div > span`
  - selector A 바로 아래 selector B 요소
- 일반 형제 결합자 : ex)`p ~ span`
  - selector A 형제 요소 중 뒤에 위치하는 selector B 요소를 모두 선택
- 인접 형제 결합자 : ex)`p + span`
  - selector A 형제 요소 중 바로 뒤에 위치하는 selector B 요소를 선택



### Box model

- 모든 HTML 요소는 box 형태로 이루어짐
- margin : 테두리 바깥의 외부 여백, 배경색 지정 불가
- border : 테두리 영역
- padding : 테두리 안쪽의 내부 여백, 요소에 적용된 배경색, 이미지는 padding까지 적용
- content : 글이나 이미지 등 요소의 실제 내용
- shorthand 통해 표현 가능



#### box-sizing

- 기본적으로 모든 요소의 box-sizing은 content-box
- border까지의 너비를 조절하고자 하는 경우 box-sizing을 border-box로 설정



#### 마진 상쇄

- 두 block에 적용된 각각의 margin이 둘 중 큰 margin값으로 결합(겹쳐지게)되는 현상



### CSS Display

- HTML 요소들을 시각적으로 어떻게 보여줄지 결정하는 속성
- `display: block` 
  - 줄 바꿈이 일어나는 요소
  - 화면 크기 전체의 가로 폭을 차지
  - 블록 레벨 요소 안에 인라인 레벨 요소가 들어갈 수 있음
  - div / ul, ol, li / p / hr / form
- `display: inline`
  - 줄 바꿈이 일어나지 않는 행의 일부 요소
  - content 너비만큼 가로 폭을 차지
  - width, heigh, margin-top, margin-bottom을 지정 불가
  - 상하 여백은 line-height로 지정
  - span / a / img / input, label / b, em, i, strong
- `display: inline-block`
  - block과 inline 레벨 요소의 특징을 모두 가짐
  - inline처럼 한 줄에 표시 가능
  - block처럼 width, height, margin 속성을 모두 지정 가능
- `display: none`
  - 해당 요소를 화면에 표시하지 않음(공간도 사라짐)
  - 이와 비슷한 `visibility: hidden`의 경우, 화면에 표시되지 않으나 공간을 차지



### CSS Position

- 문서 상에서 요소를 배치하는 방법을 지정
- `static` : 모든 태그의 기본값(기준 위치)
  - 일반적인 요소의 배치 순서에 따름(좌측 상단)
  - 부모 요소 내에서 배치될 때는 부모 요소의 위치를 기준으로 배치됨
- 아래는 좌표 프로퍼티(`top`, `bottom`, `left`, `right`) 사용해 이동 가능(음수 가능)
  - `relative` : 상대 위치 (자신의 static 위치 기준 이동)
  - `absolute` : 절대 위치 (가장 가까이 있는 부모/조상 요소 기준 이동)
  - `fixed` : 고정위치 (스크롤 시에도 항상 같은 곳 위치)



# 기타

- 학습 가이드라인 : MDN web docs
- Emmet : 신속한 마크업을 위해 사용되는 오픈소스