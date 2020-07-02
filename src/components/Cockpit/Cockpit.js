import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect')
    setTimeout(() => {
      alert('Saved data to cloud!)')
    }, 1000);
    return () => {
      console.log('[Cockpit.js] clean up work in useEffect')
    };
  }, []);


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
      <h1>{props.title}</h1>
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