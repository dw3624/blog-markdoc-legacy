---
title: 마크다운 블로그 만들어보기
tags: Next.js  Markdoc
---

## 개요
어느날 보니 github 블로그에 접속이 되지 않았습니다.
찾아보니 아무래도 사용하던 jekyll theme에 에러가 난 듯 합니다...
같은 theme을 사용하던 사람들 사이에서도 비슷한 현상이 보이고, 해당 theme의 demo 페이지도 못들어갔습니다.

제 github 블로그는 초라하긴 하지만 포트폴리오를 겸하고도 있고,,,
종종 들어가 이전 기록을 확인하기도 해서 다시 만들기로 했습니다.

jekyll을 이용하면 쉽게 만들순 있지만 구조에 대해 잘 몰라서 통제가 어려웠습니다.
이참에 프론트엔드 공부도 할 겸 직접 웹블로그를 구현해 보기로 했습니다.

github pages와 next.js를 이용해 마크다운 파일을 게시물로 보여주는 정적 웹블로그를 만들기로 합니다.
마크다운을 파싱하는 라이브러리로는 `marked`와 `markdoc` 등이 있는 것 같습니다.
간단히 구축해보니 `marked`는 조금 무겁게 느껴져 `markdoc`을 쓰기로 했습니다.


## 개발환경
- Next.js
- Markdoc
- javascript
- stlyed-components
- github pages
- github actions

> **[Markdoc](https://markdoc.dev/)**
> Markdoc은 Stripe에서 개발한 문서 작성 프레임워크입니다. 마크다운을 파싱해 웹사이트로 볼 수 있게 해줍니다.


## 1. 세팅
### Next.js
#### 프로젝트 생성
```bash
$ npx create-next-app@latest 프로젝트명
$ cd next-blog
$ npm run dev
```

#### `.eslintrc.json` 설정
```javascript
{
  "extends": ["next/babel","next/core-web-vitals", "next/core-web-vitals"]
}
```

### styled-components
```bash
$ npm i styled-components
$ npm i --save-dev babel-plugin-styled-components
를를

# typescript를 사용할 경우 아래도 같이 설치합니다.
$ npm i --save-dev @types/styled-components
```

#### root 폴더에 `.babelrc` 생성
```javascript
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
        {
          "ssr": true, // 서버사이드 렌더링 옵션
          "displayName": true, // 태그 class명에 디렉토리, 컴포넌트명 추가
          "preprocess": false
        }
    ]
  ]
}
```

#### pages 폴더에 `_document.js` 생성
```javascript
import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } catch (error) {
      throw error;
    } finally {
      sheet.seal();
    }
  }
}

export default CustomDocument;
```

Typescript를 사용할 경우 아래와 같이 작성합니다.
```javascript
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
```

### Markdoc
```bash
$ npm i @markdoc/next.js @markdoc/markdoc
```

#### `next.config.js` 설정
수정 후 터미널을 재시작해 변경내용을 적용시킵니다.
```javascript
/* @type {import('next').NextConfig} */

const withMarkdoc = require('@markdoc/next.js')
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
}

module.exports = withMarkdoc()(nextConfig)
```


## 2. 디렉토리 구성
```
.-- components
|-- lib
|-- markdoc
|   |-- nodes
|   |-- functions
|   `-- tags
`-- pages
|   `-- docs
`-- styles
```


## 3. 메인페이지
처음 접속했을 때 뜨는 메인화면을 먼저 만들어봅니다.
마크다운의 헤더에서 정보를 가져올 수 있도록 `_app.js`를 수정합니다.

### _app.js
```javascript
import styled from 'styled-components';
import TopNav from '../components/Shell/TopNav';
import { useRouter } from 'next/router';
import './../styles/GlobalStyle.css';

const TITLE = 'The first docs of markdoc';
const DESC = 'Here is a desctiption statement';

function MyApp({ Component, pageProps }) {
  const {markdoc} = pageProps
  const router = useRouter()

  let title = TITLE
  let desc = DESC
  let date = null
  let tags = null

  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.desc) {
      desc = markdoc.frontmatter.desc;
    }
    if (markdoc.frontmatter.date) {
      date = markdoc.frontmatter.date;
    }
    if (markdoc.frontmatter.tags) {
      tags = markdoc.frontmatter.tags;
    }
  }

  // 메인페이지의 경우 True 반환
  const isLanding = router.pathname === '/';

  return (
    <>
      <Wrap>
        <TopNav/>
        <WrapPage>
          <WrapMain isLanding={isLanding}>
            <Main>
              <Component {...pageProps} />
            </Main>
          </WrapMain>
        </WrapPage>
      </Wrap>
      <Footer/>
    </>
  )
}

export default MyApp

const Wrap = styled.div`
  height: auto;
`
const WrapPage = styled.div`
  margin: 0 auto;
  padding-top: 24px 24px 0;
  max-width: 1280px;
`
const WrapMain = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100vw;
  padding: ${props => props.isLanding? '2rem 1.5rem 3rem': ''};
`
const Main = styled.div`
  flex: 1;
  flex-grow: 1;
  min-width: 0;
  padding: ${props => props.isDocs? '2rem 1.5rem 3rem': ''};
`
```


## 4. 헤더
헤더 네비게이션 컴포넌트도 만들어줍니다.
```javascript
import React from 'react';
import Link from "next/link"
import styled from 'styled-components';

export const TopNav = () => {
  return (
    <Header>
      <Nav>
        <NavContent>
          <Link href='/'>
            <Logo href='/'>logo</Logo>
          </Link>
          <Section>
            <Link href='/docs'>
              <MenuLink href='/docs'>Docs</MenuLink>
            </Link>
          </Section>
        </NavContent>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  top: 0;
  position: sticky;
  z-index: 1;
  width: 100%;
`
const Nav = styled.nav`
  width: 100%;
  background-color: var(--primary);
  border-bottom: 1px solid transparent;
`
const NavContent = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 2rem 1.1rem;
  font-size: 15px;
  font-family: var(--sans);
`
const Logo = styled.a`
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover{
    color: var(--accent);
    transform: scale(1.08);
    opacity: 1;
  }
`
const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 0;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const MenuLink = styled.a`
  color: var(--dark);
  text-decoration: none;
  font-weight: 600;
  transition: all .2s ease;
  &:hover{
    color: var(--accent);
    transform: translateY(-0.2rem);
    opacity:1;
  }
  &:active{
    color: var(--accent);
    transform: translateY(0.2rem);
  }
`
```


## 마무리
이제 기본적인 구조가 완성됐습니다.
`pages/index.md`를 생성해 마크다운 파일이 문제없이 렌더링되는지 확인해봅니다.
기존 `index.js`는 삭제해도 무방합니다.

```
---
title: Markdoc 블로그
desc: Hello World
---

# {% $markdoc.frontmatter.title %}
{% $markdoc.frontmatter.desc %}

```

