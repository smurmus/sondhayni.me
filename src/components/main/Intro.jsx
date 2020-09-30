import React from 'react'
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

import corkboard from '../../images/corkboard.jpg';
import { device } from '../mediaQuery';
import '../styles.css';

const Container = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #162B4A;
  overflow: hidden;
  flex: 1;
`;

const Corkboard = styled.div`
  opacity: 0.8;
  display: none;
  overflow: hidden;

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
  display: none;

  @media ${device.tablet} {
    display: flex;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px;
  flex: 1;
`;

const HighlightText = styled.span`
  background-color: white;
  color: #02bdd5;
  padding: 8px;
`;

const Identity = styled.div`
  display: flex;
  flex-direction: row;
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
      <h2 class="white-text">
        hello! <HighlightText>sondhayni</HighlightText> here 👋🏾
      </h2>
      <Identity>
        <h2 class="white-text">
          I am
        </h2>
        <h2>
          <Typewriter
            options={{
              strings: identities,
              wrapperClassName: 'typewriter',
              autoStart: true,
              loop: true,
              skipAddStyles: true
            }}
          />
        </h2>
      </Identity>
    </Header>
  </Container>
);

export default Intro;