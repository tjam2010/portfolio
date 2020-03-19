import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {    

  render() {
    return (
        <div id="menu">
            <div id="divider"></div>
            <h1>
                <NavLink activeClassName="active" id="title" className="link" exact={true} to="/"
                onClick={()=>{
                    document.getElementById("landing").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    TJ Gascho
                </NavLink>
            </h1>
            <h3 className="link-wrap-header">
                <NavLink className="link parent-link" to="/work"
                onClick={()=>{
                    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    My Work
                </NavLink>
            </h3>
            <h5 className="link-wrap">
                <NavLink className="link" to={{pathname:"/work/understanding", slide:0}}
                onClick={()=>{
                    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    understanding
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to={{pathname:"/work/communicating", slide:1}}
                onClick={()=>{
                    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    communicating
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to={{pathname:"/work/designing", slide:2}}
                onClick={()=>{
                    document.getElementById("work").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>              
                    designing
                </NavLink>
            </h5>
            <h3 className="link-wrap-header" >
                <NavLink className="link parent-link" to="/story"
                onClick={()=>{
                    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    My Story
                </NavLink>
            </h3>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/about"
                onClick={()=>{
                    document.getElementById("about").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>
                    about
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/resume"
                onClick={()=>{
                    document.getElementById("resume").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>                   
                    resume
                </NavLink>
            </h5>
            <h5 className="link-wrap">
                <NavLink className="link" to="/story/contact"
                onClick={()=>{
                    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' });
                    console.log("scrolling");
                }}>                    
                    contact
                </NavLink>
            </h5>
        </div>
      
    );
  }
}

