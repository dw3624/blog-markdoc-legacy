import React from 'react';
import { TopNav, Footer, TableOfContents } from '../components/Shell';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
import TagIndex from './../components/tag/index';
import { theme } from './../styles/theme';

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

  const isDocs = router.asPath.startsWith('/docs/');
  const isList = router.asPath.endsWith('/docs')
  const isLandingPage = router.pathname === '/';

  return (
    <>
      <Wrap>
        <Header><TopNav/></Header>
        <Page isList={isList}>
          {isList? (
            <>
              <SideLeft/>
              <DocList>
                <Component {...pageProps} />
              </DocList>
              <SideRight/>
            </>
          ): (
            <WrapMain>
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
        </Page>
        <FooterWrap><Footer/></FooterWrap>
      </Wrap>
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
  height: 100%;
  display: grid;
  overflow-x: hidden;
  grid-template: auto 1fr 80px / minmax(0, 1fr);
  grid-template-areas:
    "header"
    "page"
    "footer";
`
const Header = styled.div`
  z-index: 1;
  grid-area: header;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #000;
`
const Page = styled.div`
  grid-area: page;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  padding: 32px 16px;
`
const SideLeft = styled.div`
  flex: 1;
  @media screen and (max-width: 700px) {
    flex: 0;
  }
`
const SideRight = styled.div`
  flex: 1;
  @media screen and (max-width: 700px) {
    flex: 0;
  }
`
const DocList = styled.div`
  padding: 0 16px;
  flex: 4;
`
const WrapMain = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 700px) {
    margin-left: 0;
    margin-right: 0;
  }
`
const Main = styled.div`
  flex-grow: 1;
  font-size: 16px;
  min-width: 0;
  max-width: 100%;
  `
const ToC = styled.div`
  position: sticky;
  top: 0;
  align-self: flex-start;
  flex: 0 0 240px;
  top: 2.5rem;
  max-height: calc(100vh - 100px);
  margin-bottom: 1rem;
  padding: 3rem 0 0 1rem;
  @media screen and (max-width: 1000px) {
    display: none;
  }
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
