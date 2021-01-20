import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { TopNav, Footer } from '../components';
import { device } from '../utils/mediaQuery';
import {
  Current,
  Projects,
  About,
  Contact,
} from '../components/main';
import { Intro, ProjectsIndex } from '../components/fiesty';
import './index.css';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
  margin-bottom: 100px;
  flex: 1;
`;

const Stuff = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Dashed = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px #E22431 dashed;
`;

const arr = [0, 1, 2, 3]

const IndexPage = ({
  data: {
    allProjectsJson: { edges },
  },
}) => (
  <>
    <Container>
      <TopNav />
      <SEO title="hi" />
      <Stuff>
        <Intro />
        <ProjectsIndex projects={edges} />
      </Stuff>
      <Footer />
    </Container>
  </>
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