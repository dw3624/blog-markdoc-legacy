import styled from 'styled-components';
import { theme } from './../../styles/theme';

export const Pagination = ({total, limit, page, setPage}) => {
  const numPages = Math.ceil(total / limit)
  return (
    <Wrap>
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
    </Wrap>
  )
}

const Wrap = styled.div`
  text-align: center;
`
const PageBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  border: none;
  padding: 8px 16px;
  text-decoration: none;
  transition: 0.3s;
  &:hover{
    background-color: #ddd;
    border-radius: 5px;
  }
  &#active{
    background-color: ${theme.colors.accent};
    color: #ffffff;
  }

`
