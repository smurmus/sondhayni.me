import React from "react"
import styled from 'styled-components';
import { graphql } from "gatsby"

import SEO from "../components/seo"

import { TopNav } from '../components';
import { PostItem } from '../components/blog';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
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
    <>
      <Container>
        <TopNav />
        <SEO title="work" />
        <h1>Projects here!</h1>
        <div style={{ padding: 64, fontFamily: 'Josefin Sans', fontSize: 36, color: '#02bdd5' }}>
          {/* {Posts} */}
          nothing here, yet!
        </div>
      </Container>
    </>
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
