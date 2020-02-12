import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import { graphql } from "gatsby"

import SEO from "../components/seo"

import { BottomNavBar } from '../components';
import { PostItem } from '../components/blog';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 100px;
  margin: 0;
`;

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log('EDGES', edges);

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostItem key={edge.node.id} post={edge.node} />)

  return (
    <>
      <Container>
        <Link>
          <TiHome size={32} color="black" />
        </Link>
        <SEO title="Blog" />
        {Posts}
      </Container>
      <BottomNavBar />
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
          }
        }
      }
    }
  }
`
