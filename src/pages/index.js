import React from "react"
import styled from 'styled-components';

import { InfoBlock, BottomNavBar } from '../components';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  margin: 0;
`;

const IndexPage = () => (
  <>
    <Container>
      <InfoBlock />
    </Container>
    <BottomNavBar />
  </>
);


export default IndexPage;
