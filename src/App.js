import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
          <Switch>
            <Route path="/" strict exact component={Landing} />
            <Route path="/portfolio" strict exact component={Portfolio} />
            <Route path="/about" strict exact component={About} />
            <Route path="/resume" strict exact component={Resume} />
            <Route path="/contact" strict exact component={Contact} />
          </Switch>
        {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
