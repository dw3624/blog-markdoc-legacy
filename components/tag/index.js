import styled from 'styled-components';
import Tag from './tag';

const TagIndex = ({tags}) => {
  return (
    <div>
      {tags && tags.split(' ').map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}

export default TagIndex
