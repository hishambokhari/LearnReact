import React, { Component } from 'react';
import './App.css';
import classes from './App.css';
import Persons from '../components/Persons/Persons'




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
     

      let persons =  null;
      let btnClass = '';

      if (this.state.showPersons) {
        persons = (
          <div>
           <Persons 
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler}/>
          </div> 
        );

        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor: 'salmon',
        //   color: 'black'
        // };
        btnClass = classes.Red;
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
        <button className={btnClass} onClick={this.togglePersonsHandler}>
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