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

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log('EDGES', edges);

  // const Posts = edges
  //   .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  //   .map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  return (
    <>
      <Container>
        <TopNav />
        <SEO title="blog" />
        <div style={{ padding: 64, fontFamily: 'DM Serif Display', fontSize: 36, color: 'coral' }}>
          {/* {Posts} */}
          nothing here, yet!
        </div>
      </Container>
    </>
  );
};

export default Blog;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date
            path
            title
            description
          }
        }
      }
    }
  }
`
