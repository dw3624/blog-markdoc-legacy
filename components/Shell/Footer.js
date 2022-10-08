import styled from 'styled-components';
import { useRouter } from 'next/router';

export const Footer = () => {
  const router = useRouter()
  const isLanding = router.pathname === '/';
  return (
    <Wrap isLanding={isLanding}>
      <Foot>
        <Item>©2022. DongwonKang All rights reserved.</Item>
        {/* <Item style={{marginLeft: "auto"}}>toggle</Item> */}
      </Foot>
    </Wrap>
  )
}

const Wrap = styled.footer(props =>`
  height: 80px;
  width: 100%;
  position: ${props.isLanding? 'fixed': 'relative'};
  bottom: ${props.isLanding? 0: null};
`)
const Foot = styled.footer`
  display: flex;
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
