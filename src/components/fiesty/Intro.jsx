import React from 'react';
import styled from 'styled-components';

import portraitSketch from '../../images/self_portrait_sketch.png';
import { CustomImage } from '../utils';
import { device } from '../../utils/mediaQuery';
import { offwhite, lightBeige } from '../../utils/colors';

const Greeting = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${lightBeige};
	padding: 32px 24px 0;
	flex: 1;
	max-width: 100%;

	@media ${device.tablet} {
		padding-left: 64px;
		padding-right: 64px;
	}
`;

const Name = styled.div`
	margin-top: 8px;
	margin-bottom: 16px;
`;

const SelfPortait = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	height: 100%;
	margin-bottom: 48px;
`;

const Sketch = styled.img`
	// height: auto;
	width: 380px;
	// resize: auto;
`;

const Branding = styled.div`

	@media ${device.tablet} {
		padding-left: 56px;
	}
`;


const Intro = () => {
	return (
		<SelfPortait>
			<Greeting>
				<h2>hello! my name is</h2>
				<h0>
					<Name>
						sondhayni
					</Name>
				</h0>
				<Branding>
					<h2>
						& I’m an interdisciplinary maker of art + tech who cares deeply about people and possibilities.
					</h2>
					<h5>During the day I build things @hearth.</h5>
				</Branding>
			</Greeting>
			{/* <Sketch src={portraitSketch} /> */}
			<div style={{ width: 380 }}>
				<CustomImage src="self_portrait_sketch.png" alt="self portrait sketch" />
			</div>
		</SelfPortait>
	);
}

export default Intro;