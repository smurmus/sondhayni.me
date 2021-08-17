import React from 'react';
import SEO from '../components/seo';
import { graphql } from "gatsby"

import { TopNav, Footer } from '../components';
import { Hero } from '../components/new';
import './main.css';

const IndexPage = () => (
  <div className="main-container">
    <div className="body-content">
      <TopNav />
      <div style={{ paddingTop: 72, paddingBottom: 72 }}>
        <Hero />
      </div>
    </div>
    <Footer />
  </div>
);


export default IndexPage;