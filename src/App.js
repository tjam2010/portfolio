import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Menu from './sections/menu';
import Landing from './sections/landing';
import Portfolio from './sections/portfolio';
import About from './sections/about';
import Resume from './sections/resume';
import Contact from './sections/contact';
import Footer from './sections/footer';
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route path="/" exact component={Landing} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
          <Portfolio />
          <About />
          <Resume />
          <Contact />
        {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
