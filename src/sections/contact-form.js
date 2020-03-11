import React, { Component } from 'react';

  export default class ContactForm extends Component {
    constructor() {
      super();
      this.state = {
        message: '', name: '', email: '' 
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
      console.log("submit");

      const templateId = 'tj_portfolio';
    
      this.sendMessage(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
      this.resetForm();
    }
    
    sendMessage (templateId, variables) {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        console.log('Email successfully sent!')
        alert("Email sent- thanks for reaching out!");
      })
      .catch(err => {
        console.error('Error sending:', err);
        alert("An error ocurred- please try again later or use my direct e-mail: tjam2010@uw.edu");
      })
    }

    resetForm = () => { 
      this.setState({
        message: '', name: '', email: ''
      });
    }

    render() {
      return (
        <div id="form-spacer">
          <form id="form">
            <div className="input-wrap">
              <input placeholder="Name" type="text" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} required/>
            </div>
            <div className="input-wrap">
              <input placeholder="E-mail Address" type="email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} required/>
              <span className="validation-text">Please enter a valid email address.</span>
            </div>
            <div className="flex input-wrap">
              <textarea placeholder="Message" rows="5" onChange={e => this.setState({ message: e.target.value })} value={this.state.message} required></textarea>
            </div>
            <button id="contact-button" onClick={e => {
              if(this.state.message !== "" && this.state.name !== "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
                this.handleSubmit(e)
              }
            }}>Send</button>
          </form>
        </div>
        );
    }; 
  }