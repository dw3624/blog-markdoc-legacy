import Article from './article';
import styled from 'styled-components';

const ArticleIndex = ({ sortedItems }) => {
  return (
    <StyledUl>
      {sortedItems.map(({ id, date, title, desc, tags }, idx) => {
        // const isLast = idx === sortedItems.length - 1

        return (
          <div key={id}>
            <StyledLi>
              <Article
                id={id}
                date={date}
                title={title}
                desc={desc}
                tags={tags}
              />
            </StyledLi>
            <Separator/>
          </div>
        )
      })}
    </StyledUl>
  );
};

export default ArticleIndex;

const StyledUl = styled.ul`
  padding-left: 0;
`
const StyledLi = styled.li`
  list-style-type: none;
  margin: 1.5rem 0 1.5rem;
`
export const Separator = styled.div`
  border-bottom: 1px solid var(--gray-medium);
  line-height: 0.1em;
`
