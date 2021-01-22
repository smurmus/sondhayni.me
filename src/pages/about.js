import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { TopNav } from '../components';
import { CustomImage } from '../components/utils';
import { device } from '../utils/mediaQuery';
import {
  Current,
  Projects,
  About,
  Contact,
} from '../components/main';
import { Intro, ProjectsIndex } from '../components/fiesty';
import { Footer } from '../components';
import './index.css';
import style from './about.module.css'

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
  padding-bottom: 100px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 100px 24px 64px;
  background-color: #fff5ee;

  @media ${device.laptop} {
    padding: 64px 136px;
  }

  @media ${device.tablet} {
    padding: 64px 136px;
  }
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Dashed = styled.div`
  width: 100%;
  height: 2px;
  border-top: 1px #E22431 dashed;
`;

const ImgContainer = styled.div`
  maxWidth: 400px;
  width: 400px;
  height: auto;
  padding: 0 24px;
  `;

const AboutPage = ({
  data: {
    allProjectsJson: { edges },
  },
}) => (
  <Container>
    <TopNav />
    <SEO title="about" />
    <Header className={style.header}>
      <Details>
        <h4>About</h4>
        <h1>hello, <span style={{ color: '#E22431' }}>sondhayni</span> here! 👋🏾</h1>
        <Col>
          <div className={style.overview}>
            <h4>📍 San Francisco, CA</h4>
          </div>
          <div className={style.overview}>
            <h4>💼 Software Engineer @ Shogun Enterprises</h4>
          </div>
          <div className={style.overview} style={{ backgroundColor: 'transparent' }}>
            <p>
              I'm a <b>creative</b> and <b>curious</b> maker who's into identifying
          possibilities and problems and playing with ways to fix them—I excel at <b>listening</b> and asking questions that solve for
          what people want and need, even when they don't explicitly say it.
        </p>
            <p>
              I graduated from the <b>University of Southern California</b> with a bachelor's in Computer Engineering & Computer Science and a minor in
          3D Computer Graphics and Modeling, with a mission to make the world a <b>kinder</b> place.
        </p>
            <p>
              I have a wide range hobbies, so I try to split my "down" time between puzzles, writing, reading, gaming, or making art.
        </p>
            <p>
              This website is part showcase of some of my work, but mainly an exploration of identity, perspective, and
              things completely unrelated to "software engineering."
        </p>
          </div>
        </Col>
        {/* <svg width="100%" height="100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M0 0 l 500 100 L 800 0" stroke="#E22431" fill="none" />
      </svg> */}
        {/* <svg viewBox="0 0 10 10" height="100" class="svg-7" stroke-linecap="round">
        {arr.map(_a => (
          <path d="M2,5 S2,-2 6,5 S9,8 12,5" fill="none" stroke="#E22431"/>
        ))}
      </svg> */}
        {/* <About /> */}
        {/* <Contact /> */}
      </Details>
      <ImgContainer>
        <CustomImage src="me_chair.png" alt="me in a big chair" />
      </ImgContainer>
    </Header>
    <Footer />
  </Container>
);


export default AboutPage;

export const ptojectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
          header
          subheader
          imgPath
          bgColor
        }
      }
    }
  }
`