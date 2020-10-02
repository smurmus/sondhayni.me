import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import corkboard from '../../images/corkboard.jpg';
import { device } from '../../utils/mediaQuery';

import { teal, white, darkBlue } from '../../utils/colors';

const Container = styled.div`
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${darkBlue};
  overflow: hidden;
  flex: 1;

  @media ${device.tablet} {
    display: flex;
    flex-direction: row;
    flex: 1;
  }
`;

const Corkboard = styled.div`
  opacity: 0.8;
  overflow: hidden;
  width: 100%;
  height: auto;

  @media ${device.tablet} {
    display: flex;
    flex: 1;
  }
`;

const CorkImg = styled.img`
  flex-shrink: 0;
  width: auto;
  min-height: 100%;
  resize: contain;

  @media ${device.tablet} {
    display: flex;
  }
`;

const Header = styled.div`
  display: flex;
  color: ${white};
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  flex: 1;
`;

const HighlightText = styled.span`
  background-color: ${white};
  color: ${teal};
  padding: 8px;
`;

const Identity = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const identities = [
  'a software engineer',
  'a maker',
  'an artist',
  'a dancer',
  'a writer',
  'a designer',
];

const Intro = () => (
  <Container>
    <Corkboard>
      <CorkImg src={corkboard} />
    </Corkboard>
    <Header>
      <h1>
        hello! <HighlightText>sondhayni</HighlightText> here 👋🏾
      </h1>
      <Identity>
        <h1>I am </h1>
        <h1>
          <Typewriter
            options={{
              strings: identities,
              wrapperClassName: 'typewriter',
              autoStart: true,
              loop: true,
              skipAddStyles: true
            }}
          />
        </h1>
      </Identity>
    </Header>
  </Container>
);

export default Intro;