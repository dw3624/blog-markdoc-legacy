---
title: HTML 입력폼 작성 가이드
date: '2022-12-12'
desc: ''
tags: html
---

## 개요
웹서비스 개발시 입력폼을 종종 사용하게 됩니다.
다만 조잡한 입력폼은 유저로 하여금 거부감을 들게 하는 경우가 있습니다.
이를 해결하기 위해 입력폼 최적화(`Entry Form Optimization`)를 고려해 볼 수 있습니다.


## 자동입력 기능 대응하기
크롬과 Safari에는 폼에 연락처를 자동입력하는 기능이 있습니다.
각 브라우저에서 설정을 추가해 해당 기능을 사용할 수  있습니다.
자동입력 기능에 대응한 입력폼이라면, 입력에 대한 부담도 줄어 UX 개선에 도움이 됩니다.

### `autocomplete` 속성 설정하기
```html
<input type="text" name="name" autocomplete="name" />
```
`input` 요소에 `autocomplete` 속성을 추가해 자동입력 기능을 설정할 수 있습니다. 사용자는 브라우저에 등록한 정보를 자동으로 입력할 수 있습니다. 대표적인 항목은 아래와 같습니다.
- `name`
- `family-name`
- `given-name`
- `email`
- `address-level1`
- `address-level2`
- `address-line1`
- `address-line2`
- `organization`
- `off`

이외에도 생일이나 성별, 신용카드 정보 등의 항목도 설정할 수 있습니다. 자세한 내용은 WHATWG가 제공하는 `WHATWG Standard`의 [AutoFill](https://html.spec.whatwg.org/multipage/forms.html#autofill)에서 확인할 수 있습니다.


### 적절한 `name` 속성값 사용하기

**⛔ Bad**
```html
<input type="text" name="ABCD" />
```

**✅ Good**
```html
<input type="text" name="postal-code" autocomplete="postal-code" />
```

`autocomplete` 속성이 설정되지 않은 경우, 브라우저는 `name` 값을 참조해 자동입력할 정보를 판단하는 경우가 있습니다. 따라서 적절한 명칭을 설정하는게 바람직합니다.



## 적절한 키보드 설정하기

스마트폰으로도 많은 유저가 입력폼을 사용합니다. 이 때 입력항목에 따라 적절한 키보드를 지정 설정해 UX를 향상할 수 있습니다. 키보드 지정 방법은 다음과 같습니다.
- `type` 속성 사용
- `inputmode` 속성 사용


### 메일 주소

```html
<input type="email" name="email" autocomplete="email" />
```

`type="email"`을 설정할 경우 iOS에서는 US 키보드가 열리며 `space` 옆에 `@`나 `.`버튼이 표시됩니다.


### 전화번호

```html
<input type="tel" name="tel" autocomplete="tel" />
```

`type="tel"`의 경우 숫자 키보드가 열립니다.


### 영문자
```html
<input name="username" type="text" autocomplete="username" autocorrect="off" autocapitalize="off" />
```

iOS 영문자 입력의 경우 자동 대문자 (`Auto Capitalize`)나 맞춤법 검사 (`Auto Correct`) 기능이 작동합니다. 문장이나 글을 작성할 때는 편리할 수 있지만, 사용자 이름 등을 입력해야하는 입력폼에서는 방해가 될 수 있습니다. `autocorrect="off"`와 `autocapitalize="off"`를 설정해 해당 기능을 무효화할 수 있습니다.


### 기타
`input` 태그의 `type` 속성은 설정이 간편하지만 지정할 수 있는 옵션에 제한이 있습니다. 반면 `inputmode` 속성을 이용하면 키보드 종류를 자유롭게 지정할 수 있습니다.

```html
<input type="text" inputmode="url" />
```


## 페이지 이탈 시 알림 표시하기

폼 입력 중 의도치 않게 창을 잘못 꺼버리는 일이 이따금씩 있습니다. 아래와 같이 JavaScript를 설정해 화면 이탈 시 경고를 표시할 수 있습니다.

```javascript
window.addEventListener("beforeunload", function(e) {
	const confirmationMessage = "입력 내용을 삭제합니다.";
	e.returnValue = confirmationMessage;
	return confirmationMessage;
});
```


## 출처
- [Stefan Judis Twitter](https://twitter.com/stefanjudis/status/1296749635290234882)
- [MDN-inputmode](https://developer.mozilla.org/ko/docs/Web/HTML/Global_attributes/inputmode)
- [今どきの入力フォームはこう書く！](https://ics.media/entry/11221/)