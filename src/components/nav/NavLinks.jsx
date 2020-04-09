import React from 'react';
import { Link } from 'gatsby';
import { TiHome } from 'react-icons/ti';
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Karla, sans-serif;
  font-size: 18px;
  color: #345e69;
  margin: 0 16px;
`;

const NavLinks = ({ }) => (
  <>
    <NavLink to="/about">about</NavLink>
    <NavLink to="/blog">writings</NavLink>
    <NavLink to="/currently">currently</NavLink>
    {/* <NavLink to="/portfolio">portfolio</NavLink> */}
    {/* <NavLink to="/">
      <TiHome size={32} color="#345e69" />
    </NavLink> */}
  </>
);

export default NavLinks;
