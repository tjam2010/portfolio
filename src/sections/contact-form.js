import React, { Component } from 'react';

  export default class ContactForm extends Component {
    constructor() {
      super();
      this.state = {
      
      }
    }
    render() {
      return (
        <div id="form-spacer">
          <form id="form">
            <div className="input-wrap">
              <input placeholder="Name" type="text" required/>
            </div>
            <div className="input-wrap">
              <input placeholder="E-mail Address" type="email" onChange={e => this.setState({ text: e.target.value })} value={this.state.text} required/>
              <span class="validation-text">Please enter a valid email address.</span>
            </div>
            <div class="flex input-wrap">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button id="contact-button">Send</button>
          </form>
        </div>
        );
    }; 
  }