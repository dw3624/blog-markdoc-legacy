import styled from 'styled-components';

const Tag = ({children}) => {
  return (
    <StyledTag>
      {children}
    </StyledTag>
  )
}

export default Tag

const StyledTag = styled.button`
  height: 26px;
  font-size: var(--font-size-2);
  line-height: 1.5rem;
  font-weight: 700;;
  background-color: var(--primary);
  border: 1px solid transparent;
  padding: 0 0.7rem;
  border-radius: 100px;
`
