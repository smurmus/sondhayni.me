import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCodepen,
  FaFileAlt,
  FaDribbble,
} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { device } from '../mediaQuery';

const Container = styled.div`
  padding: 48px;
  height: 150px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #162B4A;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  margin-right: 24px;
  color: white;

  &:hover {
    color: #02bdd5;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
`;

const Contact = () => {
  const fileQuery = graphql`
    query {
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

  const data = useStaticQuery(fileQuery);
  const resumeUrl = data.allFile.edges[0].node.publicURL;

  return (
    <Container>
      {/* <h3 class="white-text bold">Other places</h3> */}
      <Socials>
        <a href="https://github.com/smurmus" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <FaGithub size={32} color="inherit" />
          </SocialIcon>
        </a>
        <a href="https://www.linkedin.com/in/sondhayni-murmu/" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <FaLinkedin size={32} color="inherit" />
          </SocialIcon>
        </a>
        <a href="https://twitter.com/sondhayni" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <FaTwitter size={32} color="inherit" />
          </SocialIcon>
        </a>
        <a href="https://codepen.io/smurmus" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <FaCodepen size={32} color="inherit" />
          </SocialIcon>
        </a>
        <a href="https://dribbble.com/sondhayni" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <FaDribbble size={32} color="inherit" />
          </SocialIcon>
        </a>
        <a href="mailto:sondhayni@gmail.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon>
            <IoMdMail size={32} color="inherit" />
          </SocialIcon>
        </a>
        {/* <a href={resumeUrl} download>
          <FaFileAlt size={32} color="white" />
        </a> */}
      </Socials>
      <Email>
        <h4 class="white-text center">sondhayni@gmail.com</h4>
      </Email>
    </Container>
  );
};

export default Contact;