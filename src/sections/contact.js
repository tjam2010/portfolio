import React, { Component } from 'react';
import ContactForm from './contact-form';

export default class Contact extends Component {

  render() {
    return (
      <section className="page" id="contact">
        <div className="content" id="contact-content">
          <div className="title" id="contact-caption">contact</div>
          <div id="form-wrapper">
            <ContactForm/>
            {/* <input/> */}
            {/* <input/> */}
          </div>
        </div>
        <div id="footer"></div>
      </section>
    );
  }
}