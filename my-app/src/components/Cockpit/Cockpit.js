import React from 'react';

const cockpit = (props) => {
  return (
    <div>
    <h1>{props.appTitle}</h1>
    <button 
    onClick={props.clicked}>Switch Name</button>
    </div>
  );
}

export default cockpit;