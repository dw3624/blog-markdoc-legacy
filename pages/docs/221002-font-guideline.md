---
title: 반응형 웹서비스의 폰트 사이즈 가이드라인
tags:  UI
---

## 배경
 figma로 와이어프레임 제작 중 여러 궁금증이 생겼습니다. 그 중 하나가 **어느 정도의 폰트 사이즈가 적절한지**였습니다.

 설계 땐 작아보이던 폰트가 실제 화면크기로 보니 생각보다 크거나 반대의 경우도 더러 있었습니다. 이에 사이즈 기준이 있는지 관련된 내용을 찾아 정리해봤습니다.


## 모바일 타이포 가이드라인
모바일 폰트 사이즈에 절대적인 기준은 없습니다.

### body fonts should be about 16px
- 16px
  - good place to start for default mobile font size
- 더 작은 사이즈 고려
  - interaction-heavy page
  - 크고 읽기 좋은 글씨체
- 더 큰 사이즈 고려
  - text-heavy page
  - 비교적 읽기 어려운 폰트

### text input sizes should be at least 16px
- 16px 미만인 경우 iOS 브라우저에서 입력창 선택시 자동으로 확대됨

### secondary should be about 2sizes smaller than your paragraph text
- 13px, 14px


## 데스크탑 타이포 가이드라인
사이트 분류
- 문자 메인
  - 정보 전달이 주목적
- 인터렉션 메인
  - 주기능이 호버, 클릭, 클릭, 편집 등 여러 동작 수행을 수반

### Text-Heavy Pages
- 16px
  - minimum
- 18px
  - better font size to start with
- 20px 이상

### Interaction-Heavy Pages
폰트 크기는 탑다운으로 작아져야

### as few font sizes as possible
총 4개 정도

- header
  - biggest
- default
  - most common font size
- secondary
  - usually 2pt smaller than default
- tertiary, caption, label, wildcard
  -
