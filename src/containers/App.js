import React, { Component } from "react";
import "./App.css";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component { // stateful component - manages state
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
     // managing component data from within the component
    persons: [
      { id: "dkm3e", name: "Max", age: 28 },
      { id: "dell4", name: "Tom", age: 15 },
      { id: "dlskw", name: "Joe", age: 32 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

    this.setState({
      persons: [
        { name: "Nadia", age: 28 },
        { name: event.target.value, age: 15 },
        { name: "Sayem", age: 32 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;
    
    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>  
    }

    return (
      <div className={classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
