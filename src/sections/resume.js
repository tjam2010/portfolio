import React, { Component } from 'react';
import {ReactComponent as Wave} from '../wave.svg'
import resumePDF from '../Resume_TJ_Gascho_12.18.19.pdf'

export default class Resume extends Component {
  render() {
    return (
      <section className="page" id="resume">
        <div className="wave">
          <Wave fill="#ffffff"/>
        </div>
        <div className="content" id="resume-content">
          <div className="title" id="resume-caption">resume</div>
          <iframe title="Resume" src={resumePDF} width="100%" height="60%">
          </iframe>
        </div>
      </section>
    );
  }
}