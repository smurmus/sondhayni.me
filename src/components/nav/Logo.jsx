import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby'

const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Logo = () => {

  const query = graphql`
    query {
      meCartoon: file(relativePath: { eq: "me_cartoon_head.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  return (
    <NavLink to="/">
      <Img
        style={{ width: 64, height: 64 }}
        fluid={data.meCartoon.childImageSharp.fluid}
        alt="logo"
      />
    </NavLink>
  );
};

export default Logo;