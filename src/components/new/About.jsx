import React from 'react';

import { CustomImage } from '../utils';
import style from './About.module.css'

const About = () => {
	return (
		<div style={{ paddingLeft: 64, paddingRight: 64 }}>
			<h1>hello, <span className={style.paleRed}>sondhayni</span> here 🐸👋🏾</h1>
			<about>
				<smidge />
				<div style={{ marginRight: 32, flex: 3 }}>
					<p>
						I'm a <b>creative-at-heart</b> daylighting as a software engineer. Whenever I'm not writing code, I'm making art or writing (in english) or any number of similar things.
						<br /> <br />
						My work is driven by a maybe-cheesy-to-some belief that there is an infinite vault of possibility
						and potential in everything and everyone, tempered only by asking
						<b> why are we really building this? who is it for? </b>
						(...and my side project graveyard).
						<br /> <br />
						I'm interested in how tech and its periphery can help solve problems in mental health and civic spaces, and how we can collectively address social
						inequity at a systems level.
						<br /> <br />
						IRL, you can probably find me working on a puzzle (jigsaw, platformer, life decision, etc) or hanging out with my cat. I'm always open to new friends
						and connections and collaborating, so you should get in touch if you are, too. 
					</p>
					<br /> <br />
					<p>coming soon: writing! blog posts! book "reviews!" links to socials!</p>
					<br /> <br />
					<p>
						(previously: computer engineering + computer science @ USC, frontend engineer @ World Food Programme, software dev intern @ Rainforest QA)
					</p>
					<smidge />
				</div>
				<div style={{ flex: 2 }}>
					<div id="self-portrait" style={{ marginBottom: 24 }}>
						<CustomImage src="me_chair.png" alt="me in a big chair" />
					</div>
					<smidge />
					<p>📍 San Francisco, CA</p>
					<smidge />
					<p>💼 Software Engineer @ Hearth</p>
				</div>
			</about>
		</div>
	);
};

export default About;