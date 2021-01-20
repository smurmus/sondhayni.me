import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { TopNav } from '../components';
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
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
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
  <Container>
    <TopNav />
    <SEO title="hi" />
    <Stuff>
      <Intro />
      {/* <svg width="100%" height="100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M0 0 l 500 100 L 800 0" stroke="#E22431" fill="none" />
      </svg> */}
      {/* <svg viewBox="0 0 10 10" height="100" class="svg-7" stroke-linecap="round">
        {arr.map(_a => (
          <path d="M2,5 S2,-2 6,5 S9,8 12,5" fill="none" stroke="#E22431"/>
        ))}
      </svg> */}
      <ProjectsIndex projects={edges} />
      <Current />
      <Projects />
      <About />
      <Contact />
    </Stuff>
  </Container>
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
        }
      }
    }
  }
`