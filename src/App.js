import React from 'react';
import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Footer from './components/Footer.js'
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class App extends React.Component {

  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });
 
    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });
 
    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    console.log('hi')
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Intro onScroll={this.scrollToBottom}></Intro> 
        </header>
        <div className="App-about">
          <Element name='about'>
            <About></About>
          </Element>
        </div>
        <div className='App-Projects'>
          <Element name='projects'>
            <Projects />
          </Element>
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
