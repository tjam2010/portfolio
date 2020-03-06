import React, { Component } from 'react';
import ContactForm from './contact-form';

export default class Contact extends Component {

  render() {
    return (
      <section className="page" id="contact">
        <div className="content" id="contact-content">
          <div className="title" id="contact-caption">contact</div>
          <div id="form-wrapper">
            <div id="address"><div id="address-name">TJ Gascho</div><a className="page-link" href="mailto:tjam2010@uw.edu">tjam2010@uw.edu</a></div>
            <ContactForm/>
          </div>
        </div>
        <div id="footer"></div>
      </section>
    );
  }
}