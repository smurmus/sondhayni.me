import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { teal, darkBlue } from '../../utils/colors';

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Barlow;
  font-size: 18px;
  color: ${darkBlue};
  margin: 0 16px;
  font-weight: 600;

  &:hover {
    color: ${teal};
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const NavLinks = () => (
  <>
    <NavLink to="/#about-me">about</NavLink>
    <NavLink to="/#projects">projects</NavLink>
    <NavLink to="/blog">writings</NavLink>
  </>
);

export default NavLinks;
