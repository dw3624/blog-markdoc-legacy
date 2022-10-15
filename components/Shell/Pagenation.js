import styled from 'styled-components';
import { theme } from './../../styles/theme';

export const Pagination = ({total, limit, page, setPage}) => {
  const numPages = Math.ceil(total / limit)
  return (
    <Wrap>
      <PageWrap>
        <PageBtn onClick={() => setPage(page-1)} disabled={page == 1}>
          &laquo;
        </PageBtn>
        {Array(numPages)
          .fill()
          .map((_, i) => (
            <PageBtn
            id={page === i+1? 'active': null}
            key={i + 1}
            onClick={() => setPage(i+1)}
            aria-current={page === i+1? "page": null}
            >
              {i + 1}
            </PageBtn>
          ))}
        <PageBtn onClick={() => setPage(page+1)} disabled={page == numPages}>
          &raquo;
        </PageBtn>
      </PageWrap>
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
