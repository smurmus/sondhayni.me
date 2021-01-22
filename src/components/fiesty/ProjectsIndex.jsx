import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import krate from '../../images/Krate.png';
import activeAllies from '../../images/activeallies_white.png';
import { lightBeige } from '../../utils/colors';
import { device } from '../../utils/mediaQuery';

import { CustomImage } from '../utils';

const Container = styled.div`
	background-color: ${lightBeige};
	display: flex;
	flex-direction: column;
	padding: 64px 24px 0;

	@media ${device.tablet} {
		padding: 64px 150px;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1;
`;

const Col = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`;

const Item = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 32px 0;
  width: 100%;
	height: auto;

  &:hover {
		background-color: black;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
    background-blend-mode: multiply;
    transform: scale(1.02, 1.02);
  }
`;

const Info = styled.div`
	padding: 48px;
	flex-direction: column;
	justify-content: center;
	display: flex;
`;

const Image = styled.img`
	height: 320px;
	width: 320px;
	resize: contain;
`;

const ImageContainer = styled.div`
	height: 220px;
	width: 100%;
	maxWidth: 300px;
	resize: contain;
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const ProjectsIndex = ({ projects }) => {

	return (
		<Container>
			{/* <h3>Featured Projects</h3> */}
			<Col>
				{projects.map(project => (
					<ProjectLink to={`/work/${project.node.path}`}>
						<Item style={{ backgroundColor: project.node.bgColor }}>
							{/* <Image src={project.node.imgPath} /> */}
							<ImageContainer>
								<CustomImage src={project.node.imgPath} alt={project.node.title} />
							</ImageContainer>
							<Info>
								<h3>{project.node.title}</h3>
								<p>{project.node.header}</p>
							</Info>
						</Item>
					</ProjectLink>
				))}
			</Col>
		</Container>
	);
};


export default ProjectsIndex;