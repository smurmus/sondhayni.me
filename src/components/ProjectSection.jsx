// import React from 'react';
// import styled from 'styled-components';
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// // import { compose, withState } from 'recompose';

// // import Image from './image';

// const Box = styled.div`
//   background-color: #ffdb7f;
// 	border-radius: 5px;
// `;

// const Overlay = styled.div`
// 	// margin: 16px 0;
// 	// box-shadow: 0 1px 6px 2px grey;
// 	border-radius: 5px;
// 	height: 200px;
// 	width: 400px;
// 	flex-direction: column;
// 	flex: 1;
// 	align-items: center;
// 	// background: rgba(0,0,0,25);
// 	// opacity: 0.3;
// 	z-index: 2;
// 	&:hover {
// 		opacity: 0.8;
// 		background-color: rgba(0,0,0,0);
//   }
//   @media (max-width: 768px) {
//     height: 100px;
// 	width: 300px;
//   }
// `;

// const Container = styled.div`
//   margin: 64px;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: row;
//   flex-wrap: wrap;
//   @media (max-width: 425px) {
//     flex-direction: column;
//   }
// `;

// const TitleTextbox = styled.div`
// 	align-items: center;
// 	font-size: 18px;
// 	text-align: center;
// 	font-family: Abel;
// `;
// 			// <Image />

// const ProjectSection = () => {

// 	const query = graphql`
// 	  query Images {
// 	    RFQA: file(relativePath: { eq: "rfqa-r.png" }) {
// 	      childImageSharp {
// 	        fluid(maxWidth: 400, quality: 100) {
// 	          ...GatsbyImageSharpFluid
// 	        }
// 	      }
// 	    }
// 	    WFP: file(relativePath: { eq: "maano-r.jpg" }) {
// 	      childImageSharp {
// 	        fluid(maxWidth: 400, quality: 100) {
// 	          ...GatsbyImageSharpFluid
// 	        }
// 	      }
// 	    }
// 		  shogun: file(relativePath: { eq: "shogun-r.jpeg" }) {
// 	      childImageSharp {
// 	        fluid(maxWidth: 400, quality: 100) {
// 	          ...GatsbyImageSharpFluid
// 	        }
// 	      }
// 	    }
// 	    usc: file(relativePath: { eq: "usc-r.jpg" }) {
// 	      childImageSharp {
// 	        fluid(maxWidth: 400, quality: 100) {
// 	          ...GatsbyImageSharpFluid
// 	        }
// 	      }
// 	    }
// 	  }
// 	`
// 	const data = useStaticQuery(query);

// 	return(
// 		<Container>
// 			<Overlay>
// 				<Img
// 	        style={{ borderRadius: '5px', height: '100%' }}
// 	        fluid={data.shogun.childImageSharp.fluid}
// 	      />
// 	      <TitleTextbox>Shogun Enterprises</TitleTextbox>
// 			</Overlay>
// 			<Overlay>
// 				<Img
// 					resizeMode="contain"
// 	        fluid={data.RFQA.childImageSharp.fluid}
// 	        style={{ borderRadius: '5px', height: '100%', objectFit: 'contain' }}
// 	      />
// 			</Overlay>
// 			<Overlay>
// 				<Img
// 	        style={{ borderRadius: '5px', height: '100%' }}
// 	        fluid={data.WFP.childImageSharp.fluid}
// 	      />
// 			</Overlay>
// 			<Overlay>
// 					<Img
// 		        style={{
// 		        	borderRadius: '5px', height: '100%'
// 		        }}
// 		        fluid={data.usc.childImageSharp.fluid}
// 		      />
// 			</Overlay>
// 		</Container>
// 	);
// }

// export default ProjectSection;
