import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
// import { HashLink as Link } from 'react-router-hash-link';

export default class Menu extends Component {

  render() {
    return (
        <div id="menu">
            <div id="divider"></div>
            <h1>
                <NavLink activeClassName="active" id="title" className="link" exact="true" to="/"
                onClick={()=>{
                    document.getElementById("landing").scrollIntoView();
                    console.log("scrolling");
                }}>
                    TJ Gascho
                </NavLink>
            </h1>
            <h3 className="link-wrap-header">
                <NavLink className="link parent-link" to="/work"
                onClick={()=>{
                    document.getElementById("work").scrollIntoView();
                    console.log("scrolling");
                }}>
                    My Work
                </NavLink>
            </h3>
            <h5 className="link-wrap">
                <NavLink className="link" to="/work/understand"
                onClick={()=>{
                    document.getElementById("work").scrollIntoView();
                    console.log("scrolling");
                }}>
                    understanding
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/work/communicate"
                onClick={()=>{
                    document.getElementById("work").scrollIntoView();
                    console.log("scrolling");
                }}>
                    communicating
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/work/design"
                onClick={()=>{
                    document.getElementById("work").scrollIntoView();
                    console.log("scrolling");
                }}>              
                    designing
                </NavLink>
            </h5>
            <h3 className="link-wrap-header" >
                <NavLink className="link parent-link" to="/story"
                onClick={()=>{
                    document.getElementById("about").scrollIntoView();
                    console.log("scrolling");
                }}>
                    My Story
                </NavLink>
            </h3>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/about"
                onClick={()=>{
                    document.getElementById("about").scrollIntoView();
                    console.log("scrolling");
                }}>
                    about
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/resume"
                onClick={()=>{
                    document.getElementById("resume").scrollIntoView();
                    console.log("scrolling");
                }}>                   
                    resume
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/contact"
                onClick={()=>{
                    document.getElementById("contact").scrollIntoView();
                    console.log("scrolling");
                }}>                    
                    contact
                </NavLink>
            </h5>
        </div>
      
    );
  }
}