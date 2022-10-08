import React from 'react';
import { useState } from "react";
import { getSortedItems } from '../lib/items';
import ArticleIndex from '../components/article/index';
import { Pagination } from '../components/Shell/Pagenation';

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
  const [page, setPage] = useState(1)
  const offset = (page - 1) * limit


  return (
    <>
      <ArticleIndex sortedItems={sortedItems.slice(offset, offset + limit)}></ArticleIndex>
      <Pagination
        total={sortedItems.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default Docs;
