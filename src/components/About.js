import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './About.css';

class About extends Component {
  render () {
    return(
    <div className="About">
      <div className="grid">
        <div className="col-6-4">
          <div className="desc">
            <p>
             I'm an <b>engineer</b> originally from <b>New Jersey</b>, who flew off to college in <b>Los Angeles, California</b>. I graduated in May 2018 with a bachelor's degree in <b>Computer Engineering and Computer Science</b> and a minor in <b>3D Computer Graphics and Modeling</b> from the <b>University of Southern California</b>.
            </p>
            <p>
              While I am actively pursuing full time dev positions, this website is, beyond being about my engineering and 3D endeavors, also an exploration of identity, perspective, and things completely unrelated to computer science. <b>This is a work in progress.</b>
            </p>
          </div>
        </div>
        <div className="col-4-6">
          <img src={require('../img/corkboard.jpg')} alt="Corkboard" class="responsive"></img>
        </div>
      </div>
    </div>
    );
  }

}

export default About;


// About.propTypes = {
//   text: PropTypes.string
// }
