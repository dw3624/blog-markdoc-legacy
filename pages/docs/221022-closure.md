---
title: Closure
date: "2022-10-22"
desc: javascript 클로저에 대해
tags: javascript 기술면접
---


## Closure

[MDN 클로저 정의](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures#%EC%8B%A4%EC%9A%A9%EC%A0%81%EC%9D%B8_%ED%81%B4%EB%A1%9C%EC%A0%80)
> "A closure is the combination of a function and the lexical environment within which that function was declared."

클로저는 함수와 함수가 선언된 어휘적 환경(Lexical environment)의 조합을 말합니다.


```javascript
function outer() {
    var name = 'Mozilla';
    function inner() {
        console.log(name);
    }
    inner();
}
outer(); // Mozilla
```
`outer()` 함수 안에 내부함수 `inner()`가 선언되고 호출됐습니다. `inner()`는 자신이 속한 lexical scope(자신, `outer()`, 전역 scope)를 참조하기 때문에 `Mozilla`가 출력됩니다.

이처럼, 클로저란 **자신이 선언됐을 때의 환경인 스코프를 기억하며, 자신이 선언된 스코프 밖에서 호출되더라도 해당 스코프에 접근할 수 있는 함수**를 말합니다.

## Lexical Scoping
스코프는 함수를 호출할 때가 아닌, 어디에 선언했는지에 따라 결정됩니다. 이를 어휘적 범위(Lexical Scoping)이라 합니다. 따라서 내부함수가 외부함수 밖에서 실행되더라도 여전히 선언됐을 때의 환경(스코프)를 참조할 수 있습니다.

```javascript
function outer() {
  var x = 10;
  function inner() {
    console.log(x);
  };
  return inner;
}

var inner = outer();
inner() // 10
```
위 예시에서 `outer()`는 `inner()`를 반환한 뒤 콜스택(실행 컨텍스트 스택)에서 제외됩니다. 그러나 `outer()` 밖에서 실행된 `inner()`는 `outer()`에서 선언된 변수 x를 참조할 수 있습니다(Lexical Scoping).

```javascript
function outer() {
  var hello = "hello, ";
  function inner(name) {
    console.log(hello + name);
  };
  return inner;
}

var func1 = outer();
func1("John") // hello, John

var func2 = outer();
func2("Smith") // hello, Smith
```
위 예시에서 볼 수 있듯이 `func1`과 `func2`에 할당한 `inner()`는 서로 독립적인 스코프를 갖고 있습니다. 이처럼 **`outer()` 실행 후 `inner()`가 새 변수에 할당되면 스코프와 로컬 변수 또한 새로 생성됩니다.**

## 참고

- [MDN 클로저](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
- [5.19 Closure 클로저](https://poiemaweb.com/js-closure)
- [JavaScriptのClosure・・・元の場所のスコープって何？](https://qiita.com/soichirowada/items/c1ba0f4173cddf13ef68)
