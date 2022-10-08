---
title: Git Bash 설치하기 (Windows)
tags: git 기타
---

Git Bash : OS에 종속되지 않은, Linux 기반 터미널용 Git


### 1. 설치파일 다운로드
[git 홈페이지](https://git-scm.com/)에서 OS에 맞는 파일을 다운로드한다.  
우측하단의 Download 2.31.1 for Windows (2021.6.7 기준)를 선택.


### 2. 약관동의
git 라이센스인 GNU 일반 공중 사용 허가서에 동의하고 다음으로 넘어간다.
 - GNU 일반 공중 사용 허가서 : 소프트웨어의 실행, 연구, 공유, 수정의 자유를 최종 사용자에게 보장한다. 그러나 이 라이센스가 적용된 소프트웨어를 변형하면 변경된 컴퓨터 프로그램 역시 반드시 똑같은 라이선스를 취해야 한다.


### 3. Git Components
<center><img src="{{site.url}}/assets/images/210608/b1.png" width="60%" height="60%"></center>

### 4. Git Editor
기본으로 사용할 IDE를 설정한다.  
취향따라 선택하면 되나 만약 IDE가 없는 경우 Use Vim (the ubiquitous text deditor) as Git
s default editor를 선택.  
<center><img src="{{site.url}}/assets/images/210608/b2.png" width="60%" height="60%"></center>  
 - IDE(Integrated Development Environment) : 프로그램 개발에 관련된 모든 작업을 하나의 프로그램 안에서 처리하는 환경을 제공하는 소프트웨어.


### 5. Initial branch repository명
새로운 저장소(Git repository)를 만들 때 생성되는 브랜치명을 설정한다.  
<center><img src="{{site.url}}/assets/images/210608/b3.png" width="60%" height="60%"></center>  
git의 기본 repository명이 master에서 main으로 바뀌었기 때문에 후자로 커스텀 설정.
 - 브랜치 : 저장소 안의 독립적인 작업 영역

### 6. PATH environment
path(환경변수)를 설정한다.  
<center><img src="{{site.url}}/assets/images/210608/b4.png" width="60%" height="60%"></center>  
 - use git from git bash only : 
     - git bash(git 전용 cmd창)에서만 git을 사용할 경우
 - use git from the windows cmd : 
     - 다른 소프트웨어(Windows command prompt 등)에서도 git을 사용할 경우
 - use Git and optional Unix tools from the Command Prompt : 
     - Windows cmd에서 유닉스 도구와 git을 사용할 경우(충돌 우려 있음)

### 7. SSH
<center><img src="{{site.url}}/assets/images/210608/b5.png" width="60%" height="60%"></center>  

### 8. Line Ending Conversions
개행(줄바꿈) 표시 방식을 설정한다.  
<center><img src="{{site.url}}/assets/images/210608/b6.png" width="60%" height="60%"></center>  

### 9. Terminal Emulator to use with
git bash를 사용할 터미널 에뮬레이터를 설정한다.  
<center><img src="{{site.url}}/assets/images/210608/b7.png" width="60%" height="60%"></center>  

### 10. git pull
Default (fast-forward or merge) 선택

### 11. Extra Options
Enable File system caching 선택

### 12. Credential Helper
Git Credential Manager Core 선택

### 13. Experimental Options
<center><img src="{{site.url}}/assets/images/210608/b8.png" width="60%" height="60%"></center>  
실험적인 추가기능은 선택하지 않고 진행.

### 14. 설치확인
git bash로 들어가 git --version을 입력, 아래와 같이 버전이 출력되면 설치 완료.
<center><img src="{{site.url}}/assets/images/210608/b9.png" width="80%" height="80%"></center>  

---