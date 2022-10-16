import React from 'react';
import Link from "next/link"
import styled from 'styled-components';

export const TopNav = () => {
  return (
    <Header>
      <Nav>
        <NavContent>
        <Link href='/'><Logo href='/'>logo</Logo></Link>
        <Section>
          <Link href='/docs'><MenuLink href='/docs'>Docs</MenuLink></Link>
          <MenuLink href='https://github.com/dw3624'>GitHub</MenuLink>
        </Section>

        </NavContent>
      </Nav>
    </Header>
  )
}

const Header = styled.header`
  top: 0;
  position: sticky;
  z-index: 1;
  width: 100%;
`
const Nav = styled.nav`
  width: 100%;
  background-color: var(--primary);
  border-bottom: 1px solid transparent;
`
const NavContent = styled.div`
  display: flex;
  gap: 1rem;
  max-width: 1280px;
  margin: 0 auto;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem 2rem 1.1rem;
  font-size: 15px;
  font-family: var(--sans);
`
const Logo = styled.a`
  font-size: 25px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover{
    color: var(--accent);
    transform: scale(1.08);
    opacity: 1;
  }
`
const Section = styled.section`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 0;
  @media screen and (max-width: 600px) {
    display: none;
  }
`
const MenuLink = styled.a`
  color: var(--dark);
  text-decoration: none;
  font-weight: 600;
  transition: all .2s ease;
  &:hover{
    color: var(--accent);
    transform: translateY(-0.2rem);
    opacity:1;
  }
  &:active{
    color: var(--accent);
    transform: translateY(0.2rem);
  }
`
