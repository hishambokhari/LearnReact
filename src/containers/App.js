import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Person from '../components/Persons/Person/Person.js';




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
      // const style = {
      //   backgroundColor: 'green',
      //   color: 'white',
      //   font: 'inherit',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer',
      //   ':hover': {
      //     backgroundColor: 'salmon',
      //     color: 'black'
      //   }
      // };

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

      const assignedClasses = [];
      if(this.state.persons.length <= 2){
        assignedClasses.push(classes.red); // classes will be red
      }
      if (this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);// classes is red and bold
      }

    return (
      
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>  
        <p className={assignedClasses.join(' ')}>This is working too</p>
        <button className={classes.Button} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
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