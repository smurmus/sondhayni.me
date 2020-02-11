import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { compose, withState } from 'recompose';

// import Image from './image';

// const Box = styled.div`
//   background-color: #ffdb7f;
// 	border-radius: 5px;
// `;

const Overlay = styled.div`
	// margin: 16px 0;
	// box-shadow: 0 1px 6px 2px grey;
	border-radius: 125px;
	height: 250px;
	width: 250px;
	margin: 8px;
	// background: rgba(0,0,0,25);
	// opacity: 0.4;
	// z-index: 2;
	// &:hover {
	// 	border-radius: 30px;
		// opacity: 0.3;
	// 	background-color: rgba(255,255,255,0.2);
  // }
  @media (max-width: 768px) {
    height: 150px;
		width: 150px;
		margin: 16px; 
  }
`;
const TitleTextbox = styled.div`
	font-size: 20px;
	font-weight: 400;
	opacity: 100%;
	color: white;
	align-items: center;
	display: flex;
	text-align: center;
	justify-content: center;
	font-family: Muli;
	border-radius: 25%;
	height: 100%;
	width: 100%;
	margin: -100% 0;
	// position: absolute;
	z-index: 2;
	${props => props.otherStyles};
	// background-color: ${props => props.overlayColor};
`;

const ExpBox = ({ fluid, title, color }) => {
	return (
		<Overlay>
			<Img
				style={{
				borderRadius: '25%',
				opacity: 0.5,
				height: '100%'
			}}
  			fluid={fluid}
			/>
			<TitleTextbox
				overlayColor={color}
			>
			</TitleTextbox>
		</Overlay>
	);
};

export default ExpBox;
