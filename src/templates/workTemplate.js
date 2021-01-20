import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaFolderOpen } from 'react-icons/fa';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import style from './workTemplate.module.css'

import { TopNav } from '../components';
import { lightBeige } from '../utils/colors';
import { device } from '../utils/mediaQuery';

const Container = styled.div`
  background-color: ${lightBeige};
  padding: 24px;

  @media ${device.laptop} {
    padding: 24px 136px;
  }

  @media ${device.tablet} {
    padding: 24px 92px;
  }
`;

export default function Template({ data }) {
  const { mdx, projectImage } = data;

  const {
    title,
    subtitle,
    description,
    breadcrumbs,
    path,
    team,
    skills,
    tools,
    titleColor,
    overviewColor,
    timeline,
  } = mdx.frontmatter;

  const { body } = mdx;

  return (
    <>
      <TopNav />
      <Container>
        <div>
          <div className={style.breadcrumbs}>
            {breadcrumbs.map((crumb, index) => (
              <>
                <h4>{crumb}</h4>
                {index !== (breadcrumbs.length - 1) &&
                  <h4>{'>'}</h4>
                }
              </>
            ))}
          </div>
          <div className={style.headerContainer}>
            <div className={style.header}>
              <h1 style={{ color: titleColor }}>{title}</h1>
              <h4 className={style.caption}>{subtitle}</h4>
              <h4>{description}</h4>
            </div>
            <Img
              alt={path}
              fluid={projectImage.childImageSharp.fluid}
              className={style.previewImage}
            />
          </div>
          <div className={style.overview} style={{ backgroundColor: overviewColor }}>
            <div className={style.overviewDetail}>
              <caption>Team</caption>
              {/* <h4>{team}</h4> */}
              <div className={style.row}>
                {team.map((teammate, index) => (
                  <>
                    <h4>{teammate}</h4>
                    {index !== (team.length - 1) &&
                      <span>{",  "}</span>
                    }
                  </>
                ))}
              </div>
            </div>
            <div className={style.overviewDetail}>
              <caption>Skills</caption>
              <div className={style.row}>
                {skills.map((skill, index) => (
                  <>
                    <h4>{skill}</h4>
                    {index !== (skills.length - 1) &&
                      <span>{",  "}</span>
                    }
                  </>
                ))}
              </div>
            </div>
            <div className={style.overviewDetail}>
              <caption>Tools</caption>
              <div className={style.row}>
                {tools.map((tool, index) => (
                  <>
                    <h4>{tool}</h4>
                    {index !== (tools.length - 1) &&
                      <span>{",  "}</span>
                    }
                  </>
                ))}
              </div>
            </div>
            <div className={style.overviewDetail}>
              <caption>Timeline</caption>
              <div className={style.row}>
                <h4>{timeline}</h4>
              </div>
            </div>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query ($projectPath: String!, $imagePath: String!) {
    mdx(frontmatter: { path: { eq: $projectPath } }) {
      frontmatter {
        title
        date
        description
        breadcrumbs
        subtitle
        imagePath
        descriptor
        team
        skills
        tools
        titleColor
        overviewColor
        timeline
      }
      body
    }
    projectImage: file(name: { eq: $imagePath }) {
      childImageSharp {
        fluid(maxWidth: 400, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

// v2 idea
{/* <div className={style.header}>
<h1 className={style.title}>
  {title}
</h1>
<h1>, {subtitle}</h1>
</div>
<div className={style.details}>
<Img
  alt={path}
  fluid={projectImage.childImageSharp.fluid}
  className={style.projectPreview}
/>
<div className={style.overview}>
  <h4>Overview here!</h4>
</div>
</div> */}
  // over view, with: 1) team, 2) skills, 3) tools, 4) timeline