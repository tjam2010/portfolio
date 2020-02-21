import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Menu from './sections/menu';
import Landing from './sections/landing';
import Work from './sections/work';
import About from './sections/about';
import Resume from './sections/resume';
import Contact from './sections/contact';
import Footer from './sections/footer';
import './App.css'

class Container extends Component{
  render(){
    return <div>
        <Landing/>
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
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route path='/' component={Container} />
          {/* <Route path='/work' component={Container} />
          <Route path='/about' component={Container} />
          <Route path='/resume' component={Container} />
          <Route path='/contact' component={Container} /> */}
        </div>
      </BrowserRouter>
    );
  }

  
  // render() {
  //   return (
  //     <BrowserRouter>
  //       <div className="App">
  //         <Menu />
  //         <Switch>
  //           <Route path='/' component={Container} />
  //           {/* <Route path="/" strict exact component={Landing} />
  //           <Route path="/work" strict exact component={Work} />
  //           <Route path="/about" strict exact component={About} />
  //           <Route path="/resume" strict exact component={Resume} />
  //           <Route path="/contact" strict exact component={Contact} /> */}
  //         </Switch>
  //       {/* <Footer /> */}
  //       </div>
  //     </BrowserRouter>
  //   );
  // }
}

export default App;
