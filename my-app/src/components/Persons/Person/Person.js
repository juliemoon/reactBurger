import React from 'react';
import './Person.css';
// access the click button from App.js by passing the switchNameHandler method as a prop
const person = ( props ) => {
  return (
  <div className="Person">
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    <p onClick={props.click}>{props.children}</p>
    <input type="text" onChange={props.changed} value={props.name}/>
   </div>
  )
};

export default person; 