import styled from 'styled-components';
// import { theme } from '../../styles/theme'

const Tag = ({children}) => {
  return (
    <StyledTag>
      {children}
    </StyledTag>
  )
}

export default Tag

const StyledTag = styled.button`
  font-weight: 600;;
  /* background-color: ${theme.colors.primary}; */
  padding: 5px 12px;
  gap: 10px;
  border-radius: 50px;
  border: none;
  margin: 0.25rem 0.25rem 0 0;
`
