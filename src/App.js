import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Menu from './sections/menu';
import Landing from './sections/landing';
import Work from './sections/work';
import About from './sections/about';
import Resume from './sections/resume';
import Contact from './sections/contact';
import './App.css'

import landingPic from './landing.jpg'
import aboutPic from './tj_tedx.jpg'

var imageList

class Container extends Component{
  componentDidMount() {
    imageList = [landingPic, aboutPic]
    imageList.forEach((image) => {
        new Image().src = image.fileName;
    });
  }

  render(){
    return <div>
        <Landing location={this.props.location}/>
        <Work location={this.props.location}/>
        <About location={this.props.location}/>
        <Resume location={this.props.location}/>
        <Contact location={this.props.location}/>
    </div>;
  }
}

class App extends Component {
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // };
  
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // };

  // handleScroll = (event) =>  {
  //   console.log("heyo", event)
  // };

  render() {
    return (
      <HashRouter basename='/'>
        <div className="App">
          <Menu />
          <Route exact strict path='/' component={Container} />
          <Route strict path='/work' component={Container} />
          <Route exact strict path='/story' component={Container} />
          <Route path='/story/about' component={Container} />
          <Route strict path='/story/resume' component={Container} />
          <Route strict path='/story/contact' component={Container} />
        </div>
      </HashRouter>
    );
  }
}

export default App;

