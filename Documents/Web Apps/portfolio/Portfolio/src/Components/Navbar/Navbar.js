import React, { Component } from 'react';
import './Navbar.css';
import resumePDF from './Resume.pdf';


class Navbar extends Component {
  render() {
    return (
      <div id='navbar'>
        <div id='titleDiv'>
          <div id='name'>Jennifer Kral</div>
        </div>

        <div id="navMenu">
          <div id='navItem'><a href='/' alt='home'>Home</a></div>
          <div id='navItem'><a href='/projects' alt='projects'>Projects</a></div>
          {/* <div id='res' onClick={this.props.resume}>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer">Resume</a>
          </div> */}
          <div id='navItem'> <a href='/contact' alt='contact'>Contact</a></div>
          <div id='navItem'><a href='https://github.com/jkral1102' rel="noopener noreferrer" target="_blank" >Github</a></div>
        </div>
      </div>
    );
  }
}

export default Navbar;