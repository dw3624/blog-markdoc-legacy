---
title: Python, Anaconda, Jupyter notebook 설치하기
tags: anaconda jupyternotebook python 기타
---

## 1. 파이썬 설치
1. [공식 홈페이지](https://www.python.org/downloads/)로 들어가 자신의 PC스펙과 맞는 버전을 다운로드받습니다.  
![p1](https://user-images.githubusercontent.com/62541648/113669100-33c71500-96ee-11eb-82b6-39127a540a63.png){: width="70%" height="70%"}


2. 실행하면 아래와 같은 화면이 뜹니다. Python이 PC 어느 곳에서든지 실행될 수 있도록 Add Python 3.9 to path에 체크표시를 한 후, Install Now를 누릅니다.   
![p2](https://user-images.githubusercontent.com/62541648/113667113-48ee7480-96eb-11eb-848c-d3cc45a10a11.png){: width="70%" height="70%"}   
![p3](https://user-images.githubusercontent.com/62541648/113667118-48ee7480-96eb-11eb-971e-66aeef63bb8f.png){: width="70%" height="70%"}   
  
  
3. 설치가 끝나면 아래와 같은 화면이 뜹니다.  
  Disable path length limit을 누릅니다. Windows는 파일이름과 경로 길이가 제한돼 있는데, 이 길이 제한을 없애줍니다.  
![p4](https://user-images.githubusercontent.com/62541648/113667119-49870b00-96eb-11eb-9252-63114c80c04e.png){: width="70%" height="70%"}  

4. 이후 Windows키 + cmd에서 python --version을 입력합니다. Python 설치가 됐다면 버전 정보가 뜹니다.  
![p5](https://user-images.githubusercontent.com/62541648/113667120-49870b00-96eb-11eb-8e82-70f8f7d2e21d.png){: width="70%" height="70%"}  




## 2. 아나콘다 설치
1. [공식 홈페이지](https://www.anaconda.com/products/individual#Downloads)로 들어가 자신의 PC스펙과 맞는 버전을 다운로드받습니다.


2. 실행 후 Next버튼은 누르면 아래와 같은 화면이 뜹니다.  
![a1](https://user-images.githubusercontent.com/62541648/113667124-4a1fa180-96eb-11eb-92b6-7e4a614c6cf7.png){: width="70%" height="70%"}    


3. 사용자 권한과 관련된 부분으로, 원하는 쪽을 고르고 넘어가 설치 경로를 정합니다.  
![a2](https://user-images.githubusercontent.com/62541648/113667126-4a1fa180-96eb-11eb-987d-3ca4b1e1c44a.png){: width="70%" height="70%"}    
![a3](https://user-images.githubusercontent.com/62541648/113667128-4ab83800-96eb-11eb-8b42-78cb78bfe14d.png){: width="70%" height="70%"}    


4. Add Anaconda3 to the system PATH environment variable를 체크합니다.  
 환경변수를 설정해주지만, 다른 Python 인터프리터를 사용하고 있다면 충돌이 일어날 수 있다고 합니다. 체크하지 않고 설치할 경우 별도로 환경변수를 설정해줘야 합니다.  
![a4](https://user-images.githubusercontent.com/62541648/113667130-4ab83800-96eb-11eb-9826-22c693bbae98.png){: width="70%" height="70%"}  


5. 설치완료 후 anaconda prompt를 실행해 python --version을 입력합니다. 문제없이 설치 됐다면 버전 정보가 뜹니다.  
![a5](https://user-images.githubusercontent.com/62541648/113667131-4b50ce80-96eb-11eb-8fbc-c1309dceb780.png){: width="70%" height="70%"}  




## 3. 디렉토리 생성, Jupyter notebook 실행
 Jupyter notebook은 대표적인 Python에딧 툴입니다.  
 실행하기에 앞서, 먼저 로컬에서 작업할 공간(디렉토리)을 따로 마련합니다.  
 기본적으로 Anaconda prompt에서 조작합니다.  


```anaconda
conda create -n 디렉토리명 python=3.8
  # 파이썬 버전을 지정할 수 있으나, 생략해도 됩니다.  

conda env list
  # 현재 작성된 디렉토리 목록을 보여줍니다.  

activate 디렉토리명
 # 해당 디렉토리로 이동합니다.  

jupyter notebook
 # 조금 기다리면 jupyter notebook이 실행됩니다. 오류가 나는 경우 관리자 권한으로 실행해봅니다.  
```

