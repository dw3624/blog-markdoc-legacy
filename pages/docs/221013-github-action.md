---
title: next.js, github action으로 배포하기
date: '2022-10-13'
tags: next.js github-action
---

프로젝트 생성
```bash
$ npx create-next-app@latest
$ cd my-app/
```


package.json
- export 추가
```json
{
  ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next export"
  },
  ...
}
```

(선택)
로컬서버로 동작 확인
```bash
$ npm i --save-dev serve
$ npx serve out
```
.gitignore
- 동작 확인 시 .next, out 디렉토리 자동생성됨
- 굳이 push 할 필요 없으므로 .gitignore 작성
```
node_modules
.next
out
```


.github/workflows/gh-pages.yml
```yml
name: github pages

# main브랜치에 push했을 때 jobs에 기술한 명령이 실행됨
on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    # 가상머신에 ubuntu OS를 설정
    # Node.js 환경 설정
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          persist-credentials: false
          node-version: 16

      # package.json 내 패키지 설치
      - name: install
        run: npm install

      # Next.js 앱 빌드
      # 프로젝트 root 디렉토리에 .next 디렉토리 생성됨
      - name: build
        run: npm run build

      # Next.js 앱을 정적인 HTML로 변환해 생성
      # 프로젝트 root 디렉토리에 out 디렉토리 생성됨
      # 해당 디렉토리 내부에는 HTML 파일들과 _next 디렉토리가 생성됨
      # _next 디렉토리 내부에는 HTML 파일과 연결되는 JS파일이 존재
      - name: export
        run: npm run export
        env:
          CI: true
          DEPLOY_TARGET: gh-pages

      # github pages는 jekyll기반으로 페이지를 생성
      # HTML과 JS 연결이 안 돼 404가 반환됨
      # .nojekyll 파일을 out 디렉토리에 생성해 이를 회피
      - name: add nojekyll
        run: touch out/.nojekyll

      # gh-pages 브랜치에 out 디렉토리의 파일 push
      # gh-pages 브랜치는 자동 생성됨
      - name: deploy
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: gh-pages
          FOLDER: out
          CLEAN: true

```

리포지토리 생성
- 유저명.github.io로 생성
- 다른 이름 쓸 경우 해당 github pages URL https://유저명.github.io/리포지토리명
- 위 yml에서 설정한 브랜치에 push되면 자동으로 github actions 실행됨

githu page source 변경
- Branch:gh-pages/(root)로

