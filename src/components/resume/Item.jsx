import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Content = styled.div`
	display: flex;
	flex-direction: column;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Company = styled.div`
	font-family: 'Abel';
	font-size: 28px;
	color: ${props => props.color || '#345e69'};
	font-weight: ${props => props.weight || 700};
`;

const Role = styled.div`
	font-family: 'Karla';
	font-size: 24px;
	color: ${props => props.color || '#53c8e5'};
	font-weight: ${props => props.weight || 700};
`;

const Description = styled.div`
	margin-top: 24px;
	margin-right: 64px;
	font-family: 'Karla';
	font-size: 20px;
	color: ${props => props.color || 'black'};
	font-weight: ${props => props.weight || 400};
`;


const Item = ({ companyName, role, location, dates }) => {
	return (
		<Content>
			<Header>
				<Company>{companyName} //</Company>{' '}{' '}<Role> {role}</Role>
			</Header>
			<Description>
				Develop modular, scalable code for web/mobile app, frequently adapting to evolving product requirements
				<br />
				Analyze data from usage reports, user interviews, and market studies, identifying gaps in product offerings
				to maximize utility and usability of platform
				<br />
				Work with product, design, and marketing teams from ideation to final launch of new features
				<br />
				Designed dashboards for engagement and profit tracking, improving customer prioritization & onboarding efficiency
			</Description>
		</Content>
	);
};

Item.propTypes = {
	companyName: PropTypes.string,
	role: PropTypes.string,
	location: PropTypes.string,
	dates: PropTypes.string,
};

export default Item;