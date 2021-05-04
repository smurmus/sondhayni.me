import React from 'react'
import styled from 'styled-components';
import { graphql } from "gatsby"

import { TopNav, Footer } from '../../components';
import { device } from '../../utils/mediaQuery';
import { offwhite, lightBeige } from '../../utils/colors';
// import '../index.css';

const Container = styled.div`
  background-color: ${lightBeige};
  margin: 0;
  flex: 1;
  height: 100vh;
`;

const Stuff = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100%;
  padding-top: 48px;
	background-color: ${offwhite};

  @media ${device.tablet} {
    padding-top: 100px;
	}
`;

const Dashed = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px #E22431 dashed;
`;

const ProjectRow = styled.div`
  padding-top: 200px;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`;

const Item = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 32px 0;
  width: 100%;
	height: auto;

  &:hover {
		background-color: black;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
    background-blend-mode: multiply;
    transform: scale(1.02, 1.02);
  }
`;  

const ProjectsPage = () => (
  <div>
    <TopNav />
    <Container>
      <Item>
        <h2>
          This is a project.
        </h2>
      </Item>
    </Container>
    <Footer />
  </div>
);


export default ProjectsPage;