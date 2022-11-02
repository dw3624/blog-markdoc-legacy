import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter()
  const isLanding = router.pathname === '/';
  return (
    <Wrap isLanding={isLanding}>
      <Foot>
        <Item>Nice to meet you!</Item>
        <Item>©2022. dw3624 All rights reserved.</Item>
        {/* <Item style={{marginLeft: "auto"}}>toggle</Item> */}
      </Foot>
    </Wrap>
  )
}

const Wrap = styled.footer(props =>`
  height: 120px;
  width: 100%;
  position: ${props.isLanding? 'fixed': 'relative'};
  bottom: ${props.isLanding? 0: null};
  background-color: var(--primary);
  z-index: 2;
  @media screen and (max-width: 601px) {
    height: 100px;
  }
`)
const Foot = styled.footer`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-sizing: border-box;
  color: var(--dark);
  padding: 1rem 0;
  justify-content: center;
`
const Item =styled.div`
  text-align: center;
  font-size: 13px;
  align-items: center;
`
