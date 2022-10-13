import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { TopNav, Footer, TableOfContents } from '../components/Shell';
import TagIndex from './../components/tag/index';

import 'prismjs';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-graphql.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-json.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-markup.min';
import 'prismjs/components/prism-toml.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-yaml.min';
import 'prismjs/plugins/autolinker/prism-autolinker.min';
import 'prismjs/themes/prism.css';

import { theme } from '../styles/theme';
import GlobalStyle from './../styles/GLobalStyle';


const TITLE = 'The first docs of markdoc';
const DESC = 'Here is a desctiption statement';

const collectHeadings = (node, sections = []) => {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }
  return sections
}

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

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  const isLanding = router.pathname === '/';
  const isList = router.asPath.endsWith('/docs');
  const isDocs = router.asPath.startsWith('/docs/');

  return (
    <>
      <GlobalStyle/>
      <Wrap>
        <TopNav/>
        <WrapPage>
          {isList? (
            <WrapDoc>
              <Doc>
                <Component {...pageProps} />
              </Doc>
            </WrapDoc>
          ): (
            <WrapMain isLanding={isLanding}>
              <Main>
                {isDocs && title? (
                  <>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                    <Date>{date}</Date>
                    <TagIndex tags={tags}/>
                    <Separator/>
                  </>
                ): null}
                <Component {...pageProps} />
              </Main>
              {isDocs && toc? <ToC><TableOfContents toc={toc} /></ToC>: null}
            </WrapMain>
          )}
        </WrapPage>
      </Wrap>
      <Footer/>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          width: 100%;
          overflow-x: hidden;
        }
      `}</style>
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
  padding: 16px;
`
const Main = styled.div`
  grid-area: main;
  padding: 32px;
  white-space: normal;
  word-break: break-all;
  line-height: 32px;
`
const ToC = styled.div`
  width: 300px;
  position: sticky;
  align-self: flex-start;
  top: 2.5rem;
  max-height: calc(100vh - 100px);
  margin-bottom: 1rem;
  padding: 3rem 0 0 1rem;
  @media screen and (max-width: 1000px) {
    flex: 0
  }
`
const WrapDoc = styled.div`
  display: flex;
  padding: 16px;
`
const Doc = styled.div`
  padding: 32px;
  flex: 1;
`
const FooterWrap = styled.div`
  grid-area: footer;
  padding: 0.25rem;
`
const Title = styled.h1`
  font-size: ${theme.fontSize.title}px;
`
const Desc = styled.p`
  font-size: ${theme.fontSize.body}px;
`
const Date = styled.div`
  margin: 0.8rem 0 0.5rem;
  font-size: ${theme.fontSize.sub}px;
`
const Separator = styled.div`
  margin: 2rem 0 3rem;
  border-bottom: 1px solid #aaa;
  line-height: 0.1em;
  opacity: 0;
`
