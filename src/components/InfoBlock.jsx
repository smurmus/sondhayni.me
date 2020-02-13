import React, { useState } from 'react';

import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FaGithub, FaTwitter, FaLinkedin, FaCodepen, FaFileAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Img from 'gatsby-image';

const Fun = styled.div`
  font-family: ${props => props.font || 'inherit'};
  font-size: 52px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};
  margin: 24px 0px 16px;
`;

const SmallerFun = styled.div`
  font-family: ${props => props.font || 'inherit'};
  font-size: 32px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};
`;

const Description = styled.div`
  font-family: ${props => props.font || 'inherit'};
  font-size: 20px;
  line-height: 40px;
  color: ${props => props.color || '#253f46'};
  font-weight: ${props => props.weight};
  margin: 32px 64px;
  max-width: 600px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

// darker: #253f46

const Bio = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
`;

// #148b92;

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
  flex: 3;
  margin: 16px;
  align-self: stretch;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 24px 64px;
`;

const SocialIcon = styled.div`
  margin-right: 24px;
`;


const InfoBlock = () => {
  const [hoverImage, setImageHover] = useState(false);
  // const data = useStaticQuery(graphql`
  //   {
  //     allFile(filter: { extension: { eq: "pdf" } }) {
  //       edges {
  //         node {
  //           publicURL
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);

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
    <>
      <Bio>
        <ImgContainer
          onMouseEnter={() => setImageHover(true)}
          onMouseLeave={() => setImageHover(false)}
        >
          {hoverImage ?
            <Me
              fluid={data.halfCartoonReveal.childImageSharp.fluid}
            /> :
            <Me
              fluid={data.halfCartoon.childImageSharp.fluid}
            />
          }
        </ImgContainer>
        <TextBox>
          <Fun color="#345e69" font="Work Sans" weight={600}>
            hello!
            <Fun color="lightskyblue" weight={600} style={{ marginLeft: 64 }}>
              sondhayni <span style={{ color: '#345e69' }}> here</span> 👋🏾
            </Fun>
          </Fun>
          <SmallerFun color="coral" font="Abel" weight={400}>
            /n./ maker of art + tech
          </SmallerFun>
          <Description font="Karla" weight={400}>
            during the day I <b>build software</b>{' '}
            <Exp>@shoguninc</Exp>.
            <br />
            I usually spend the rest of my time around coffee shops, (note)books, design theory, and
            dance studios.
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
    </>
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
