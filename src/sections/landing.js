import React, { Component } from 'react';
import landingPic from '../landing.jpg'

export default class Landing extends Component {
  render() {
    return (
      <section id="landing">
          <div>I am a Sustainability-Focused Storyteller.</div>
          <img className="landing-img" src={landingPic} alt="TJ taking photos of some lush green trees on Monkey Mountain in Taiwan."/>
      </section>
    );
  }
}