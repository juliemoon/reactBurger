import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Julie', age:32 },
      { name: 'Eden', age:5 }
    ]
  }
  
  switchNameHandler = () => {
    //  console.log('Was clicked!!');
    // this keyword is safe because of es6 syntax
    // Component object has setState method -- takes in object
    //on button click the state will be changed!!
    this.setState({
      persons:[
        { name: 'POOF CHANGED', age:32 },
        { name: 'POOF ALSO CHANGED', age: 5 }
      ]
    }) 
  }
  render() {
    return (
      <div className="App">
      {/* pass method switchNameHandler only as ref. not invoking */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <h2><Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I am short</Person></h2>
        <h2><Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I am short as well</Person></h2>
      </div>
    );
  }
}

export default App;
