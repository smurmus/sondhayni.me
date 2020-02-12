import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { Link } from "gatsby"

const Content = styled.div`
	display: flex;
  flex-direction: column;
  max-width: 700px;
  background-color: snow;
  padding: 32px;
  margin: 16px 0px 16px;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Title = styled(Link)`
	font-family: 'Work Sans';
	font-size: 36px;
  font-weight: ${props => props.weight || 400};
  text-decoration: none;
  color: white;
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
	font-family: 'Abel';
  font-size: 20px;
  margin-top: 16px;
	color: ${props => props.color || '#345e69'};
	font-weight: ${props => props.weight || 700};
`;

const Excerpt = styled.div`
	margin-top: 16px;
	font-family: 'Karla';
	font-size: 18px;
	color: ${props => props.color || 'black'};
	font-weight: ${props => props.weight || 400};
`;


const PostItem = ({ post }) => {
  return (
    <Content>
      <Header>
        <PostLink bgColor="#7CAA4D">
          <Title to={post.frontmatter.path}>{post.frontmatter.title}</Title>
        </PostLink>
      </Header>
      <Date>{post.frontmatter.date}</Date>
      <Excerpt>
        {post.excerpt}
      </Excerpt>
    </Content>
  );
};

PostItem.propTypes = {
  post: PropTypes.object,
};

export default PostItem;