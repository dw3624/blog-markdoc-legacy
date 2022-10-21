---
title: 호이스팅
desc: 변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는 것
date: "2022-10-19"
tags: frontend 기술면접
---


## 호이스팅 개요
인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 말합니다. 다시 말해 **"변수의 선언과 초기화를 분리한 후, 선언만 코드의 최상단으로 옮기는 것"**을 가리킵니다. JS Parser 내에서 이뤄지기 때문에 실제 메모리 변화는 없습니다.

Javascript는 함수 코드 실행에 앞서 선언에 대한 메모리를 우선 할당할 수 있습니다. 이에 함수 선언을 함수 호출보다 먼저 배치할 수 있습니다.
```javascript
function hello(name) {
  console.log('hello' + name);
};

hello("John");

/*
hello John
*/
```
위가 함수 선언 후 호출하는 일반적인 코드 작성 순서입니다.

```javascript
hello("John");

function hello(name) {
  console.log('hello' + name);
};

/*
hello John
*/
```
함수 호출이 선언보다 앞서지만 정상적으로 동작합니다.


## 호이스팅 대상
Javascript는 초기화를 제외한 선언만 호이스팅합니다.

```javascript
console.log(num); // undefined 출력

var num; // 선언
num = 9; // 초기화
```

위 예시와 달리 아래 예시에는 초기화만 있습니다. 따라서 호이스팅이 일어나지 않아 `ReferenceError`가 발생합니다.

```javascript
console.log(num); // ReferenceError

num = 9; // 초기화
```

## 함수선언문과 함수표현식
함수표현식은 함수선언문과 달리 선언과 호출 순서에 따라 정상적으로 함수가 실행되지 않을 수 있습니다. 이는 함수표현식에서 선언과 할당이 분리되기 때문입니다.

### 정상 출력
함수표현식 선언이 호출보다 위에 있는 경우
```javascript
function outer() { // 함수선언문
  var inner = function () { // 함수표현식
    return "inner value";
  }
  var res = inner(); // 함수 호출
}


/* JS Parser 내부 호이스팅 결과 */
function outer() {
  var inner; // 함수표현식의 변수값 선언
  var res; // var 변수값 선언

  inner = function () { // 함수표현식 할당
    return "inner value";
  }
  var res = inner(); // 함수 호출
}
```

### 오류
함수표현식 선언이 호출보다 아래에 있는 경우 - TypeError
- `outer()`가 실행될 때 `inner`에는 `undefined`가 할당됩니다.
```javascript
function outer() { // 함수선언문
  var res = inner(); // "undefined": 선언은 돼 있지만 값이 할당되지 않은 상태
  var inner = function () { // 함수표현식
    return "inner value";
  }
}

outer(); // > TypeError: inner is not a function


/* JS Parser 내부 호이스팅 결과 */
function outer() {
  var inner; // 함수표현식 변수값 선언
  var res = inner(); // "undefined"
  inner = function () {
    return "inner value";
  }
}

outer(); // > TypeError: inner is not a function
```

함수표현식 선언이 호출보다 아래 있는 경우
- inner에 대한 선언이 돼있지 않아 오류가 발생합니다.
```javascript
function outer() { // 함수선언문
  let res = inner();
  let inner = function () { // 함수표현식
    return "inner value";
  }
}

outer(); // > ReferenceError: inner is not defined
```


## `let`과 `const` 호이스팅
`let`과 `const `로 선언한 변수도 호이스팅 대상입니다. 다만 `var`와 달리 `undefined `로 초기화하지 않습니다. 따라서 초기화 수행 전에 읽는 코드가 나오면 예외가 발생합니다.
- `var` : 호이스팅 시 `undefined`로 변수 초기화
- `let`, `const` : 호이스팅 시 변수 초기화하지 않음
> `let`, `const` 사용시에도 호이스팅은 일어나지만 메모리 공간만 할당하는 선언만 이뤄집니다. 해당 코드가 실행되기 전까지 초기화 과정이 이뤄지지 않기 때문에 참조 대상이 없는 상태가 돼 reference error가 발생하게 됩니다. 따라서 `var`선언문과 함수선언문에서만 실질적인 호이스팅 효과가 나타납니다.


## 주의사항
코드 가독성과 유지보수를 위해 호이스팅은 일어나지 않도록 하는게 바람직합니다.
- 함수와 변수는 가급적 코드 상단부에 선언하도록 합니다.
- `let`과 `const`를 사용하도록 합니다.
