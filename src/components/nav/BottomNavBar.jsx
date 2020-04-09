import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { TiHome } from 'react-icons/ti';

const StickyFooter = styled.div`
  background-color: black;
  height: 72px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  z-index: 100000;
`;

const NavLinkContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  bottom: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Abel, sans-serif;
  font-size: 18px;
  color: white;
  margin: 0 16px;
  &:hover {
    font-size: 22px;
    font-weight: 600px;
  }
`;

// <nav class="collapse navbar-collapse navbar-right" role="navigation">

const BottomNavBar = ({ }) => (
  <StickyFooter>
    <NavLinkContainer>
      <NavLink to="/">
        <TiHome size={32} color="white" />
      </NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/blog">writings</NavLink>
      <NavLink to="/portfolio">portfolio</NavLink>
    </NavLinkContainer>
  </StickyFooter>
);

export default BottomNavBar;
