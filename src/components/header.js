/* global tw */
import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion';

const NavBar = styled('header')`
  ${tw('font-sans align-middle bg-blue-darker text-white py-6')};
`;

const Container = styled('div')`
  ${tw('container max-w-2xl mx-auto flex align-middle items-center justify-between px-4')};
`;

const HeaderList = styled('ul')`
  ${tw('flex align-middle items-center list-reset text-xl')};
`;

const HeaderItem = styled('li')`
  ${tw('align-middle ml-4')};
`;


const HeaderLink = styled('a')`
  ${tw('font-sans align-middle no-underline text-white hover:text-gray-darker')};
`;


const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#78866b',
      marginBottom: '1.45rem',
    }}
  >
    <NavBar>
      <Container>
        <h1><HeaderLink href="/">{siteTitle}</HeaderLink></h1>
        <HeaderList>
          <HeaderItem>
            <HeaderLink href="/about/">
              About
            </HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink href="/blog/">
              Blog
            </HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink href="/contact/">
              Contact
            </HeaderLink>
          </HeaderItem>
        </HeaderList>
      </Container>
    </NavBar>
  </div>
)

export default Header
