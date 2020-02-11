import React, { Component } from 'react';
import ReactRotatingText from 'react-rotating-text';
import {Image} from 'react-bootstrap';
import SocialMediaIcons from 'react-social-media-icons';
import './Welcome.css';


// </div>
// <header className="Welcome-header">
//   <hello>Hi, there.</hello>
//   <h1 className="Intro">Hi! My name is Sondhayni. I am a</h1>
  // <h1 className="intro-types">
  //   <ReactRotatingText pause={200} items={['D E V E L O P E R', 'A R T I S T', 'W R I T E R', 'D A N C E R']} />
  // </h1>

  // <div className="Social-media">
      // <SocialMediaIcons
      //   icons={socialMediaIcons}
      //   iconSize={'2.75vw'}
      //   iconColor={'#000'}
      // />
  // </div>
// </header>


// <div class="hello-header">
//             <hello class="hello-row hello-text"> hi there.</hello>
//             <hello class="hello-column hello-text"> my name is sondhayni. </hello>
//             <hello class="hello-row hello-text">i am a lot of things, like...</hello>
//             <hello class="hello-row hello-text">
//               <p class="intro-types">
//                 <ReactRotatingText pause={200} items={['D E V E L O P E R', 'A R T I S T', 'W R I T E R', 'D A N C E R']} />
//               </p>
//             </hello>
//           </div>

const socialMediaIcons = [
  {
    url: 'https://github.com/smurmus',
    className: 'fab fa-github-alt',
  },
  {
    url: 'https://www.linkedin.com/in/sondhayni-murmu-050b92127',
    className: 'fab fa-linkedin-in',
  },
  {
    url: 'https://twitter.com/krayena',
    className: 'fab fa-twitter',
  },
  {
    url: 'https://medium.com/sephemeria',
    className: 'fab fa-medium-m',
  },
  {
    url: 'https://devpost.com/smurmus?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav',
    className: 'fa-code-branch',
  },
];

// const oneWay = (
//   <div class="hello-header">
//     <div class="hello-row hello-text">hi there.</div>
//     <div class="hello-column hello-text">my name is sondhayni.</div>
//     <div class="hello-column hello-text" style={{justifyContent: 'flex-end'}}>i am a lot of things, like...</div>
//     <div class="hello-column big-hello-text">
//           <ReactRotatingText pause={200} items={['D E V E L O P E R', 'A R T I S T', 'W R I T E R', 'D A N C E R']} />
//     </div>
//   </div>
// );

// const orAnother = (
//   <div class="hello-header responsive">
//     <div class="hello-column hello-text">
//       <div> hi there. </div>
//       <div> my name is sondhayni. </div>
//       <div> i am a lot of things, like... </div>
//     </div>
//     <div class="hello-column hello-text">
//       <div>a picture should go here.</div>
//     </div>
//   </div>
// );

class Welcome extends Component {

  render() {
    // return (
    //   <div class="grid">
    //    <div class="hello-header">
    //       <div class="hello-column hello-text">
    //         <div> hi there. </div>
    //         <div> my name is sondhayni. </div>
    //         <div> i am a lot of things, like... </div>
    //         <div class="big-hello-text">
    //             <ReactRotatingText pause={200} items={['D E V E L O P E R', 'A R T I S T', 'W R I T E R', 'D A N C E R']} />
    //         </div>
    //       </div>
    //       <div class="hello-column hello-text responsive">
    //         <SocialMediaIcons
    //           icons={socialMediaIcons}
    //           iconSize={'2.75vw'}
    //           iconColor={'#000'}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // );
    return (<div />);
  }
}
export default Welcome;
