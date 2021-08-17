import React from 'react'
import styled from 'styled-components';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { CustomImage } from '../components/utils';
import { device } from '../utils/mediaQuery';
import { TopNav, Footer } from '../components';
import { About } from '../components/new';

import './main.css';
import style from './about.module.css'

const AboutPage = () => (
  <div className="main-container">
    <div className="body-content">
      <TopNav />
      <div style={{ paddingTop: 72, paddingBottom: 72 }}>
        <About />
      </div>
    </div>
    <Footer />
  </div>
);


export default AboutPage;
