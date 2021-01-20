import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavLinks from './NavLinks';

const Navigation = styled.nav`
  position: fixed;
  text-decoration: none;
  width: 100%;
  height: 10vh;
  display: flex;
  background-color: #fff5ee;
  justify-content: space-between;
  margin: 0 auto;
  padding-right: 1vw;
  padding-left: 3vw;
  z-index: 2;
  align-self: center;
  @media (max-width: 768px) {
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 3vw;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff5ee;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const TopNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavLinks />
        </Navbox>
      ) : (
          <Navbox open>
            <NavLinks />
          </Navbox>
        )}
    </Navigation>
  );
};

export default TopNav;
