---
title: gh-pages로 배포하기
tags: React github
--- 

## gh-pages
- github에서 제공하는 무료 서비스
- github repository 코드를 host해주는 기능
- html, css, javascript 올리면 웹사이트로 만들어 배포

## 설치
```bash
$ npm i gh-pages
```

## 설정
### package.json
- `deploy`
	- gh-pages 실행
	- "build" 디렉토리 가져가도록 함
- `predeploy`
	- deploy 실행시 먼저 자동 실행됨
	- build 후 deploy 해야되는 과정 생략
- 이후 npm run deploy로 push, 갱신 및 업로드 가능

> package.json - script
> script 코드 실행시 production ready code 생성
> production ready : 코드 압축, 최적화


```json
{
  "name": "react-for-beginners",
  ...  
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build"
  },
  ...
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "homepage": "https://<깃헙 username>.github.io/<깃헙 repository>"
}
```

