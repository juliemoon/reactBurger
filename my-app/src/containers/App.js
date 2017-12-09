import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { name: 'Julie', age: 32 },
      { name: 'Eden', age: 5 },
      { name: 'Temp', age: 10 }
    ],
    showPersons: false
  }


  // Change the state also
  nameChangedHandler = (event) => {
    this.setState([
      { name: 'Julie', age: 32 },
      { name: 'Eden', age: 5 },
      { name: event.target.value, age: 10 }
    ])
  }

  deletePersonHandler = (personIndex) =>{
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'black',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
        </div>
      );
      style.backgroundColor = 'white';
      style.color = 'black';
    }
    return (
      <div className="App">
        {/* pass method switchNameHandler only as ref. not invoking */}
        <Cockpit
        appTitle= {this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
