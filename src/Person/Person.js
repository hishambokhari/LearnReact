import React from 'react';

// props is the attributes you add to your component

const person = (props) => { //es6 equiv for functions
 
  return <p>I'm {props.name} and I am {props.age} years old!</p>
};


export default person;