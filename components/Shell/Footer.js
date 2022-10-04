import styled from 'styled-components';

export const Footer = ({children}) => {
  return (
    <Foot>
      <Item>©2022. DongwonKang All rights reserved.</Item>
      {/* <Item style={{marginLeft: "auto"}}>toggle</Item> */}
    </Foot>
  )
}

const Foot = styled.footer`
  position: relative;
  display: flex;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  color: var(--dark);
  padding: 1rem 0;
  justify-content: center;
`
const Item =styled.div`
  font-size: 13px;
  display: flex;
  align-items: center;
  margin: 0.5rem 1.5rem;
`
