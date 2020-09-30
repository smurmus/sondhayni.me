import React from 'react'
import styled from 'styled-components';

import me from '../../images/me_chair.png';

import '../styles.css';

const Container = styled.div`
  padding-right: 0;
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #e5f6f8;
`;

const Emphasize = styled.span`
  color: #162B4A;
  font-weight: 600;
`;

const Details = styled.div`
  padding: 48px 100px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Portrait = styled.img`
  margin-left: 64px;
  height: 100%;
  width: auto;
`;

const Description = styled.div`
  margin-top: 32px;
`;

const About = () => (
  <Container id="about-me">
    <Details>
      <h3 class="dark-blue-text bold">About</h3>
      <Description>
        {/* <h4 class="dark-blue-text">/n./ maker of tech + art</h4> */}
        {/* <br /> */}
        <h5 class="dark-blue-text">
          I'm a <Emphasize>creative</Emphasize> and <Emphasize>curious</Emphasize> maker who's into identifying
          possibilities and problems and playing with ways to fix them—I excel at <Emphasize>listening</Emphasize> and asking questions that solve for
          what people want and need, even when they don't explicitly say it.
        <br />
          <br />
          I graduated from the <Emphasize>University of Southern California</Emphasize> with a bachelor's in Computer Engineering & Computer Science (and a minor in
        3d Computer Graphics and Modeling!) and a mission to make the world a <Emphasize>kinder</Emphasize> place.
          <br />
          <br />
          I have a lot of hobbies, so I try to split my "down" time between puzzles, writing, reading, gaming, or making art.
        <br />
          <br />
        This website is part showcase of some of my work, but mainly an exploration of identity, perspective, and
        things completely unrelated to "software engineering."

        <br />
          <br />
          <Emphasize>This is a work in progress.</Emphasize>
        </h5>
      </Description>
    </Details>
    <Portrait src={me} />
  </Container>
);

export default About;