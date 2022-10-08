import React from 'react';
import Link from "next/link"
import styled from 'styled-components';
import { theme } from './../../styles/theme';

export const TopNav = () => {
  return (
    <Nav>
      <Link href='/'><Logo>logo</Logo></Link>
      <Section>
        <Link href='/docs'><MenuLink>Docs</MenuLink></Link>
        <MenuLink href='https://github.com/dw3624'>GitHub</MenuLink>
      </Section>
    </Nav>
  )
}

const Nav = styled.nav`
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2.5rem;
`
const Logo = styled.a`
  cursor: pointer;
  font-size: 25px;
  font-weight: 800;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover{
    color: ${theme.colors.accent};
    transform: scale(1.08);
  }
`
const Section = styled.section`
  display: flex;
  gap: 1rem;
  padding: 0;
`
const MenuLink = styled.a`
  cursor: pointer;
  color: ${theme.colors.secondary};
  text-decoration: none;
  font-weight: 600;
  transition: all .2s ease;
  &:hover{
    color: ${theme.colors.accent};
    transform: translateY(-0.2rem);
  }
  &:active{
    color: ${theme.colors.accent};
    transform: translateY(0.2rem);
  }
`
