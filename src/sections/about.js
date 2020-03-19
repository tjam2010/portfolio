import React, { Component } from 'react';
import aboutPic from '../tj_tedx.jpg'
import {ReactComponent as Wave} from '../wave.svg'


export default class About extends Component {
  render() {
    return (
      <section className="page" id="about">
        <div className="wave">
          <Wave fill="#2E6AF3"/>
        </div>
        <div className="content">
          <div className="title" id="about-caption">about</div>
          <div id="about-content">
            <img id="about-img" src={aboutPic} alt="TJ Gascho smiling."/>
            <div id="about-text">
              <div>
                My name is TJ Gascho and I am seeking career opportunities that nourish creativity and support community. Generally speaking, I hope to discover new ways in which I can apply my supportive leadership, environmental focus, and storytelling skills to address socio-environmental issues.
              </div>
              <br/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}