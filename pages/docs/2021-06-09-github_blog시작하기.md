---
title: GitHub Blog 시작하기
tags: git 기타
---

### 1. Repository 작성
 github에서 블로그용 repository 작성
- [본인아이디].github.io로 작성
    - 예) dw3624.github.io


### 2. 로컬로 가져오기
 새로 만든 repository를 로컬 PC로 복사  
<center><img src="{{site.url}}/assets/images/git/remote.png" width="80%" height="80%"></center>  
```
# 임의의 폴더 우클릭 후 Git Bash Here
git clone [repository 주소]   # 블로그용 폴더 자동생성
cd [repository 폴더명]
git init
git remote   # origin 출력 확인
```


### 3. 테마 입히기
#### (1) 테마 다운로드
- [지킬 테마 사이트](http://jekyllthemes.org/)에서 마음에 드는 테마 다운로드.
 - 테마 별로 다운로드 방법이 다르거나 추가 설치 파일 등이 있을 수 있으므로, 각 테마의 description따라 진행.
- 다운받은 압축폴더를 풀고 내용물을 블로그용 폴더에 복사.

#### (2) bundle 설치
```
# 블로그용 폴더에서 gitbash
gem instal bundler
bundle install
```


### 4. 반영하기
#### (1) 임시확인
 생성한 웹페이지 로컬에서 확인
```
# 블로그용 폴더에서 gitbash
bundle exec jekyll serve
```
 Server running... press ctrl-c to stop 메시지가 나온 상태에서 Server address를 웹페이지 주소창에 입력, 이동.


#### (2) 최종반영
 로컬 PC에서 작업한 변경점을 repository로 최종 반영
```
# 블로그용 폴더에서 gitbash
git add .   # 변경점 모두(.) 추가 
git commit -m "Theme changed"   # 메시지로 변경점 기록, github에도 반영됨
git push origin main    # repository에 최종 반영
```

---