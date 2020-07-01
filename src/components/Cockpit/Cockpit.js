import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = '';

    if((props).showPersons) {
      btnClass = classes.Red;
    }

  
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes will be red
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes is red and bold
    }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p 
      className={assignedClasses.join(" ")}>
        This is working too
      </p>
      <button 
      className={btnClass} 
      onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default cockpit;