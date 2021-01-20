import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaFolderOpen } from 'react-icons/fa';
import { Link } from 'gatsby';
import { device } from '../utils/mediaQuery';
import { TopNav } from '../components';


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


export default function Template({ data }) {
  const { projectsJson } = data // data.projectsJson holds your post data
  console.log('PROJECTS:::', data);
  const { subheader, header } = projectsJson
  return (
      <div>
        <TopNav />
        <div className="blog-post">
          <h2>{header}</h2>
          <h2>{subheader}</h2>
        </div>
      </div>
  )
}

export const pageQuery = graphql`
  query ($projectPath: String!) {
    projectsJson(path: { eq: $projectPath }) {
      title
      header
      subheader
      imgPath
    }
  }
`