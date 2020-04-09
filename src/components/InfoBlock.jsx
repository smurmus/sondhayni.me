import React, { useState } from 'react';

import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen, FaFileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Img from 'gatsby-image';

import { device } from './mediaQuery';

const Fun = styled.div`
  font-family: ${props => props.font || 'DM Serif Display'};
  font-size: 36px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};
  margin: 16px 0;

  @media ${device.laptop} {
    font-size: 52px;
    margin: 24px 0px 16px;
  }

  @media ${device.tablet} {
    font-size: 48px;
    margin: 16px 0px;
  }
`;

const FunName = styled(Fun)`
  margin-top: -24px;

  @media ${device.tablet} {
    margin-left: 64px;
  }
`;

const SmallerFun = styled.div`
  font-family: ${props => props.font || 'inherit'};
  font-size: 24px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};

  @media ${device.tablet} {
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-family: Karla;
  font-size: 16px;
  line-height: 36px;
  color: ${props => props.color || '#253f46'};
  font-weight: ${props => props.weight};
  margin-top: 16px;
  white-space: normal;
  width: 100%;

  @media ${device.laptop} {
    padding-right: 24px;
    line-height: 40px;
    font-size: 20px;
  }
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {	
    flex: 3;	
  }

  @media ${device.laptop} {	
    margin-bottom: 0;	
    padding-top: 0;	
  }
`;

const Bio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  background-color: #fff5ee;
  padding: 64px;

  @media ${device.laptop} {
    flex-direction: row;
    padding: 0 100px;
    padding-bottom: 0;
  }
`;


const Exp = styled.span`
  color: white;
  background-color: ${props => props.bgColor || '#387aa2'};
  text-align: center;
  padding: 8px;
  border-radius: 15px;
`;

const Me = styled(Img)`
  height: 100%;
`;

const ImgContainer = styled.div`
  display: none;

  @media ${device.laptop} {
    display: block;
    flex: 3;
    margin: 16px;
    align-self: stretch;
  }
`;

const ImgContainerSmall = styled.div`
  @media ${device.laptop} {
    display: none;
  }

  flex: 1;
  margin: 16px 16px -64px;
  align-self: stretch;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 36px;

  @media ${device.laptop} {
    justify-content: flex-start;
  }
`;

const SocialIcon = styled.div`
  margin-right: 24px;
`;

const Here = styled.span`
  color: #345e69;

  @media ${device.laptop} {
    flex: 3;
  }
`;


const InfoBlock = () => {
  const query = graphql`
    query {
      me_cartoon: file(relativePath: { eq: "me_cartoon_head.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      halfCartoonReveal: file(relativePath: { eq: "cartoon_reveal.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      halfCartoon: file(relativePath: { eq: "me_half_cartoon.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allFile(filter: { sourceInstanceName: { eq: "docs" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const resumeUrl = data.allFile.edges[0].node.publicURL;

  return (
    <Bio>
      <TextBox>
        <Fun color="#345e69" weight={600}>
          hello!
          <FunName color="lightskyblue" weight={600}>
            sondhayni <Here> here</Here> 👋🏾
          </FunName>
        </Fun>
        <SmallerFun color="coral" font="DM Serif Display" weight={400}>
          /n./ maker of art + tech
        </SmallerFun>
        <Description weight={400}>
          during the day I <b>build software</b>{' '}
          <Exp>@shoguninc</Exp>. I usually spend the rest of my time around
          coffee shops, (note)books, design theory,
          and dance studios.
          <br />
          <br />
          previously{' '}
          <Exp bgColor="#7CAA4D">@rainforestqa</Exp>,{' '}
          <Exp bgColor="lightskyblue" style={{ whiteSpace: 'pre' }}>@world food programme</Exp>,{' '}
          <Exp bgColor="#7CAA4D">@usc</Exp>
        </Description>
        <Socials>
          <a href="https://github.com/smurmus" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <FaGithub size={32} color="black" />
            </SocialIcon>
          </a>
          <a href="https://www.linkedin.com/in/sondhayni-murmu/" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <FaLinkedin size={32} color="black" />
            </SocialIcon>
          </a>
          <a href="https://twitter.com/sondhayni" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <FaTwitter size={32} color="black" />
            </SocialIcon>
          </a>
          <a href="https://codepen.io/smurmus" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <FaCodepen size={32} color="black" />
            </SocialIcon>
          </a>
          <a href="mailto:sondhayni@gmail.com" target="_blank" rel="noopener noreferrer">
            <SocialIcon>
              <IoMdMail size={32} color="black" />
            </SocialIcon>
          </a>
          <a href={resumeUrl} download>
            <FaFileAlt size={32} color="black" />
          </a>
        </Socials>
      </TextBox>
    </Bio>
  );
};


// render() {
//   // Note: this is an escape hatch and should be used sparingly!
//   // Normally they recommend using `import` for getting asset URLs
//   // as described in the “Adding Images, Fonts, and Files” page.
//   return (
//     <a
//       rel="noopener noreferrer"
//       href={withPrefix('/my_pdf.pdf')}
//       target="_blank"> Click to see my pdf
//     </a>
//   )
// }

export default InfoBlock;
