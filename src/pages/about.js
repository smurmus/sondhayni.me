import React from 'react'
import { Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import Img from 'gatsby-image';
import SEO from '../components/seo'
import { BottomNavBar } from '../components';
import { device } from '../components/mediaQuery';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 24px;
  margin: 0;
  
  @media ${device.tablet} {
    padding: 100px;
  }
`;

const HomeLink = styled(Link)`
	margin: 8px;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Corkboard = styled(Img)`
  flex: 2;
`;

const Section = styled.div`
  font-family: Roboto;
  font-size: 18px;
  color: 'black';
  font-weight: 300;
  margin: 0 16px;
  flex: 2;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const About = () => {
  const data = useStaticQuery(imageQuery);
  const img = data.corkboard.childImageSharp.fluid;

  return (
    <>
      <Container>
        <HomeLink>
          <TiHome size={32} color="black" />
        </HomeLink>
        <SEO title="About" />
        <SubContainer>
          <Section>
            I'm an engineer originally from New Jersey who uprooted and flew off to explore college in Los Angeles, California.
            I graduated in May 2018 with a bachelor's degree in Computer Engineering and Computer Science and a minor in
            3D Computer Graphics and Modeling from the University of Southern California!

            This website is part showcase of some of my work, but mainly an exploration of identity, perspective, and
            things completely unrelated to computer science. This is a work in progress.
            <br />
            <br />
            <Contact>
              <p><b>contact:</b> sondhayni@gmail.com</p>
              <p><b>download resume</b></p>
            </Contact>
          </Section>
          <Corkboard
            alt="corkboard"
            fluid={img}
          />
        </SubContainer>
      </Container>
      <BottomNavBar />
    </>
  );
};

export default About;

const imageQuery = graphql`
  query {
    corkboard: file(relativePath: { eq: "corkboard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;