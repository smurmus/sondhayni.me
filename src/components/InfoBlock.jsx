import React, { useState } from 'react';

import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen, FaFileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Img from 'gatsby-image';

import { device } from './mediaQuery';

const Fun = styled.div`
  font-family: ${props => props.font || 'inherit'};
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
  font-family: Roboto;
  font-size: 16px;
  line-height: 30px;
  color: ${props => props.color || '#253f46'};
  font-weight: ${props => props.weight};
  margin-top: 16px;
  white-space: normal;
  width: 350px;

  @media ${device.tablet} {
    width: 500px;
    font-size: 18px;
  }

  @media ${device.laptop} {
    margin: 32px 64px;
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
`;

const Bio = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  padding-bottom: 100px;

  @media ${device.laptop} {
    flex-direction: row;
    padding-bottom: 0;
  }
`;


const Exp = styled.span`
  color: white; // ${props => props.color || '#1dc1ca'};
  background-color: ${props => props.bgColor || '#387aa2'};
  text-align: center;
  padding: 8px;
  border-radius: 15px;
`;

const Me = styled(Img)`
  height: 100%;
`;

const ImgContainer = styled.div`
  @media ${device.laptop} {
    flex: 3;
  }

  @media ${device.tablet} {
    flex: 2;
  }
  margin: 16px;
  align-self: stretch;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 24px 0;

  @media ${device.tablet} {
    margin: 24px 64px;
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
  const [hoverImage, setImageHover] = useState(false);
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
      <ImgContainer>
        <Me
          fluid={data.halfCartoon.childImageSharp.fluid}
        />
      </ImgContainer>
      <TextBox>
        <Fun color="#345e69" font="Work Sans" weight={600}>
          hello!
          <FunName color="lightskyblue" weight={600}>
            sondhayni <Here> here</Here> 👋🏾
          </FunName>
        </Fun>
        <SmallerFun color="coral" font="Abel" weight={400}>
          /n./ maker of art + tech
        </SmallerFun>
        <Description weight={300}>
          during the day I <b>build software</b>{' '}
          <Exp>@shoguninc</Exp>.
          <br />
          I usually spend the rest of my time around
          coffee shops, (note)books, design theory,
          and dance studios.
          <br />
          <br />
          previously{' '}
          <Exp bgColor="#7CAA4D">@rainforestqa</Exp>,{' '}
          <Exp bgColor="lightskyblue">@world food programme</Exp>,{' '}
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
            <SocialIcon>
              <FaFileAlt size={32} color="black" />
            </SocialIcon>
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
// export default compose(
//   withState('clicked', 'setClicked', false),
// )(InfoBlock);
