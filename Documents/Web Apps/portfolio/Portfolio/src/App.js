import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";

var background = {
  width: '100vw',
  height: "100vh"
}

class App extends Component {
  render() {
    return (
      <Router>
        <div id="App" style={background}>
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />

          <Footer />

          <div id='backgroundImg'></div>
        </div>
      </Router>
    );
  }
}

export default App;
