import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { TopNav, Footer } from '../components';
import { device } from '../utils/mediaQuery';
import { offwhite,  lightBeige } from '../utils/colors';
import { Intro, ProjectsIndex, ProjectList } from '../components/fiesty';
import './index.css';

const Container = styled.div`
  background-color: #fff5ee;
  margin: 0;
  flex: 1;
  height: 100%;
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  padding-top: 48px;
	background-color: ${lightBeige};

  @media ${device.tablet} {
    padding-top: 100px;
	}
`;

const Dashed = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px #E22431 dashed;
`;

const IndexPage = ({
  data: {
    allProjectsJson: { edges },
  },
}) => (
  <div style={{ position: 'relative' }}>
    <TopNav />
    <Container>
      <SEO title="hi" />
      <Stuff>
        <Intro />
        {/* <ProjectList projects={edges} /> */}
      </Stuff>
    </Container>
      <Footer />
  </div>
);


export default IndexPage;

export const ptojectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
          header
          subheader
          imgPath
          path
          bgColor
        }
      }
    }
  }
`