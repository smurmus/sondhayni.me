import React from 'react';
import styled from 'styled-components';

import portraitSketch from '../../images/self_portrait_sketch.png';
import { device } from '../../utils/mediaQuery';
import { lightBeige } from '../../utils/colors';

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
`;

const SelfPortait = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;
	flex: 1;
	// margin-top: 16px;
	background-color: #fff5ee;
`;

const Sketch = styled.img`
	height: auto;
	width: 380px;
	resize: auto;
	right: 0;

  @media ${device.tablet} {
		position: absolute;
  }
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
					<h5>During the day I build things @shoguninc.</h5>
				</Branding>
			</Greeting>
			<Sketch src={portraitSketch} />
		</SelfPortait>
	);
}

export default Intro;