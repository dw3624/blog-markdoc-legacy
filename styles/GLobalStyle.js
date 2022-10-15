import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --default-vertical-spacing: 0.75rem;
    --nav-height: 80px;
    --footer-height: 61px;
    --landing-page-max-width: 1200px;

    --sans: -apple-system, BlinkMacSystemFont, Inter, Segoe UI, Helvetica Neue,
      sans-serif;
    --serif: Tiempos, serif;
    --mono: GT America Mono, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;

    --font-size-0: 8px;
    --font-size-1: 12px;
    --font-size-2: 13px;
    --font-size-3: 16px;
    --font-size-4: 18px;
    --font-size-5: 24px;
    --font-size-6: 32px;
    --font-size-7: 38px;
    --font-size-jumbo: 79px;

    --line-height-1: 16px;
    --line-height-2: 20px;
    --line-height-3: 25px;
    --line-height-4: 28px;
    --line-height-5: 32px;
    --line-height-6: 40px;
    --line-height-7: 48px;
    --line-height-jumbo: 90px;
    scroll-behavior: smooth;
  }
  @media (prefers-reduced-motion: reduce) {
    :root {
        scroll-behavior: auto;
    }
  }
  :root,
  .light {
    --white: #ffffff;
    --black: #000000;
    --black-light: #58585f;
    --black-medium: #2c2c30;
    --gray-light: #f6f9fc;
    --gray-medium: #dce6e9;

    --yellow: #ffd848;
    --purple: #6e00f5;
    --green: #0a993e;
    --blue: #0073e6;
    --magenta: #dc34dc;

    --primary: #f2f2f2;
    --accent: #f45151;

    --light: var(--white);
    --dark: var(--black);
    --text: var(--dark);

    --contrast-dark: var(--dark);
    --code-background: var(--primary);
    --code-border: var(--gray-medium);
    --toc-border: rgba(0, 0, 0, 0.14);
    --translucent: rgba(0, 0, 0, 0.4);
  }
  .dark {

  }


  html,
  body,
  #__next {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: var(--sans);
    overflow-x: auto;
  }

  #__next {
    /* https://www.joshwcomeau.com/css/custom-css-reset/ */
    isolation: isolate;
  }

  body {
    color: var(--text);
    background: var(--light);
    font-family: var(--sans);
  }

  body ::selection,
  body.dark ::selection{
    color: var(--black) !important;
    background: var(--theme) !important;
  }

  a {
    color: var(--black-light);
    text-decoration: underline;
    text-underline-offset: 1px;
    transition: opacity 300ms ease;
  }

  a:hover {
    opacity: 0.75;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  span,
  a,
  li,
  code,
  td,
  kbd,
  .heading {
    -webkit-font-smoothing: antialiased;
    color: inherit;
  }


.heading,
  blockquote {
    position: relative;
    padding-bottom: var(--default-vertical-spacing);
  }

  p {
    text-rendering: optimizeLegibility;
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
  }

  p:last-child {
    padding-bottom: 0;
  }

  h1,
  .h1 {
    font-size: var(--font-size-7);
    line-height: var(--line-height-7);
  }

  h2,
  .h2 {
    font-size: var(--font-size-5);
    line-height: var(--line-height-5);
    margin-top: 2.5rem;
  }

  h3,
  .h3 {
    font-size: var(--font-size-4);
    line-height: var(--line-height-4);
    margin-top: 2rem;
  }

  h4,
  .h4 {
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    margin-top: 1rem;
  }

  h5,
  .h5 {
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    font-weight: normal;
  }

  li {
    margin: 10px 0;
  }

  code {
    font-size: inherit;
    font-size: 15px;
    font-family: var(--mono);
    font-weight: 500;
    padding: 1px 2px;
    background: var(--code-background);
    border: 1px solid var(--code-border);
    border-radius: 3px;
    white-space: nowrap;
  }

  img {
    max-width: 100%;
  }

  p a + a > img {
    margin-left: 0.75rem;
  }

  kbd {
    font-family: var(--mono);
  }

  pre {
    border-radius: 3px;
    border: 1px solid var(--code-border);
  }
  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    margin-top: 2rem;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  th,
  td > strong {
    font-size: var(--font-size-3);
    line-height: var(--line-height-3);
    font-family: var(--sans);
    font-weight: 500;
    text-align: left;
    padding: 0 16px 8px;
  }

  td {
    padding: 12px 16px 16px;
    background-clip: padding-box;
    border-bottom: 1px solid var(--code-border);
  }

  tr:first-child td {
    border-top: 1px solid var(--code-border);
  }

  tr td:first-child {
    border-left: 1px solid var(--code-border);
  }

  tr td:last-child {
    border-right: 1px solid var(--code-border);
  }

  tr:first-child td:first-child {
    border-top-left-radius: 3px;
  }
  tr:last-child td:first-child {
    border-bottom-left-radius: 3px;
  }
  tr:first-child td:last-child {
    border-top-right-radius: 3px;
  }
  tr:last-child td:last-child {
    border-bottom-right-radius: 3px;
  }

  article {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    max-width: 100%;
    min-width: 0;
  }

  /* Syntax highlighting */
  pre[class*='language-'] {
    /* Override Prism styles */
    text-shadow: none !important;
    color: var(--text) !important;
    background: var(--code-background) !important;
    font-size: 14px !important;
    line-height: 22px !important;
    font-family: var(--mono) !important;
    margin: 0 0 var(--default-vertical-spacing) !important;
  }

  pre[class*='language-'] .md-link {
    color: inherit !important;
  }

  .token {
    color: var(--text) !important;
    background: transparent !important;
  }

  .token.comment {
    color: var(--translucent) !important;
  }

  pre .token.string,
  pre .token.boolean,
  pre .token.number {
    color: var(--magenta) !important;
  }

  pre .token.function,
  pre .token.tagType,
  pre .token.tag {
    color: var(--blue) !important;
  }

  pre .token.keyword,
  .cm-attribute {
    color: var(--purple) !important;
  }

  pre .token.variable {
    color: var(--green) !important;
  }


  @media screen and (max-width: 1291px) /* 1200px / 0.9 */ {
    :root {
      --landing-page-max-width: 93vw;
    }
  }

  @media screen and (max-width: 1000px) {
    :root {
      --landing-page-max-width: calc(100vw - 60px);
      --font-size-jumbo: 55px;
      --line-height-jumbo: 65px;
    }
    h2.jumbo {
      font-size: 43px;
      line-height: 55px;
    }
    h3.jumbo {
      font-size: 35px;
      line-height: 46px;
    }
  }

  @media screen and (max-width: 600px) {
    :root {
      --landing-page-max-width: 90vw;
      --font-size-jumbo: 38px;
      --line-height-jumbo: 45px;
    }
    p {
      font-size: var(--font-size-3);
      line-height: var(--line-height-3);
    }
    h2.jumbo {
      font-size: 34px;
      line-height: 47px;
    }
    blockquote {
      margin: 0.75rem 0;
    }
    .no-mobile {
      display: none;
    }
  }

  @media (prefers-reduced-motion) {
    .prefers-animation {
      display: none;
    }
    .prefers-no-animation {
      display: initial;
    }
  }
`;

export default GlobalStyle
