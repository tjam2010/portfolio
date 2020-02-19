import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import Landing from "./landing"
import Portfolio from "./portfolio"
import About from "./about"
import Resume from "./resume"
import Contact from "./contact"

export default class Menu extends Component {

  render() {
    return (
        <div className="menu">
            <h1>
                <Link to="/">TJ Gascho</Link>
            </h1>
            <br/>
            <h3>
                <Link to="/portfolio">My Work</Link>
            </h3>
            <h5>
                <Link to="/portfolio">understanding</Link>
            </h5>
            <h5>
                <Link to="/portfolio">communicating</Link>
            </h5>
            <h5>
                <Link to="/portfolio">designing</Link>
            </h5>
            <br/>
            <h3>
                <Link to="/about">My Story</Link>
            </h3>
            <h5>
                <Link to="/about">about</Link>
            </h5>
            <h5>
                <Link to="/resume">resume</Link>
            </h5>
            <h5>
                <Link to="/contact">contact</Link>
            </h5>
        </div>
      
    );
  }
}