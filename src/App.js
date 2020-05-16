import React from 'react';
import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import Current from './components/Current.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro></Intro> 
      </header>
      <div className="App-about">
        <About></About>
      </div>
    </div>
  );
}

export default App;
