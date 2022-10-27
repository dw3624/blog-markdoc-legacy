import React from 'react';
import { useState, useEffect } from 'react';
import { getSortedItems } from '../lib/items';
import ArticleIndex from '../components/article/index';
import { Pagination } from '../components/Shell/Pagination';
import { useAtom } from 'jotai';
import { currentPage } from '../state/jotai/currentPage';

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
  const [page, setPage] = useAtom(currentPage)
  const [offset, setOffset] = useState()
  useEffect(() => {
    setPage(page)
    setOffset((page - 1) * limit)
  }, [page, setPage])

  if (typeof offset === 'undefined' || typeof window === 'undefined') {
    return null
  }
  return (
    <>
      <ArticleIndex sortedItems={sortedItems.slice(offset, offset + limit)}/>
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
