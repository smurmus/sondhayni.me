import React, { Component } from 'react';

class StickyNav extends Component {
  state = {
    auth: false,
    slide: 0,  // How much should the Navbar slide up or down
    lastScrollY: 0,  // Keep track of current position in state
  };

  componentWillMount() {
    // When this component mounts, begin listening for scroll changes
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    // If this component is unmounted, stop listening
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollY } = this.state;
    const currentScrollY = window.scrollY;


    if (currentScrollY > lastScrollY) {
      this.setState({ slide: '-48px' });
    } else {
      this.setState({ slide: '0px' });
    }
    this.setState({ lastScrollY: currentScrollY });
  };

   render() {
    return (
      <StickyNav
        style={{
          transform: `translate(0, ${this.state.slide})`,
          transition: 'transform 90ms linear',
        }}
      />
     );
   }
 }

export default StickyNav;
// componentDidMount() {
//   window.addEventListener('scroll', this.handleScroll);
// }
//
// componentWillUnmount() {
//   window.removeEventListener('scroll', this.handleScroll);
// }
//
// handleScroll() {
//   if(window.scrollY > 20) {
//     this.setState({top: "0"});
//   }
//   else {
//     this.setState({top: "-50px"});
//   }
// }

// if (window.scrollY >= 100 && !this.state.sticky) {
//     this.setState({sticky: true});
// } else if (window.scrollY < 100 && this.state.sticky) {
//     this.setState({sticky: false});
// }

// {{ width: '100vw', top: 0, position: this.state.lockScroll ? 'fixed' : 'relative'}}
