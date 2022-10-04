import Link from "next/link";
import TagIndex from "../tag";
import styled from "styled-components";
// import { theme } from '../../styles/theme'
// import Sub from '../heading/Sub'
import { theme } from './../../styles/theme';

const Article = ({ id, date, title, desc, tags }) => {
  return (
    <>
      <Link href={`/docs/${id}`}>
        <Title>{title}</Title>
      </Link>
      {desc? <Desc>{desc}</Desc>: null}
      <Row>
        {tags? <TagIndex tags={tags}/>: null}
      </Row>
      {date? <Date>{date}</Date>: null}
    </>
  );
};

export default Article;

const Title = styled.a`
  text-decoration: none;
  color: black;
  font-size: ${theme.fontSize.h1}px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const Desc = styled.div`
  margin: 0.3rem 0 1.5rem;
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
const Row = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: flex-start;
`
const Col = styled.div`
  flex: ${(props) => props.size};
`
const Date = styled.div`
  margin-top: 0.8rem;
  font-size: ${theme.fontSize.sub}px;
`
