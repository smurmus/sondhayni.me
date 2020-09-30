import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';

import { TopNav } from '../components';
import {
  Intro,
  Current,
  Projects,
  About,
  Contact,
} from '../components/main';
import '../components/layout.css';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  margin: 0;
  margin-bottom: 100px;
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
`;

const IndexPage = () => (
  <Container>
    <TopNav />
    <SEO title="hi" />
    <Stuff>
      <Intro />
      <Current />
      <Projects />
      <About />
      <Contact />
    </Stuff>
  </Container>
);


export default IndexPage;
