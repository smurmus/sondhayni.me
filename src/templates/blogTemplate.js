import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FaFolderOpen } from 'react-icons/fa';
import { Link } from "gatsby";
import { BottomNavBar } from '../components';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  padding: 100px;
  margin: 0;
  overflow: scroll;
`;

const BlogHome = styled(Link)`
	margin-bottom: 8px;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Container>
        <BlogHome to="/blog">
          <FaFolderOpen size={32} color="black" />
        </BlogHome>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            style={{ fontFamily: 'Karla' }}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
      <BottomNavBar />
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`