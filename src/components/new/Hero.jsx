import React from 'react';

import { CustomImage } from '../utils';
import style from './Hero.module.css'

const Hero = () => {
  return (
    <hero>
			<header>
				<h0>
					sond<span className={style.paleRed}>h</span>
					ayn<span className={style.paleRed}>i</span>
				</h0>
				<h0 style={{ lineHeight: 0.75 }}>murmu</h0>
				<smidge />
				<h3>
					is an interdisciplinary maker of art + tech who cares deeply about people and possibilities.
				</h3>
				<smidge />
				<h3>During the day she build things @<a style={{ color: 'black' }} href="https://www.gethearth.com/careers">Hearth</a>.</h3>
			</header>
			<div style={{ width: 380 }}>
				<CustomImage src="self_portrait_sketch.png" alt="self portrait sketch" />
			</div>
    </hero>
  );
};

export default Hero;