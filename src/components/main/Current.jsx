import React from 'react'
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import { FiMapPin } from 'react-icons/fi';

import '../styles.css';

const Container = styled.div`
  padding: 48px 100px;
  min-height: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Details = styled.div`
  margin-bottom: 48px;
  padding: 0 200px;
  align-items: center;
`;

const Link = styled.a`
  color: #162B4A;

  &:hover {
    color: #02bdd5;
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
  const resumeUrl = data.allFile.edges[0].node.publicURL;

  return (
    <Container id="currently-at">
      <Details>
        <h3 class="dark-blue-text bold center">
          I am a creative who happens to be a software engineer.
        </h3>
        <h3 class="dark-blue-text center">
          I care deeply about people and believe in possibilities.
        </h3>
      </Details>
      <h3 class="dark-blue-text bold">
        during the day I build things{' '}
        <Link href="https://shoguninc.com" target="_blank" rel="noopener noreferrer">
          <u>@shoguninc</u>
        </Link>.
      </h3>
      <h3 class="dark-blue-text">(previously: rainforest qa, world food programme, usc)</h3>
      <h3 class="dark-blue-text bold" style={{ marginTop: 24 }}>
        download my{' '}
        <Link href={resumeUrl} download>
          <u>resume</u>
        </Link>.
      </h3>
      <Location>
        <FiMapPin size={18} color="#162B4A" />
        <div style={{ marginLeft: 8 }} />
        <h4 class="dark-blue-text center">San Francisco, CA</h4>
      </Location>
    </Container>
  );
};

export default Current;