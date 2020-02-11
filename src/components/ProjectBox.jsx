import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { compose, withState } from 'recompose';

import ExpBox from './ExpBox';

const Container = styled.div`
  margin: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const ProjectBox = () => {

	const query = graphql`
	  query Images {
	    rfqa: file(relativePath: { eq: "rfqa.png" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    wfp: file(relativePath: { eq: "maano.png" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
		  shogun: file(relativePath: { eq: "shogun.png" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    usc: file(relativePath: { eq: "usc.png" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    marvis: file(relativePath: { eq: "marvis.jpg" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	    sorry: file(relativePath: { eq: "sorry.jpeg" }) {
	      childImageSharp {
	        fluid(maxWidth: 300, quality: 100) {
	          ...GatsbyImageSharpFluid
	        }
	      }
	    }
	  }
	`
	const data = useStaticQuery(query);

	return(
		<Container>
			<ExpBox
				title="Shogun Enterprises"
				color="rgba(0, 0, 0, 1)"
				fluid={data.shogun.childImageSharp.fluid}
			/>
			<ExpBox
				title="Rainforest QA"
				color="rgba(39, 141, 62, 1)"
				fluid={data.rfqa.childImageSharp.fluid}
			/>
			<ExpBox
				title="World Food Programme"
				color="rgba(75, 136, 199, 1)"
				fluid={data.wfp.childImageSharp.fluid}
			/>
			<ExpBox
				title="Principles of Software Development"
				color="rgba(255, 199, 44, 1)"
				fluid={data.usc.childImageSharp.fluid}
			/>
			<ExpBox
				title="Marvis"
				color="rgba(0, 0, 0, 1)"
				fluid={data.marvis.childImageSharp.fluid}
			/>
			<ExpBox
				title="Sorry"
				color="rgba(200, 200, 200, 1)"
				fluid={data.sorry.childImageSharp.fluid}
			/>
			<ExpBox
				title="World Food Programme"
				color="rgba(75, 136, 199, 1)"
				fluid={data.wfp.childImageSharp.fluid}
			/>
			<ExpBox
				title="Principles of Software Development"
				color="rgba(255, 199, 44, 1)"
				fluid={data.usc.childImageSharp.fluid}
			/>
		</Container>
	);
}

export default ProjectBox;
