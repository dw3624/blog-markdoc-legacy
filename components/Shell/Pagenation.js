import styled from 'styled-components';
import { theme } from './../../styles/theme';
import { usePagination, DOTS } from './usePagination';


export const Pagination = props => {
  const {
    setPage,
    total,
    siblingCount = 1,
    currentPage,
    pageSize
  } = props
  const paginationRange = usePagination({
    currentPage,
    total,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  let lastPage = paginationRange[paginationRange.length - 1]

  return (
    <Wrap>
      <PageWrap>
        <PageBtn
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </PageBtn>

        {paginationRange.map(pageNumber => {
          if (pageNumber === DOTS) {
            return <PageBtnDot>&#8230;</PageBtnDot>
          }
          return (
            <PageBtn
              id={pageNumber === currentPage? 'active': null}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </PageBtn>
          )
        })}

        <PageBtn
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === lastPage }
        >
          &raquo;
        </PageBtn>
      </PageWrap>

      <PageWrapSmall>
        <PageBtn
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </PageBtn>
        <PageBtn id="active">{currentPage}</PageBtn>
        <PageBtn
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === lastPage }
        >
          Next &raquo;
        </PageBtn>
      </PageWrapSmall>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: center;
`
const PageWrap = styled.div`
  display: flex;
  gap: 0.5rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`
const PageWrapSmall = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (min-width: 500px) {
    display: none;
  }
`
const PageBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 8px 16px;
  text-decoration: none;
  transition: 0.3s;
  &:hover{
    border: 1px solid var(--gray-medium);
    border-radius: 6px;
  }
  &#active{
    background-color: ${theme.colors.accent};
    color: #ffffff;
  }
`
const PageBtnDot = styled.button`
  cursor: default;
  background-color: transparent;
  border-radius: 6px;
  border: 1px solid transparent;
  padding: 8px 16px;
  text-decoration: none;
`
