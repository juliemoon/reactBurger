import React, {Component} from 'react';
import './Person.css';
// access the click button from App.js by passing the switchNameHandler method as a prop

class Person extends Component{
  render(){
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p onClick={this.props.click}>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
       </div>
      )
  }
}


export default Person; 