import React from 'react';
import { useState, useEffect } from "react";
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
  // useEffect(() => {
  //   window.scrollTo({top: 0})
  // }, [page])

  return (
    <>
      <ArticleIndex sortedItems={sortedItems.slice(offset, offset + limit)}></ArticleIndex>
      <Pagination
        total={sortedItems.length}
        pageSize={limit}
        currentPage={page}
        setPage={setPage}
      />
    </>
  );
};

export default Docs;
