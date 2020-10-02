import React from 'react'
import styled from 'styled-components';

import me from '../../images/me_chair.png';

import { lightBlue } from '../../utils/colors';
import { device } from '../mediaQuery';

const Container = styled.div`
  padding-right: 0;
  align-items: center;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${lightBlue};

  @media ${device.laptop} {
    flex-direction: row;
    min-height: 600px;
    flex: 1;
    align-items: center;
  }
`;

const Details = styled.div`
  padding: 48px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Portrait = styled.img`
  width: auto;

  @media ${device.laptop} {
    max-height: 600px;
    margin-left: 48px;
    height: 100%;
  }
`;

const Description = styled.div`
  margin-top: 16px;
`;

const About = () => (
  <Container id="about-me">
    <Details>
      <h2 style={{ alignSelf: 'flex-start' }}>About</h2>
      <Description>
        <p>
          I'm a <b>creative</b> and <b>curious</b> maker who's into identifying
          possibilities and problems and playing with ways to fix them—I excel at <b>listening</b> and asking questions that solve for
          what people want and need, even when they don't explicitly say it.
        </p>
        <p>
          I graduated from the <b>University of Southern California</b> with a bachelor's in Computer Engineering & Computer Science (and a minor in
          3d Computer Graphics and Modeling!) and a mission to make the world a <b>kinder</b> place.
        </p>
        <p>
          I have a lot of hobbies, so I try to split my "down" time between puzzles, writing, reading, gaming, or making art.
        </p>
        <p>
          This website is part showcase of some of my work, but mainly an exploration of identity, perspective, and
          things completely unrelated to "software engineering."
        </p>
      </Description>
    </Details>
    <Portrait src={me} />
  </Container>
);

export default About;