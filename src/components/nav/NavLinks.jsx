import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { teal, darkBlue } from '../../utils/colors';

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Josefin Sans;
  font-size: 18px;
  color: ${darkBlue};
  margin: 0 16px;

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
