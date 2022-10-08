---
title: ECMAScript6
tags: javascript
---


ECMA

- 정보통신에 대한 표준을 제정하는 비영리 표준화 기구
- ECMAScript : ECMA에서 ECMA-262 규격에 따라 정의한 언어
  - ECMA-262 : 범용적인 목적의 프로그래밍 언어에 대한 명세
  - JavaScript는 ECMAScript 사양을 준수하는 범용 스크립트 언어



코딩 스타일 가이드

- 합의된 원칙과 일관성
- 코드의 품질에 직결되는 중요한 요소 (가독성, 유지보수, 커뮤니케이션 등)
- [Airbnb](https://github.com/airbnb/javascript), [Google](https://google.github.io/styleguide/jsguide.html), [standardjs](https://standardjs.com/#javascript-style-guide-linter-and-formatter)





변수와 식별자

식별자

- 변수를 구분할 수 있는 변수명
- 문자, `$`, `_`로 시작
- 대소문자를 구분, 클래스명 외에는 모두 소문자로 시작
- 예약어(`for`, `if`, `case` 등)

작성 스타일

- camelCase, lower-camel-case
  - 변수, 객체, 함수
- PascalCase, upper-camel-case
  - 클래스, 생성자
- SNAKE_CASE
  - 상수



- 선언
  - 변수를 생성하는 행위, 시점
- 할당
  - 선언된 변수에 값을 저장하는 행위, 시점
- 초기화
  - 선언된 변수에 처음으로 값을 저장하는 행위, 시점

```javascript
let foo		// 선언
console.log(foo)	// undefined

foo = 11	// 할당
console.log(foo)	// 11

let bar = 0	// 선언+할당
console.log(bar)	// 0
```



변수 선언 키워드

| `const` | `let` | `var` |
| - | - | - |
| 변수 선언 (재할당 불가능) | 변수 선언 (재할당 가능) | 변수 선언 (재할당 가능)|
| 변수 재선언 불가능 | 변수 재선언 불가능 | 변수 재선언 가능 |
| 블록 스코프 | 블록 스코프 | 함수 스코프 |
| ES6부터 도입 | ES6부터 도입 | 현재 사용하지 않음 |

- 블록 스코프 : `if`, `for`, `함수` 등의 중괄호 내부
- 함수 스코프 : 함수의 중괄호 내부
- `var`

  - `var`로 선언한 변수는 재선언 및 재할당 모두 가능
  - ES6 이전의 변수선언에서 사용되던 키워드
  - 호이스팅되는 특성으로 문제 발생 가능
    - 호이스팅 : 변수를 선언 이전에 참조할 수 있는 현상





JavaScript 데이터 타입

- 원시 타입 - Primitive type
  - 객체가 아닌 기본 타입
  - 변수에 해당 타입 값이 담김
  - 다른 변수에 복사할 때 실제 값이 복사됨
- 참조 타입 - Reference type
  - 객체 타입의 자료형
  - 변수에 해당 객체의 참조값이 담김
  - 다른 변수에 복사할 때 참조값이 복사됨



원시 타입

- 숫자 타입 - Number
  - 정수, 실수 구분 없는 하나의 숫자 타입
  - 부동소수점 형식
  - NaN : 계산 불가능한 경우 반환되는 값
- 문자열 타입 - String
  - 텍스트 데이터
  - 16비트 유니코드 문자 집합
  - 작은따옴표/큰따옴표 모두 가능
  - 템플릿 리터럴
    - 따옴표 대신 `으로 표현
    - `${ expression }`형태로 표현식 삽입 가능
- undefined
  - 빈 값
  - 변수 선언 이후 값을 할당하지 않으면 undefined 자동할당
  - typeof 결과 undefined
- null
  - 빈 값
  - 의도적으로 할당
  - typeof 결과 object
- Boolean
  - 논리적 참 또는 거짓을 나타내는 타입
  - `true` / `false`
  - 조건문 또는 반복문에서 유용하게 사용
- `typeof`  : 자료형 평가를 위한 연산자, 결과는 객체로 표현됨





연산자

- 할당 연산자
- 비교 연산자
- 동등 비교 연산자 `==`
  - 타입을 일치시킨 후 같은 값인지 비교
  - 일반적으로 사용하지 않음
- 일치 비교 연산자 `===`
  - 엄격한 비교 : 비교 대상의 타입과 값 모두 같은지 비교
- 논리 연산자
  - and : `&&`
  - or : `||`
  - not : `!`
- Ternary Operator
  - 세 개의 피연산자를 사용하여 조건에 따라 값을 반환하는 연산자
  - 가장 왼쪽의 조건식 참이면 `:`의  앞 값을 사용하고, 그렇지 않으면 `:` 뒤 값을 사용
  - 삼항 연산자의 결과는 변수에 할당 가능





조건문

- if statement
  - 조건 표현식 결과값을 Boolean 타입을 변환 후 참/거짓을 판단
- switch statement
  - 조건 표현식의 어느 값에 해당하는지 판별
  - 주로 특정 변수의 값에 따라 조건을 분기할 때 활용
  - 조건 많은 경우 if문보다 가독성이 나을 수 있음

```javascript
if (condition) {
    // do something
} else if (condition) {
    // do something
} else {
    // do something
}

switch(expression) {
    case 'first value': {
        // do something
    }
    case 'second value': {
        // do something
        break
    }
    default: {
	    //do something
    }
}
```



반복문

- while
- for
- for ... in
  - 주로 객체의 속성들을 순회할 때 사용
  - 배열 순회도 가능하나 인덱스 순으로 순회한다는 보장 없어 권장하지 않음
- for ... of
  - 반복 가능한 객체를 순회하며 값 꺼낼 때 사용

```javascript
while (condition) {
    // do something
}

for (initialization; condition; expression) {
    // do something
}

for (variable in object) {
    // do something
}

for (variable of iterables) {
    // do something
}
```





함수

- function 타입

- JavaScript 함수 정의법
  - 함수 선언식 - function declaration
  - 함수 표현식 - function expression



함수 선언식

- 함수의 이름과 함께 정의하는 방식
- 3가지 부분으로 구성
  - 함수의 이름
  - 매개변수
  - 몸통



함수 표현식

- 함수를 표현식 내에서 정의
- 익명함수 정의 가능
- 3가지 부분으로 구성
  - 함수의 이름
  - 매개변수
  - 몸통



화살표 함수 - Arrow function

- 함수를 비교적 간결하게 정의할 수 있는 문법
- function 키워드 생략 가능
- 매개변수가 하나뿐이라면 `()`도 생략 가능
- 함수 몸콩이 표현식 하나라면 `{}`과 `return`도 생략 가능





배열

- 키와 속성을 담고 있는 참조 타입의 객체
- 순서를 보장
- 주로 대괄호 이용해 생성, 0을 포함한 양의 정수 인덱스로 특정값에 접근 가능
- 배열의 길이 : `array.length`



주요 메서드 목록

```
reverse : 원본 배열의 요소들의 순서를 반대로 정렬
push & pop : 배열의 가장 뒤에 요소를 추가 또는 제거
unshift & shift : 배열 가장 앞에 요소를 추가 또는 제거
includes : 배열에 특정값이 존재하는지 판별 후 참/거짓 반환
indexOf : 배열에 특정값이 존재하는지 판별 후 인덱스 반환 (요소 없는 경우 -1 반환)
join : 배열의 모든 요소를 구분자를 이용해 연결 (구분자 생략 시 쉼표 기준)

// 메서드 호출시 callback 함수를 받음
forEach : 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행
map : 콜백 함수의 반환값을 요소로 하는 새로운 배열 반환
filter : 콜백 함수의 반환값이 참인 요소들만 모아서 새로운 배열을 반환
reduce : 콜백 함수의 반환값들을 하나의 값에 누적 후 반환
find : 콜백 함수의 반환값이 참이면 해당 요소를 반환
some : 배열의 요소 중 하나라도 판별 함수를 통화하면 참을 반환
every : 배열의 모든 요소 판별 함수를 통과하면 참을 반환
```





객체

- 속성의 집합, 중괄호 내부에 key와 value의 쌍으로 표현
- key : 문자열 타입만 가능
- vlaue : 모든 타입 가능

- 점/대괄호로 객체 요소 접근 가능



객체 관련 문법

- 속성명 축약
  - key와 할당하는 변수의 이름이 같으면 축약 가능

- 메서드명 축약
  - 메서드 선언시 function 키워드 생략 가능

- 계산된 속성
  - 객체를 정의할 때 key의 이름을 표현식을 이용해 동적으로 생성 가능

- 구조 분해 할당
  - 배열 또는 객체를 분해해 속성을 변수에 쉽게 할당할 수 있는 문법



JSON - JavaScript Object Notation

- key-value 쌍의 형태로 데이터를 표기하는 언어 독립적 표준 포맷
- 문자열 타입
- `JSON.parse()` : JSON => 자바스크립트 객체
- `JSON.stringfy()` : 자바스크립트 객체 => JSON
