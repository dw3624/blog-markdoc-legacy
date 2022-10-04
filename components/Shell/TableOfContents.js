import React from 'react';
import Link from 'next/link';

export const TableOfContents = ({ toc }) => {
  const items = toc.filter(
    (item) =>
      item.id &&
      (item.level === 2 || item.level === 3) &&
      item.title !== 'Next steps'
  );
  return (
    <nav className="toc">
      {items.length > 1 ? (
        <ul className="flex column">
          {items.map((item, idx) => {
            const href = `#${item.id}`;
            const active =
              typeof window !== 'undefined' && window.location.hash === href;
            return (
              <li
                key={idx}
                className={[
                  item.level === 3 ? 'padded' : undefined
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <Link href={href} passHref>
                  <a>{item.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
      <style jsx>
        {`
          nav {
            border-left: 1px solid #dfdfdf;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 1rem 1.5rem;
            font-size: 14px;
            font-weight: 400;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active a {
            text-decoration: underline;
          }
          li.padded {
            padding-left: 1rem;
          }
          @media screen and (max-width: 1000px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
