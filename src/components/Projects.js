import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RFImage from '../img/rfpic.jpg';
import Marvis from '../img/marvis.jpg';
import Sorry from '../img/sry.png';
import './Projects.css';

class Projects extends Component {

  render() {
    return (
      <div className="Projects section flex-grid">
        <div className="col item">
          <img src={RFImage} className="thumbnail"/>
            <div className="overlay">
              <div className="item-text">
                <p className="text-dec">An Internship</p>
                <p className="text-dec-description"></p>
              </div>
            </div>
        </div>
        <div className="col item">
          <img src={Marvis} className="thumbnail"/>
            <div className="overlay">
              <div className="item-text">
                <p className="text-dec">a VR Visualization</p>
                <p className="text-dec-description"></p>
              </div>
            </div>
        </div>
        <div className="col item">
          <img src={Sorry} className="thumbnail"/>
            <div className="overlay">
              <div className="item-text">
                <p className="text-dec">A virtual take on a classic</p>
                <p className="text-dec-description"></p>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Projects;
