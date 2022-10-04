import React from 'react';
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
  return (
    <>
      <ArticleIndex sortedItems={sortedItems}></ArticleIndex>
    </>
  );
};

export default Docs;
