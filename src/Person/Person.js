import React from 'react';

// props is the attributes you add to your component

const person = (props) => { //es6 equiv for functions - this is a stateless component - has no internal state management
 
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
};


export default person;