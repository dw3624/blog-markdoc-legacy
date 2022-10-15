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

import GlobalStyle from '../styles/GlobalStyle';

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
              <Main isDocs={isDocs}>
                {isDocs && title? (
                  <>
                    <Date>{date}</Date>
                    <Title>{title}</Title>
                    <Desc>{desc}</Desc>
                    <TagIndex tags={tags}/>
                    <Separator/>
                  </>
                ): null}
                <Component {...pageProps} />
              </Main>
              {isDocs && toc.length > 0? <ToC><TableOfContents toc={toc} /></ToC>: null}
            </WrapMain>
          )}
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
  min-height: 100vh;
  max-width: 100vw;
  padding: ${props => props.isLanding? '2rem 1.5rem 3rem': ''};
`
const Main = styled.div`
  flex: 1;
  flex-grow: 1;
  min-width: 0;
  padding: ${props => props.isDocs? '2rem 1.5rem 3rem': ''};
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
  flex-grow: 1;
  min-height: 100vh;
  max-width: 960px;
  margin: 0 auto;
`
const Doc = styled.div`
  flex: 1;
  max-width: 100%;
  min-width: 0;
  padding: 32px;
`
const Title = styled.div`
  font-size: var(--font-size-6);
  font-weight: 600;
`
const Desc = styled.p`
`
const Date = styled.div`
  padding-left: 0.2rem;
  color: gray;
  font-size: var(--font-size-2);
  font-weight: 600;
`
const Separator = styled.div`
  margin: 1rem 0 2rem;
  border-bottom: 1px solid var(--gray-light);
  line-height: 0.1em;
  opacity: 0;
`
