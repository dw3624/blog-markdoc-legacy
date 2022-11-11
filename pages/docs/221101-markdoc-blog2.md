---
title: 마크다운 블로그 만들어보기 2
tags: Next.js  Markdoc
---

## 개요
지난번엔 기본적인 세팅 후 메인페이지를 만들었습니다.
이번에는 게시물 목록 페이지를 만들어 보겠습니다.

게시물 마크다운 파일은 `pages/docs` 디렉토리에 추가합니다.
docs의 index 페이지는 해당 폴더 안에 index.md와 같이 작성할 수 있습니다.
다만 게시물 개수가 많아지면 index 파일을 찾기 어려워지므로 이번에는 `pages` 디렉토리에 바로 `docs.js`를 만드는 방식으로 진행합니다.


## 게시물 목록 불러오기
`gray-matter`를 추가로 설치해 docs 폴더 내 파일 정보를 불러옵니다.
`lib/item.js`에 해당 내용을 작성합니다.


```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const directory = path.join(process.cwd(), 'pages/docs')

export async function getStaticProps() {
  const allPostData = getSortedItems()
  return {
    props: {
      allPostData
    }
  }
}

export function getSortedItems() {
  const fileNames = fs.readdirSync(directory)
  const allItemsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      id,
      ...matterResult.data,
    };
  });
  // id 기준으로 재배열
  return allItemsData.sort(({ id: a }, { id: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  })
}
```


## 목록 페이지 작성
위에서 만든 sortedItems를 가져와 `docs.js`에서 목록으로 보여줍니다.
일단은 10개만 보여주도록 만들어봅니다.

#### `docs.js`
```javascript
import React from 'react';
import { useState, useEffect } from 'react';
import { getSortedItems } from '../lib/items';
import ArticleIndex from '../components/article/index';

export async function getStaticProps() {
  const sortedItems = getSortedItems()
  return {
    props: {
      sortedItems
    }
  }
}

const Docs = ({ sortedItems }) => {
  let limit = 10
  const [offset, setOffset] = useState()

  if (typeof offset === 'undefined' || typeof window === 'undefined') {
    return null
  }
  return (
    <>
      <ArticleIndex sortedItems={sortedItems.slice(offset, offset + limit)}/>
    </>
  );
};

export default Docs;

```


#### `article/index.js`
```javascript
import Article from './article';
import styled from 'styled-components';

const ArticleIndex = ({ sortedItems }) => {
  return (
    <StyledUl>
      {sortedItems.map(({ id, date, title, desc, tags }, idx) => {
        return (
          <div key={id}>
            <StyledLi>
              <Article
                id={id}
                date={date}
                title={title}
                desc={desc}
                tags={tags}
              />
            </StyledLi>
            <Separator/>
          </div>
        )
      })}
    </StyledUl>
  );
};

export default ArticleIndex;

const StyledUl = styled.ul`
  padding-left: 0;
`
const StyledLi = styled.li`
  list-style-type: none;
  margin: 1.5rem 0 1.5rem;
`
const Separator = styled.div`
  border-bottom: 1px solid var(--gray-medium);
  line-height: 0.1em;
`
```

#### `article/article.js`
```javascript
import Link from "next/link";
import TagIndex from "../tag";
import styled from "styled-components";
import { theme } from './../../styles/theme';

const Article = ({ id, date, title, desc, tags }) => {
  return (
    <>
      <Row>
        <Link href={`/docs/${id}`}>
          <a style={{textDecoration: 'none'}}><Title>{title}</Title></a>
        </Link>
        {desc? <Desc>{desc}</Desc>: null}
        {tags? <TagIndex tags={tags}/>: null}
        {date? <Date>{date}</Date>: null}
      </Row>
    </>
  );
};

export default Article;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
const Title = styled.span`
  color: black;
  font-size: var(--font-size-5);
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Desc = styled.div`
`
const ReadMore = styled.a`
  text-decoration: none;
  color: ${theme.colors.accent};
  font-size: ${theme.fontSize.sub}px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Date = styled.div`
  padding-left: 0.2rem;
  color: gray;
  font-size: var(--font-size-2);
  font-weight: 600;
`
```


## 메인페이지 수정
url이 docs로 바뀌었을때 해당 페이지가 뜨도록 `app.js`를 변경합니다.

#### `_app.js`
```javascript
...
function MyApp({ Component, pageProps }) {
  ...
  const isList = router.asPath.endsWith('/docs') || router.asPath.startsWith('/docs#');
  const isDocs = router.asPath.startsWith('/docs/');

  return (
    <>
      ...
        <WrapPage>
          {isList? (
            <WrapDoc>
              <Doc>
                <Component {...pageProps} />
              </Doc>
            </WrapDoc>
          ): (
            <WrapMain isLanding={isLanding}>
              <Main isDocs={isDocs}>
                <Component {...pageProps} />
              </Main>
            </WrapMain>
          )}
        </WrapPage>
      ...
    </>
  )
}
...
```
