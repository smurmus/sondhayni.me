import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo'
import { TopNav } from '../components';
import { device } from '../components/mediaQuery';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
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
  height: 80vh;
  align-self: stretch;
  display: block;
`;

const Section = styled.div`
  font-family: Karla;
  font-size: 16px;
  color: #345e69;
  font-weight: 400;
  margin-right: 16px;
  padding: 64px;
  padding-right: 0;
  flex: 2;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Fun = styled.div`
  font-family: ${props => props.font || 'DM Serif Display'};
  font-size: 36px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};

  @media ${device.laptop} {
    font-size: 52px;
  }

  @media ${device.tablet} {
    font-size: 48px;
  }
`;

const Emphasize = styled.span`
  color: ${props => props.color || 'coral'};
`;

const About = () => {
  const data = useStaticQuery(imageQuery);
  const img = data.corkboard.childImageSharp.fluid;

  return (
    <>
      <Container>
        <TopNav />
        <SEO title="about" />
        <SubContainer>
          <Section>
            <Fun color="#7CAA4D" weight={600}>
              about
            </Fun>
            <br />
            <>
              I'm a <Emphasize>design-obsessed</Emphasize> engineer who's into identifying possibilities and problems and playing with ways to fix them.
              my time is generally spent coding, writing, reading, gaming, or making art.
            </>
            <br />
            <br />

            I graduated from the <Emphasize>university of southern california</Emphasize> with a bachelor's in computer engineering (and a minor in
            3d computer graphics and modeling!) and a mission to make the world a <Emphasize>kinder</Emphasize> place.
            <br />
            <br />

            this website is part showcase of some of my work, but mainly an exploration of identity, perspective, and
            things completely unrelated to computer science. <Emphasize>this is a work in progress.</Emphasize>

            <br />
            <br />
            <b>central jersey ⟶ los angeles ⟶ san francisco ⟶ ?</b>
            <br />
            <br />
            <Contact>
              <p><b>contact: </b><Emphasize>sondhayni@gmail.com</Emphasize></p>
              <p><Emphasize color="lightskyblue"><b>download resume</b></Emphasize></p>
            </Contact>
          </Section>
          <Corkboard
            alt="corkboard"
            fluid={img}
          />
        </SubContainer>
      </Container>
    </>
  );
};

export default About;

const imageQuery = graphql`
  query {
    corkboard: file(relativePath: { eq: "me_half_cartoon.png" }) {
      childImageSharp {
        fluid(maxWidth: 200, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;