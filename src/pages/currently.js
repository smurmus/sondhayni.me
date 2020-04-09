import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import SEO from '../components/seo'
import { TopNav } from '../components';
import { device } from '../components/mediaQuery';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  margin: 0;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const Section = styled.div`
  font-family: Karla;
  font-size: 16px;
  color: #345e69;
  font-weight: 400;
  margin-right: 16px;
  padding: 64px;
  padding-right: 0;
  flex: 2;
`;

const Fun = styled.div`
  font-family: ${props => props.font || 'DM Serif Display'};
  font-size: 36px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight};

  @media ${device.laptop} {
    font-size: 52px;
  }

  @media ${device.tablet} {
    font-size: 48px;
  }
`;

const Subtitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  font-family: Karla;
  color: coral;
`;


const Currently = () => (
  <>
    <Container>
      <TopNav />
      <SEO title="state of the union" />
      <SubContainer>
        <Section>
          <Fun color="lightskyblue" weight={600}>
            currently
          </Fun>
          <br />
          <Subtitle>reading:</Subtitle>
          <i>uncanny valley</i> — anna wiener
          <br />
          <a
            style={{ color: '#7CAA4D' }}
            href="https://superorganizers.substack.com/p/how-to-build-a-learning-machine"
          >
            "how to make yourself into a learning machine"
            </a> — dan shipper
          <br />
          <i>this is how you lose the time war</i> — amal el-mohtar & max gladstone
          <br />
          <br />
          <Subtitle>listening to:</Subtitle>
          synthwave
          <br />
          recode decode <i>(podcast)</i>
          <br />
          presentable <i>(podcast)</i>
          <br />
          design details <i>(podcast)</i>
          <br />
          <br />
          <Subtitle>watching:</Subtitle>
          little fires
        </Section>
      </SubContainer>
    </Container>
  </>
);

export default Currently;
