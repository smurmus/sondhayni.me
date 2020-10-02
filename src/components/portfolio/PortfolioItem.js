import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from 'gatsby';
import projectList from './projectList';
import Img from 'gatsby-image';

import { device } from '../utils/mediaQuery';

const Content = styled.div`
	display: flex;
  flex-direction: column;
  margin: 16px;
  // box-shadow: 5px 5px 10px #f3f0f0;
  border-radius: 10px;
  justify-content: stretch;
  // position: relative;

  @media ${device.tablet} {
    flex-direction: row;
    height: 200px;
  }
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

// const Title = styled(Link)`
// 	font-family: 'Work Sans';
// 	font-size: 36px;
//   font-weight: ${props => props.weight || 400};
//   text-decoration: none;
//   color: white;
// `;

const PostLink = styled.div`
  color: white;
  background-color: ${props => props.bgColor || 'lightskyblue'};
  text-align: center;
  padding: 8px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: Work Sans;
  font-size: 20px;
  color: black;
  font-weight: ${props => props.weight || 700};
`;

const Date = styled.div`
	font-family: 'Abel';
  font-size: 20px;
  margin-top: 16px;
	color: ${props => props.color || '#345e69'};
	font-weight: ${props => props.weight || 700};
`;

const Excerpt = styled.div`
	margin-top: 16px;
	font-family: 'Lora';
	font-size: 14px;
	color: ${props => props.color || 'black'};
	font-weight: ${props => props.weight || 400};
`;

const Description = styled.div`
	margin-top: 16px;
	font-family: Roboto;
	font-size: 16px;
	color: ${props => props.color || 'black'};
  font-weight: ${props => props.weight || 300};

  @media ${device.laptop} {
    padding-right: 100px;
  }
`;

const Thumbnail = styled(Img)`
  width: 100%;
  overflow: hidden;
  border-radius: 10px; // 10px 0 0;
  flex: 1;
  max-height: 200px;

  @media ${device.tablet} {
    width: 300px;
    height: 100%;
  }
`;

const Overlay = styled.div`
  z-index: 10;
  opacity: 0.6;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  position: absolute;
  border-radius: 10px;
`;

const TextContent = styled.div`
  padding: 8px 32px;
  flex: 1;
`;

const Info = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  flex: 2;

  @media ${device.tablet} {
    padding: 20px 32px;
  }
`;

// item should have: title, subheader (i.e. type)
const PortfolioItem = ({ item, img }) => {
  console.log(projectList);
  return (
    <Content>
      <Thumbnail
        alt={item.title}
        fluid={img}
      />
      <Info>
        <Title>
          {item.title}
          <br />
          -
        </Title>
        <Description>
          {item.blurb}
        </Description>
      </Info>
      {/* <Overlay /> */}
      {/* <TextContent>
        <Header>
          <PostLink bgColor="#7CAA4D">
            <Title>
              {item.title}
            </Title>
          </PostLink>
        </Header>
        <Date>{item.subtitle}</Date>
        <Excerpt>
          {item.blurb}
        </Excerpt>
      </TextContent> */}
    </Content>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object,
  img: PropTypes.string,
};


export default PortfolioItem;