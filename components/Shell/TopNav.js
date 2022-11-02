import { useState } from 'react';
import Link from "next/link"
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { currentPage } from '../../state/jotai/currentPage';

export const TopNav = () => {
  const [page, setPage] = useAtom(currentPage)
  const [showMobileMenu, setShowobileMenu] = useState(false)

  return (
    <Header>
      <Nav>
        <NavContent>
          <Link href='/'>
            <Logo href='/'>logo</Logo>
          </Link>
          <Section>
            <Link href='/docs'>
              <MenuLink href='/docs' onClick={() => setPage(1)}>Docs</MenuLink>
            </Link>
            <MenuLink href='https://github.com/dw3624'>GitHub</MenuLink>
          </Section>
          <MenuButton onClick={() => setShowobileMenu((o) => !o)}>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="16" height="2" fill="var(--black)" />
              <rect y="4" width="16" height="2" fill="var(--black)" />
              <rect y="8" width="16" height="2" fill="var(--black)" />
            </svg>
          </MenuButton>
        </NavContent>
        {showMobileMenu? (
          <MobileSection>
            <Link href='/docs'>
              <MenuLink href='/docs' onClick={() => setPage(1)}>Docs</MenuLink>
            </Link>
            <MenuLink href='https://github.com/dw3624'>GitHub</MenuLink>
          </MobileSection>
        ): null}
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
  padding: 1rem 1.5rem 1.1rem;
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
const MenuButton = styled.button`
  color: var(--dark);
  width: 48px;
  height: 32px;
  border: 0;
  border-radius: 30px;
  background: none;
  &:hover{
    color: var(--accent);
    transform: translateY(-0.2rem);
    opacity:1;
  }
  @media screen and (min-width: 601px) {
    display: none;
  }
`
const MobileSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1.5rem;
`
