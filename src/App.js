import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'

import Menu from './sections/menu';
import Landing from './sections/landing';
import Work from './sections/work';
import About from './sections/about';
import Resume from './sections/resume';
import Contact from './sections/contact';
import './App.css'

class Container extends Component{
  render(){
    return <div>
        <Landing/>
        <div className="wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="150"><path fill="#2E6AF3" fillOpacity="1" d="M0,192L48,165.3C96,139,192,85,288,85.3C384,85,480,139,576,181.3C672,224,768,256,864,245.3C960,235,1056,181,1152,133.3C1248,85,1344,43,1392,21.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
        <Work/>
        <About/>
        <Resume/>
        <Contact/>
    </div>;
  }
}

class App extends Component {
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
