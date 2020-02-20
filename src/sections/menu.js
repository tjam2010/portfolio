import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Menu extends Component {

  render() {
    return (
        <div className="menu">
            <h1>
                <Link id="title" className="link" to="/" >TJ Gascho</Link>
            </h1>
            <br/>
            <h3>
                <Link className="link" to="/portfolio">My Work</Link>
            </h3>
            <h5>
                <Link className="link" to="/portfolio">understanding</Link>
            </h5>
            <h5>
                <Link className="link" to="/portfolio">communicating</Link>
            </h5>
            <h5>
                <Link className="link" to="/portfolio">designing</Link>
            </h5>
            <br/>
            <h3>
                <Link className="link" to="/about">My Story</Link>
            </h3>
            <h5>
                <Link className="link" to="/about">about</Link>
            </h5>
            <h5>
                <Link className="link" to="/resume">resume</Link>
            </h5>
            <h5>
                <Link className="link" to="/contact">contact</Link>
            </h5>
        </div>
      
    );
  }
}