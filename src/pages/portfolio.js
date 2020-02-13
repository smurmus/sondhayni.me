import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import Img from 'gatsby-image';

import SEO from '../components/seo'

import { BottomNavBar } from '../components';
import { PortfolioItem } from '../components/portfolio';
import projectList from '../components/portfolio/projectList';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 100px;
  margin: 0;
  overflow: scroll;
`;

const Projects = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
`;

const Section = styled.div`
  font-family: 'Imprima';
  font-size: 22px;
  color: ${props => props.selected ? '#53c8e5' : 'black'}
  font-weight: ${props => props.weight};
  margin: 0 16px;
`;

// ${props => props.color || '#53c8e5'};

const Portfolio = () => {
  const [categoryFilter, setCategoryFilter] = useState('tech');
  // const query = graphql(queryString);

  const data = useStaticQuery(imageQuery);

  console.log('hmm?', data['rfqa'].childImageSharp.fluid)

  return (
    <>
      <Container>
        <Header>
          <Link>
            <TiHome size={32} color="black" />
          </Link>
          <Section
            selected={categoryFilter === 'tech'}
            onClick={() => setCategoryFilter('tech')}
          >
            tech
          </Section>|
          <Section
            selected={categoryFilter === 'design'}
            onClick={() => setCategoryFilter('design')}
          >
            design
          </Section>|
        </Header>
        <Projects>
          <SEO title="Portfolio" />
          {projectList
            .filter(item => item.category === categoryFilter)
            .map(project =>
              <>
                <PortfolioItem
                  item={project}
                  img={data[project.imgName].childImageSharp.fluid}
                />
              </>
            )
          }
        </Projects>
      </Container>
      <BottomNavBar />
    </>
  );
};

export default Portfolio;

const imageQuery = graphql`
  query {
    rfqa: file(relativePath: { eq: "rfqa.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    wfp: file(relativePath: { eq: "wfp.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shogun: file(relativePath: { eq: "shogun.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    usc: file(relativePath: { eq: "usc.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    marvis: file(relativePath: { eq: "marvis.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sorry: file(relativePath: { eq: "sorry.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    moneytrees: file(relativePath: { eq: "moneytrees.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;