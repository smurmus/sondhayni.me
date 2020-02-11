import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import { TiHome } from 'react-icons/ti'
;
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

const About = () => (
   <>
   <Container>
		<HomeLink>
				<TiHome size={32} color="black" />
		</HomeLink>
    <SEO title="About" />
   </Container>
   <BottomNavBar />
 </>
)

export default About;
