import React from 'react';
import styled from 'styled-components';

import krate from '../../images/Krate.png';
import activeAllies from '../../images/activeallies_white.png';
import { lightBeige } from '../../utils/colors';

const Container = styled.div`
	background-color: ${lightBeige};
	display: flex;
	flex-direction: column;
	padding: 0 150px;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex: 1;
`;

const Item = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 16px;
	border-radius: 20px;
`;

const Info = styled.div`
	margin-top: 16px;
`;

const Image = styled.img`
	height: 260px;
	width: 260px;
	resize: contain;
`;

const projects = [
	{
		title: 'MoveSort',
		description: 'UX Research / Case Study',
		imgSrc: krate,
	},
	{
		title: 'Krate',
		description: 'UX Design / Hackathon',
		imgSrc: krate,
	},
	{
		title: 'ActiveAllies',
		description: '',
		imgSrc: activeAllies,
	}
];

const ProjectsIndex = ({ projects }) => {

	return (
		<Container>
			<h3>Featured Projects</h3>
			<Row>
				{projects.map(project => (
					<Item>
						<Image src={project.node.imgPath} />
						<Info>
							<h3>{project.node.title}</h3>
							<p>{project.node.header}</p>
						</Info>
					</Item>
				))}
			</Row>
		</Container>
	);
};


export default ProjectsIndex;