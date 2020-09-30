import React from 'react';
import { Link } from 'gatsby';
import { TiHome } from 'react-icons/ti';
import styled from 'styled-components';

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Josefin Sans;
  font-size: 18px;
  color: #345e69;
  margin: 0 16px;

  &:hover {
    color: #02bdd5;
  }
`;

const NavLinks = ({ }) => (
  <>
    <NavLink to="/#about-me">about</NavLink>
    <NavLink to="/#projects">projects</NavLink>
    <NavLink to="/blog">writings</NavLink>
    <NavLink to="/#currently-at">currently</NavLink>
  </>
);

export default NavLinks;
