import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from 'gatsby';
import projectList from './projectList';
import Img from 'gatsby-image';

const Content = styled.div`
	display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: snow;
  margin: 16px;
  box-shadow: 5px 5px 10px #f3f0f0;
  border-radius: 10px;
  justify-content: stretch;
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
  padding: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-family: 'Imprima';
  font-size: 16px;
	font-weight: ${props => props.weight || 400};
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

const Thumbnail = styled(Img)`
  width: 300px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  flex: 2;
`;

const TextContent = styled.div`
  padding: 32px;
  flex: 1;
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
      <TextContent>
        <Header>
          {/* <PostLink bgColor="#7CAA4D"> */}
          <Title>
            {item.title}
          </Title>
          {/* </PostLink> */}
        </Header>
        {/* <Date>{item.subtitle}</Date> */}
        <Excerpt>
          {item.blurb}
        </Excerpt>
      </TextContent>
    </Content>
  );
};

PortfolioItem.propTypes = {
  item: PropTypes.object,
  img: PropTypes.string,
};


export default PortfolioItem;