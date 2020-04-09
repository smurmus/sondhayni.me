import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';

import { InfoBlock, TopNav } from '../components';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
`;

const IndexPage = () => (
  <>
    <Container>
      <TopNav />
      <SEO title="hi" />
      <InfoBlock />
    </Container>
  </>
);


export default IndexPage;
