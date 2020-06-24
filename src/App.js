import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {

  state = { // managing component data from within the component
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Tom', age: 15 },
      { name: 'Joe', age: 32 }
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked');
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>  
        <p>Thi is working too</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age= {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age= {this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age= {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
