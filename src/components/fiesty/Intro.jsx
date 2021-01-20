import React from 'react';
import styled from 'styled-components';

import portraitSketch from '../../images/self_portrait_sketch.png';
import { device } from '../../utils/mediaQuery';
import { lightBeige } from '../../utils/colors';

const Greeting = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${lightBeige};
	padding: 64px;
	flex: 1;

	@media ${device.tablet} {
		padding: 64px 152px;
	}

	@media ${device.tablet} {
		padding: 64px 152px;
  }
`;

const Name = styled.div`
	margin-top: 8px;
`;

const SelfPortait = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	position: relative;
	flex: 1;
	// margin-bottom: 120px;
	margin-top: 64px;
	background-color: '#fff5ee';
`;

const Sketch = styled.img`
	height: auto;
	width: 380px;
	resize: contain;
	right: 0;

  @media ${device.tablet} {
		position: absolute;
  }
`;

const Intro = () => {
	console.log('INTRO::', portraitSketch)
	return (
		<SelfPortait>
			<Greeting>
				<h2>hello! my name is</h2>
				<Name>
					<h0>sondhayni</h0>
				</Name>
				<div style={{ paddingLeft: 56 }}>
					<h2>
						& I’m an interdisciplinary maker of art + tech who cares deeply about people and possibilities.
					</h2>
					<h5>During the day I build things @shoguninc.</h5>
				</div>
			</Greeting>
			<Sketch src={portraitSketch} />
		</SelfPortait>
	);
}

export default Intro;