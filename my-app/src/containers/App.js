import React, { Component } from 'react';
import './App.css';
import Person from '../components/Persons/Person/Person';

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
          {this.state.persons.map((person,index) =>{
            return <Person 
            click={()=>this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key= {index} 
            changed= {this.nameChangedHandler}/>
          })}
        </div>
      );
      style.backgroundColor = 'white';
      style.color = 'black';
    }
    return (
      <div className="App">
        {/* pass method switchNameHandler only as ref. not invoking */}
        <button style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
