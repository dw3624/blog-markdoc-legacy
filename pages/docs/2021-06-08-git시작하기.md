---
title: Git 시작하기
tags: git 기타
---

### 1. git
- 파일의 변경사항을 추적하고 여러 명의 사용자들 간에 해당 파일들의 작업을 조율하기 위한 분산 버전 관리 시스템.
- 소프트웨어 개발에서 소스 코드 관리에 주로 사용됨.
- 특정 파일 집합 변경사항의 지속적 추적을 위해 사용 가능.

### 2. git 프로세스
- 변경된 파일을 적용하는 데 있어, git은 아래와 같은 세 가지 단계를 거친다.
<center><img src="{{site.url}}/assets/images/git/areas.png" width="80%" height="80%"></center>  
1. Repository(원격저장소)에서 프로젝트를 복사해, Working Directory(로컬 PC)에서 파일을 변경.
    - git clone 등
2. 변경된 파일을 Staging Area에 추가.
    - git add 등
3. Staging Area에 추가된 변경점을 Repository로 Commit.
   - git commit, git push 등


### 3. git hub
- [깃허브 홈페이지](https://github.com/)
- 분산 버전 관리 툴인 git을 사용한 프로젝트를 지원하는 웹 호스팅 서비스.
- 계정 생성 후 repository(원격 저장소) 생성 가능.

### 4. git 생성하기
 git 조작 터미널은 git bash를 가정합니다.

- git 계정 정보 설정하기
```
# git bash 실행
# gitbash에서 git 계정 정보 설정
git config --global user.name "유저명"
git config --global user.email "이메일"
```

- git 저장소 생성하기
<center><img src="{{site.url}}/assets/images/git/init.png" width="80%" height="80%"></center>  
```
# git bash 실행
cd c   # 폴더 이동
cd Users
cd user
mkdir github_local   # 폴더 생성
cd github_local   # 생성한 폴더로 이동
git init   # git 저장소 생성
# 이후 해당 폴더에서 git 관련 작업 가능
```

- Repository에서 프로젝트 복사하기
<center><img src="{{site.url}}/assets/images/git/clone.png" width="80%" height="80%"></center>  
```
# git bash 실행 후 특정 폴더로 이동 혹은 특정 폴더 우클릭 후 Git Bash Here
git clone [repository 주소]   # repository 복사
cd [repository 폴더명]
git init
```

---