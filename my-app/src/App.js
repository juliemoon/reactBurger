import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> testing </h1> 
        <h2><Person name="Julie" age="32">I am short</Person></h2>
      </div>
    );
  }
}

export default App;
