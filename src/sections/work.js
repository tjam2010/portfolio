import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';

export default class Work extends Component {
  render() {
    const slider = (
      <AwesomeSlider>
        <div>Work 1</div>
        <div>Work 2</div>
        <div>Work 3</div>  
      </AwesomeSlider>
    );
    return (
      <section className="page" id="work">
        <div className="content" id="work-content">
          <div className="title" id="work-caption">my work</div>
          {slider}
        </div>
      </section>
    );
  }
}