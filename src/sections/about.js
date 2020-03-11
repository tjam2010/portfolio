import React, { Component } from 'react';
import aboutPic from '../tj_tedx.jpg'

export default class About extends Component {
  render() {
    return (
      <section className="page" id="about">
        <div className="content">
          <div className="title" id="about-caption">about</div>
          <div id="about-content">
            <img id="about-img" src={aboutPic} alt="A photo of TJ Gascho smiling."/>
            <div id="about-text">
              <div>
                My name is TJ Gascho and I am seeking career opportunities that nourish creativity and support community. Generally speaking, I hope to discover new ways in which I can apply my promotive leadership, environmental focus, and storytelling skills to address socio-environmental issues.
              </div>
              <br/>
              <div>
                For me, storytelling has always been the key to fostering a mutual understanding. Over the past few years, I have experienced many stories that have drastically expanded my worldview. I have since resolved to illuminate systemic faults and promote inclusivity in my work, putting environmental justice at its core.
              </div>
              <br/>
              <div>
                I have come to understand that my leadership style is rooted in supporting the growth of others so they have the tools to make a difference in their own communities. In whatever career I find myself pursuing, I hope to demonstrate such leadership and effect change nationwide.
              </div>
              <br/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}