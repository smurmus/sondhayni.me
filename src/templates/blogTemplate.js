import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaFolderOpen } from 'react-icons/fa';
import { Link } from 'gatsby';
import { device } from '../utils/mediaQuery';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  margin: 0;
  overflow: scroll;
  padding: 24px;

  @media ${device.tablet} {
    padding: 100px;
  }
`;

const BlogHome = styled(Link)`
	margin-bottom: 8px;
`;

const Content = styled.div`
  font-family: Roboto;
  font-weight: 300;

  @media ${device.laptop} {
    padding-right: 200px;
  }
`;

const PostLink = styled.div`
  color: white;
  background-color: ${props => props.bgColor || '#387aa2'};
  text-align: center;
  padding: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Title = styled(Link)`
	font-family: 'Work Sans';
	font-size: 36px;
  font-weight: ${props => props.weight || 400};
  text-decoration: none;
  color: white;
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
          <Title>{frontmatter.title}</Title>
          <h2>{frontmatter.date}</h2>
          <Content
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
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