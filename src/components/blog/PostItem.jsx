import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby'

import { device } from '../../utils/mediaQuery';

const Content = styled.div`
	display: flex;
  flex-direction: column;
  margin: 16px 0px 16px;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
  align-items: center;
  align-content: center;
`;

const Title = styled(Link)`
  font-size: 32px;
  color: ${props => props.color || '#53c8e5'};
  font-weight: ${props => props.weight || 400};
  text-decoration: none;
`;

const PostLink = styled.div`
  color: white;
  background-color: ${props => props.bgColor || '#387aa2'};
  text-align: center;
  padding: 16px;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

const Date = styled.div`
	font-family: Work Sans;
  font-size: 18px;
  margin-left: 16px;
	color: ${props => props.color || '#345e69'};
	font-weight: 400;
`;

const Excerpt = styled.span`
  margin-left: 8px;
  margin-top: 8px;
	font-family: Karla;
	font-size: 18px;
	color: ${props => props.color || '#345e69'};
	font-weight: 300;
`;

const Fun = styled.div`
  font-family: ${props => props.font || 'DM Serif Display'};
  font-weight: ${props => props.weight};

  @media ${device.laptop} {
    font-size: 52px;
  }

  @media ${device.tablet} {
    font-size: 48px;
  }
`;


const PostItem = ({ post }) => {
  return (
    <Content>
      <Header>
        <Fun color="#7CAA4D" weight={600}>
          <Title to={post.frontmatter.path}>{post.frontmatter.title}</Title>
        </Fun>
        <Excerpt>
          — {post.frontmatter.date}
        </Excerpt>
      </Header>
    </Content>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;