import React from 'react';
import classes from './Person.css';


const person = (props) => { //es6 equiv for functions - this is a stateless component - has no internal state management
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};


export default person;