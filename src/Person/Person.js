import React from 'react';
import './Person.css';

// props is the attributes you add to your component

const person = (props) => { //es6 equiv for functions - this is a stateless component - has no internal state management
 
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};


export default person;