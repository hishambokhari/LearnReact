import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';


const app = props => {
  const [ personsState, setPersonsState ] = useState({ // managing component data from within the component
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Tom', age: 15 },
      { name: 'Joe', age: 32 }
    ],
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    // console.log('was clicked');
    setPersonsState({
      persons: [
      { name: 'Mahak', age: 28 },
      { name: 'Hisham', age: 15 },
      { name: 'Sayem', age: 32 }
    ]
    })
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>  
        <p>Thi is working too</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age= {personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age= {personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age= {personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
}

export default app;


// state = { // managing component data from within the component
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Tom', age: 15 },
//     { name: 'Joe', age: 32 }
//   ]
// }

// switchNameHandler = () => {
//   // console.log('was clicked');
//   this.setState({persons: [
//     { name: 'Mahak', age: 28 },
//     { name: 'Hisham', age: 15 },
//     { name: 'Sayem', age: 32 }
//   ]
//   })