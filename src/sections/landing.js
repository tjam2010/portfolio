import React, { Component } from 'react';
import landingPic from '../landing.jpg'

export default class Landing extends Component {
  render() {
    return (
      <section className="page" id="landing">
        <div className="content" id="landing-content">
          <div id="landing-caption">I am a Sustainability-Focused Storyteller.</div>
          <img id="landing-img" src={landingPic} alt="TJ taking photos of some lush green trees on Monkey Mountain in Taiwan."/>
        </div>
      </section>
    );
  }
}