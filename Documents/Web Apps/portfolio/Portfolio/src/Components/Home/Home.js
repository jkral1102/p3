import React, { Component } from 'react';
import './Home.css';
import Img from './profilePic.png';
import Projects from '../Projects';

import $ from "jquery";

const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;



class Bio extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

      scrollTo = () => {
        const x = $(window).height() - 200;
        scroll.scrollTo(x);
      }
    //     // $('#App').animate({ scrollTop: $('#bioContainer').offset().top }, 'slow');
    //   }

    

    render() {
        return (
            <div id="bioContainer">

                <div id='bio'>
                    <div><img id='profilePic' src={Img} alt='profile' /></div>
                    <div>
                        <span id='homeTitle'>Hello! </span>

                        <p>I am a Minneapolis-St. Paul based Web Developer. I develop web applications using the MERN stack (MongoDB, Express, React, and Node.js) although I am always striving to incorporate new and improved technologies.</p>

                        <p>I hold true to the principle that things can always be improved. Whether its by using better technologies, refactoring code, or even rethinking an entire App from the ground up.</p>
                    </div>
                </div>
                <div id='projectsContainer' onClick={this.scrollTo}>
                <Projects />
                </div>
            </div>
        );
    }
}

export default Bio;