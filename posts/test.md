---
title: First post
description: First post.
date: '2023-4-14'
tags:
  - SvelteKit
  - Svelte
published: true
---

## TOC

## MVC (Model-View-Controller)

사용자는 View를 통해 명령을 입력합니다. Controller가 Input을 처리해 Model에 전달합니다. Model은 명령에 따라 View를 업데이트합니다.

- Model: 데이터와 로직 관리
- View: 레이아웃과 화면 처리
- Controller: Model과 View에 명령 라우팅 (Model과 View 중개)

### 장점

- 동시다발적 개발 가능
- 높은 응집도
- 개발용이성 (책임 구분으로 )

### 단점

- Controller가 다수의 View를 선택할 수 있어, 하는 일이 너무 많아질 수 있음
- 코드 일관성 유지에 노력이 필요
- View와 Model 사이 의존성 높음 (규모 커질수록 유지보수 어려워짐)

## Markdown

Hey friends! 👋

This is `inline code`

```ts
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```ts showLineNumbers
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```ts showLineNumbers{3}
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```ts {1-2, 4, 6}
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}

function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```ts /greet/2-3
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}

function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```js /blue/3#b /yellow/1-2#y
blue, yellow, blue, yellow, blue, yellow;
```

```ts title="testcode"
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
}
```

```ts:text.ts
function greet(name: string) {
  console.log(`Hey ${name}! 👋`);
};
```

```bash
this is a test code. this is a test code. this is a test code. this is a test code. this is a test code. this is a test code. this is a test code.
```

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Emphasis

**This is bold text**

_This is italic text_

Strikethrough

## Blockquotes

> Develop. Preview. Ship. – Vercel

## Lists

Unordered

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

## Test table

| Left | Center | Right |
| ---- | :----: | ----: |
| ss2  |  333   |  3232 |
|      |  222   |  3232 |
|      |   23   |       |

| Left | Center | Right | Right | Right | Right | Right | Right | Right | Right |
| ---- | :----: | ----: | ----: | ----: | ----: | ----: | ----: | ----: | ----: |
| ss2  |  333   |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |
|      |  222   |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |  3232 |
|      |   23   |       |       |       |       |       |       |       |       |

## Some links

- [taxonomy by shadcn](https://tx.shadcn.com/blog/preview-mode-headless-cms)
- [taxonomy by shadcn](https://tx.shadcn.com/blog/preview-mode-headless-cms)
- [taxonomy by shadcn](https://tx.shadcn.com/blog/preview-mode-headless-cms)
