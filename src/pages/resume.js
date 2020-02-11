import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { TiHome } from 'react-icons/ti';
import { MdFileDownload } from 'react-icons/md';

import { ResumeBlock } from '../components/Resume';

import Layout from "../components/layout"
import SEO from "../components/seo"

import { BottomNavBar } from '../components';

const Container = styled.div`
  background-color: #ffffff;
  height: 100vh;
  margin: 0;
`;

const HomeLink = styled(Link)`
	margin: 8px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 64px;
`;

const Subheader = styled.div`
	display: flex;
	font-family: 'Abel';
	font-size: 24px;
	color: ${props => props.color || '#53c8e5'};
	font-weight: ${props => props.weight || 400};
	align-items: center;
`;

const Header = styled.div`
	display: flex;
	font-family: 'Work Sans';
  font-size: 42px;
  color: ${props => props.color || '#387aa2'};
	font-weight: 700;
	margin: 64px 64px 12px;
	align-items: bottom;
`;

const Resume = () => {
	return (
		<>
		<Container>
			<HomeLink>
					<TiHome size={32} color="black" />
			</HomeLink>
			<SEO title="Page two" />
			<Header>
				resume{'\t'}
				<MdFileDownload size={28} color="#53c8e5"/>
			</Header>
			<Content>
				<ResumeBlock />
			</Content>
		</Container>
		<BottomNavBar />
	</>
	)
};

export default Resume;
