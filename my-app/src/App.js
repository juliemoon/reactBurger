import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      { name: 'Julie', age:32 },
      { name: 'Eden', age:5 },
      { name: 'Temp', age:10 }
    ]
  }
  
  switchNameHandler = (newName) => {
    //  console.log('Was clicked!!');
    // this keyword is safe because of es6 syntax
    // Component object has setState method -- takes in object
    //on button click the state will be changed!!
    this.setState({
      persons:[
        { name: 'POOF CHANGED', age:32 },
        { name: 'POOF ALSO CHANGED', age: 5 },
        { name: newName, age: 10}
      ]
    }) 
  }

  // Change the state also
  nameChangedHandler = (event) => {
    this.setState([
      { name: 'Julie', age:32 },
      { name: 'Eden', age:5 },
      { name: event.target.value, age:10 }
    ])
  }
  
   
  render() {

    const style = {
      backgroundColor: 'white',
      font:'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
      {/* pass method switchNameHandler only as ref. not invoking */}
        <button style={style}
        onClick={this.switchNameHandler.bind(this, "NEWNAMMMEEE")}>Switch Name</button>
        <h2><Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.switchNameHandler.bind(this, 'PASSING BIND AS PROPS')}>I am short</Person></h2>
        <h2><Person name = {
          this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}>I am short as well</Person></h2>
          <h2><Person
           name = {this.state.persons[2].name}
           age = {this.state.persons[2].age}
           click = {this.switchNameHandler}
           changed = {this.nameChangedHandler}>
           </Person></h2>
      </div>
    );
  }
}

export default App;
