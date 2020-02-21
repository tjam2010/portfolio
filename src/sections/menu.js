import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link';

export default class Menu extends Component {

  render() {
    return (
        <div id="menu">
            <div id="divider"></div>
            <h1>
                <Link id="title" className="link" to="/" >TJ Gascho</Link>
            </h1>
            <h3 className="link-wrap-header">
                <Link className="link" to="/work">My Work</Link>
            </h3>
            <h5 className="link-wrap">
                <Link className="link" to="/work">understanding</Link>
            </h5>
            <h5 className="link-wrap">
                <Link className="link" to="/work">communicating</Link>
            </h5>
            <h5 className="link-wrap">
                <Link className="link" to="/work">designing</Link>
            </h5>
            <h3 className="link-wrap-header" >
                <Link className="link" to="/about">My Story</Link>
            </h3>
            <h5 className="link-wrap">
                <Link className="link" to="/about">about</Link>
            </h5>
            <h5 className="link-wrap">
                <Link className="link" to="/resume">resume</Link>
            </h5>
            <h5 className="link-wrap">
                <Link className="link" to="/contact">contact</Link>
            </h5>
        </div>
      
    );
  }
}