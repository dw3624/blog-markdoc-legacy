---
title: NLP 환경 설치하기
tags: nlp python 기타
---

## 1. 아나콘다 설치
 관련 패키지를 다운받기 앞서 아나콘다를 설치합니다([이전 포스팅](https://dw3624.github.io/2021/04/05/%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EC%84%A4%EC%B9%98.html#2-%EC%95%84%EB%82%98%EC%BD%98%EB%8B%A4-%EC%84%A4%EC%B9%98) 참고).
 이미 설치된 경우 다음 단계로 넘어갑니다.
  

## 2. JAVA 1.7 이상 설치
### 2-1. java 설치
 아래 java 홈페이지로 들어가 jdk-8u201-windows-x64 더블클릭 후 설치합니다.     <https://www.oracle.com/technetwork/java/javase/downloads/index.html>

### 2-2. 환경설정
#### 1) 시스템 변수
 탐색기 > 내 PC (우클릭) > 속성 > 고급 시스템 설정 > 환경 변수 > 시스템 변수 > 새로 만들기 >  
 변수 이름 : JAVA_HOME, 변수 값 : C:\Program Files\Java \jdk1.8.0_201

#### 2) 사용자 변수
 환경변수 > 사용자 변수 > Path > 편집 > 새로 만들기 > %JAVA_HOME%\bin
  
  
 이후 터미널 창에서 java -version 명령을 내렸을 때 java jdk 버전 정보가 나타나면 설치 성공입니다.


## 3. JPype 다운로드
 아래 URL에서 JPype whl 파일을 설치합니다.  
 <https://www.lfd.uci.edu/~gohlke/pythonlibs/#jpype>
  
 * JPype 버전 중 cp는 파이썬 버전, win32와 win_amd64는 각각 OS bit를 말합니다.  
 * python 3.8 버전, Windows 64bit를 사용하는 경우 cp38-win amd64 버전을 다운받습니다.  
 * 참고로 파이썬 버전은 cmd에서 python -V로 확인할 수 있습니다.
 * wheel이 설치돼있지 않은 경우 pip install wheel로 설치합니다.
  
 다운받은 whl이 있는 경로에서 터미널 창을 켜서 pip install [본인이 다운받은 whl 파일]으로 설치합니다.
```
pip install JPype1-1.2.0-cp38-cp38-win_amd64.whl
```
  

## 4. 패키지 설치 
```
pip install konlpy
pip install wordcloud
pip install gensim
```


## 5. 기타 패키지 설치
파이썬 : 
```python
import nltk
nltk.download()
# stopwords & punkt duble cllick download
```
   

## 6. 오류
 위 과정 수행중 만약 오류가 발생하면 아래 코드를 시도해봅니다.
```
pip install -U setuptools
pip install gensim
```

---

