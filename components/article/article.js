import Link from "next/link";
import TagIndex from "../tag";
import styled from "styled-components";
import { theme } from './../../styles/theme';

const Article = ({ id, date, title, desc, tags }) => {
  const DEFAULT = '...'
  return (
    <>
      <Row>
        <Link href={`/docs/${id}`}>
          <a style={{textDecoration: 'none'}}><Title>{title}</Title></a>
        </Link>
        <Desc desc={desc}>{desc}</Desc>
        <TagIndex tags={tags}/>
        <Date>{date? date: DEFAULT}</Date>
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
  visibility: ${props => props.desc? '': 'hidden'};
`
const Date = styled.div`
  padding-left: 0.2rem;
  color: gray;
  font-size: var(--font-size-2);
  font-weight: 600;
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
