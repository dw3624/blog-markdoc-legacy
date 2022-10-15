import styled from 'styled-components';
import Tag from './tag';

const TagIndex = ({tags}) => {
  return (
    <Wrap>
      {tags && tags.split(' ').map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Wrap>
  )
}

export default TagIndex

const Wrap = styled.div`
  display: flex;
  gap: 0.25rem;
`
