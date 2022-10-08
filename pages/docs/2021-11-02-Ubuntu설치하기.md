---
title : 가상머신에 Ubuntu(64bit) 설치하기
tag : 리눅스
---



 VMWare에서 리눅스 실행 후, Ubuntu를 설치하려는데, 하단 일부가 잘려, `계속하기`가 보이지 않았다. 찾아보니 해상도 관련 이슈로, 설치에 앞서 이를 변경할 필요가 있다고 한다.



### 해상도 변경

- Ubuntu 체험하기 → 좌측하단 메뉴 → display 검색 → Displays 항목 → Resolution 변경 후 Apply → Keep Changes

- 이후 바탕화면의 Ubuntu LTS 설치 아이콘 클릭, 실행



### Ubuntu(64bit) 설치

- 언어 선택 : 한국어

- 키보드 레이아웃 : 한국어-한국어(101/104키 호환)

- 업데이트 및 기타 소프트웨어 : 

  - 일반 설치

  - Ubuntu 설치중 업데이트 다운로드

- 설치형식 : 디스크 지우고 Ubuntu 설치 → 지금 설치 → 계속하기

- 거주 지역 설정 : Seoul

- 사용자 정보 입력
- 설치 완료 후 다시 시작







sudo : 다른 사용자의 보안 권한이나 슈퍼유저로서 프로그램을 구동할 수 있도록 수행하는 명령어



한글 입력방식 설정

우분투 리눅스에서 한글을 사용하기 위해서는 언어선택과 설정 패키지 프로그램 설치해야 함

reboot명령으로 설치한 프로그램이 리눅스 시스템에 적용되도록 재부팅

```bash
user@ubuntu:~$ sudo apt-get update && sudo apt-get install language-selector-gnome gnome-tweaks gnome-shell-extensions net-tools
user@ubuntu:~$ reboot
```

