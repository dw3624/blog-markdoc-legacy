---
title: type과 interface
tags: typescript
---

typescript 사용해 모 프로젝트 진행중 궁금증이 생겼습니다.
typescript에는 type과 interface라는 타입 정의 방식이 있는데 이 둘의 차이가 뭔지 명확히 설명할 수 없어 정리하기로 했습니다.


# Interface
interface는 구조를 정의할 때 사용
```javascript
interface Sample {
  name: string;
  age: number;
  isAdult: boolean;
}
const user: Sample {
  name: 'atom';
  age: 10;
  isAdult: false;
}
```

# Type
type은 타입 명칭을 정의할 때 사용
```javascript
type Sample = {
  name: string;
  age: number;
  isAdult: boolean;
}
const user: Sample{
  name: "atom";
  age: 10;
  isAult: false;
}
```

# Interface와 Type의 차이
| 구분 | interface | type |
| :--: | :--: | :--: |
| 확장 | ○ | × |
| 계승 | ○ | × |

※ interface는 Object 클래스 형태만 정의 가능


## 확장
interface는 확장 가능하며 덮어쓰기 가능
### interface
```javascript
interface Window {
  title: string
}

interface Window {
  ts: TypescriptApi
}

const src = 'const a = "hello world"';
window.ts.transpileModule(src, {})
```
### type
```javascript
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
```

## 계승
interface는 계승 가능
### interface
```javascript
interface User{
  name: string;
  age: number;
}
interface Test extends User{
  English: number;
  Math: number;
}
const Student: Test{
  name: taro;
  age: 10;
  English: 50;
  Math: 80;
}
```
### type
```javascript
interface User{
  name: string;
  age: number;
}
interface Test extends User{
  English: number;
  Math: number;
}
const Student: Test{
  name: taro;
  age: 10;
  English: 50;
  Math: 80;
}
```

# [공식 문서](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types)
> For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type.

- 선호도 따라 사용 가능
- heuristic 원한다면 interface 위주로 사용하고 필요시 type 사용
