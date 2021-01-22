import React from "react";
import styled from 'styled-components';
import { graphql } from "gatsby"

import SEO from "../components/seo"
import { CustomImage } from '../components/utils';
import { TopNav, Footer } from '../components';
import { PostItem } from '../components/blog';
import style from './sandbox.module.css';

const Container = styled.div`
  background-color: #fff5ee;
  height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Sandbox = () => {
  return (
    <Container>
      <TopNav />
      <SEO title="sandbox" />
      <div className={style.sandbox}>
        <div className={style.item}>
          <CustomImage src="days_of_type.png" alt="days of type thumbnail" />
        </div>
        <div className={style.item}>
          <iframe height="406" style={{ width: '100%' }} scrolling="no" title="Coffee === Love" src="https://codepen.io/smurmus/embed/QWKgXVW?height=406&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
            See the Pen <a href='https://codepen.io/smurmus/pen/QWKgXVW'>Coffee === Love</a> by (＠＾◡＾)
          (<a href='https://codepen.io/smurmus'>@smurmus</a>) on <a href='https://codepen.io'>CodePen</a>.
            </iframe>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Sandbox;