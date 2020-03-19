import React, { Component } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import {ReactComponent as Wave} from '../wave.svg'

export default class Work extends Component {
  render() {
    return (
      <section className="page" id="work">
        <div className="wave">
          <Wave fill="#ffffff"/>
        </div>
        <div className="content" id="work-content">
          <div className="title" id="work-caption">my work</div>
          <AwesomeSlider transitionDelay={0} infinite={false} selected={this.props.location.slide}
          className="awesome-slider">
            <div className="slide">
              <span className="slide-title">understanding</span>
              {/* <div>
                situation
                task
                action
                result
                
                skills developed
              </div> */}
            </div>
            <div className="slide">
              <span className="slide-title">communicating</span>
            </div>
            <div className="slide">
              <span className="slide-title">designing</span>
            </div> 
          </AwesomeSlider>
        </div>
      </section>
    );
  }
}