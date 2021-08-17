import React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from "gatsby"

import { red, darkBlue } from '../../utils/colors';

const NavLink = styled(Link)`
  text-decoration: none;
  font-family: Inconsolata;
  font-size: 18px;
  color: ${darkBlue};
  margin: 0 16px;
  font-weight: 400;

  &:hover {
    color: ${red};
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const ResumeLink = styled.a`
  text-decoration: none;
  font-family: Inconsolata;
  font-size: 18px;
  color: ${darkBlue};
  margin: 0 16px;
  font-weight: 600;

  &:hover {
    color: ${red};
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 32px;
  }
`;

const NavLinks = () => {
  const data = useStaticQuery(graphql`
  {
    allFile(filter: {name: {eq: "Sondhayni_Murmu_Design_Resume" }}) {
      edges {
        node {
          id
          publicURL
        }
      }
    }
  }
`);

  const resumeURL = data.allFile.edges[0].node.publicURL;

  return (
    <>
      <NavLink to="/about">about</NavLink>
      {/* <NavLink to="/work">work</NavLink> */}
      <NavLink to="/sandbox">sandbox</NavLink>
      {/* <ResumeLink href={resumeURL} download>
        resume
      </ResumeLink> */}
        {/* {file.node.name} */}
      {/* <NavLink to="/blog">writings</NavLink> */}
    </>
  );
};
export default NavLinks;
