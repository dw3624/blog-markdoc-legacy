import Link from "next/link";
import TagIndex from "../tag";
import styled from "styled-components";
import { theme } from './../../styles/theme';

const Article = ({ id, date, title, desc, tags }) => {
  return (
    <>
      <Row>
        <Link href={`/docs/${id}`}>
          <a style={{textDecoration: 'none'}}><Title>{title}</Title></a>
        </Link>
        {desc? <Desc>{desc}</Desc>: null}
        {tags? <TagIndex tags={tags}/>: null}
        {date? <Date>{date}</Date>: null}
      </Row>
    </>
  );
};

export default Article;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
const Title = styled.span`
  color: black;
  font-size: var(--font-size-5);
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Desc = styled.div`
`
const ReadMore = styled.a`
  text-decoration: none;
  color: ${theme.colors.accent};
  font-size: ${theme.fontSize.sub}px;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Date = styled.div`
  padding-left: 0.2rem;
  color: gray;
  font-size: var(--font-size-2);
  font-weight: 600;
`
