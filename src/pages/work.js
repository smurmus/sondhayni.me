import React from "react"
import styled from 'styled-components';
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"

import { TopNav } from '../components';
import { CustomImage } from '../components/utils';
import { PostItem } from '../components/blog';
import { white, lightBeige } from "../utils/colors";

const Container = styled.div`
  background-color: ${lightBeige};
  height: 100vh;
  margin: 0;
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

const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	// flex: 1;
  width: 100%;
`;

const ProjItem = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  border: 1px solid #F2F8FF;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  max-width: 400px;
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
    background-blend-mode: multiply;
    transform: scale(1.02, 1.02);
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const Projects = styled.div`
  padding: 100px;
`;

const Work = ({
  data: {
    allProjectsJson: { edges },
  },
}) => {
  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  console.log('buhhh???', edges)
  return (
    <Container>
      <TopNav />
      <SEO title="work" />
      <Projects>
        <Row>
        <ProjectLink to={`/projects/moving-app`}>
          <ProjItem>
            <div style={{ width: '100%', marginBottom: 8, paddingLeft: 24, paddingRight: 24 }}>
              <CustomImage src="clay_mockups.png" alt="clay mockups" />
            </div>
            <div style={{
              width: '100%',
              paddingTop: 16,
              paddingBottom: 8,
              backgroundColor: '#F2F8FF',
              textAlign: 'center', 
              borderRadius: '0 0 8px 8px',
              color: white
            }}>
              <h3>MoveSort</h3>
              <p>Product design / UX Case Study</p>
            </div>
          </ProjItem>
          </ProjectLink>
          {/* <ProjectLink to={`/work/active-allies`}>
          <ProjItem>
            <div style={{ width: '100%' }}>
              <CustomImage src="aa-desktop-mockup.png" alt="clay mockups" />
            </div>
            <div style={{
              width: '100%',
              paddingTop: 16,
              paddingBottom: 8,
              backgroundColor: '#F2F8FF',
              textAlign: 'center', 
              borderRadius: '0 0 8px 8px',
              color: white
            }}>
              <h3>ActiveAllies</h3>
              <p>Design Concept</p>
            </div>
          </ProjItem>
          </ProjectLink> */}
        </Row>
      </Projects>
    </Container>
  );
};

export default Work;

export const pageQuery = graphql`
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
