import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>  
        <p>Thi is working too</p>
        <Person />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
