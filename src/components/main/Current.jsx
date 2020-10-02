import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FiMapPin } from 'react-icons/fi';

import { device } from '../../utils/mediaQuery';
import { teal, darkBlue } from '../../utils/colors';

const Container = styled.div`
  padding: 48px;
  min-height: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media ${device.tablet} {
    padding: 48px 100px;
  }
`;

const Details = styled.div`
  margin-bottom: 48px;
  align-items: center;

  @media ${device.laptopL} {
    padding: 0 200px;
  }
`;

const Link = styled.a`
  color: ${darkBlue};

  &:hover {
    color: ${teal};
  }
`;

const Location = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const Current = () => {
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

  // I'll use my actual resume with the "download" prop on the href once it's updated
  const resumeUrl = 'https://www.linkedin.com/in/sondhayni-murmu/';
  //data.allFile.edges[0].node.publicURL;

  return (
    <Container>
      <Details>
        <h2>
          I am a creative person who loves to get technical.
        </h2>
        <h3 class="center">
          I care deeply about people and believe in possibilities.
        </h3>
      </Details>
      <h3>
        During the day I build things{' '}
        <Link href="https://shoguninc.com" target="_blank" rel="noopener noreferrer">
          <u>@shoguninc</u>
        </Link>.
      </h3>
      <h4>(previously: Rainforest QA, World Food Programme, USC)</h4>
      <h3 style={{ marginTop: 24 }}>
        Download my{' '}
        <Link href={resumeUrl} target="_blank" rel="noopener noreferrer">
          <u>resume</u>
        </Link>.
      </h3>
      <Location>
        <FiMapPin size={18} color="{darkBlue}" />
        <div style={{ marginLeft: 8 }} />
        <h4>San Francisco, CA</h4>
      </Location>
    </Container>
  );
};

export default Current;