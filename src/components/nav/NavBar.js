import React, { Component } from 'react';
import NavItem from './NavItem';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return(
    <div class = "fixed-top">
    <nav class="navbar bg-dark" >
      <div id="brand-style">
        <a class="navbar-brand" href="#">S O N D H A Y N I</a>
      </div>
        <ul class="nav nav-pills" >
          <li class="nav-item">
              <div class="brand-style"><a class="nav-link" href="#about">About</a></div>
          </li>
          <li class="nav-item">
            <div class="brand-style"><a class="nav-link" href="#projects">Projects</a></div>
          </li>
          <li class="nav-item">
              <div class="brand-style"><a class="nav-link" href="#contact">Contact</a></div>
          </li>
        </ul>
    </nav>
    </div>
  );
  }

}

export default NavBar;
