import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person.js';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'loghtgreen'};
    color: black
  }
`;

class App extends Component { // stateful component - manages state
  state = { // managing component data from within the component
    persons: [
      { id: 'dkm3e',name: 'Max', age: 28 },
      { id: 'dell4',name: 'Tom', age: 15 },
      { id: 'dlskw',name: 'Joe', age: 32 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

 deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
 }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons} )

    this.setState({
      persons: [
        { name: 'Nadia', age: 28 },
        { name: event.target.value, age: 15 },
        { name: 'Sayem', age: 32 }
      ]
    })
  }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
      const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'salmon',
          color: 'black'
        }
      };

      let persons =  null;

      if (this.state.showPersons) {
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
            })}
          </div> 
        );

        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'lightred',
        //   color: 'black'
        // };
      }

      const classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red'); // classes will be red
      }
      if (this.state.persons.length <= 1){
        classes.push('bold');// classes is red and bold
      }

    return (
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>  
        <p className={classes.join(' ')}>This is working too</p>
        <StyledButton alt={this.state.showPersons}onClick={this.togglePersonsHandler}>
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
      
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    }
  }


export default App;


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