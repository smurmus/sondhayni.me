import React, { Component } from 'react';
// import logo from './logo.svg';
// import Welcome from './components/Welcome';
// import About from './components/About';
// import Projects from './components/Projects';
import { InfoBlock, BottomNavBar, ArrowKeys, ProjectBox } from '../components';
// import './css/App.css';

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <ArrowKeys />
//         <InfoBlock />
//         <ProjectBox />
//         <div style={{ height: 800 }} />
//         <BottomNavBar />
//       </div>
//     );
//   }
// }

// <ArrowKeys />
        // <InfoBlock />
        // <ProjectBox />

const App = () => {
	return (
      <div className="App">
        
        <div style={{ height: 800 }} />
        <BottomNavBar />
      </div>
    );
};

export default App;
//
// <About/>
// <Projects/>
// <div style={{ height: 200 }} />

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
