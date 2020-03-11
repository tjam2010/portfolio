import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

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
        <div className="wave">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="200"><path fill="rgb(3,75,241)" fill-opacity="1" d="M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,117.3C560,128,640,224,720,229.3C800,235,880,149,960,117.3C1040,85,1120,107,1200,144C1280,181,1360,235,1400,261.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="200"><path fill="rgb(3,75,241)" fill-opacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,154.7C672,149,768,171,864,186.7C960,203,1056,213,1152,192C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
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
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route exact strict path='/portfolio' component={Container} />
          <Route strict path='/work' component={Container} />
          <Route exact strict path='/story' component={Container} />
          <Route path='/story/about' component={Container} />
          <Route strict path='/story/resume' component={Container} />
          <Route strict path='/story/contact' component={Container} />
          {/* <Route exact path='/' component={Container} 
              onClick={()=>{
                  console.log("scrolling");
              }
            }
          />
          <Route path='/work' component={Container} 
              onClick={()=>{
                  document.getElementById("work").scrollIntoView();
                  }
              }
          />
          <Route path='/about' component={Container} 
              onEnter={function(){
                  document.getElementById("about").scrollIntoView();
                  }
              }
          />
          <Route path='/resume' component={Container} 
              onEnter={function(){
                  document.getElementById("about").scrollIntoView();
                  }
              }
          />
          <Route path='/contact' component={Container} 
              onEnter={function(){
                  document.getElementById("contact").scrollIntoView();
                  }
              }
          /> */}
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
