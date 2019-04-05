import React, { Component } from 'react';
import Component1 from './functional/component1'
import Container1 from './container/container'

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
      React
      <Container1 nickname = "Hannu" />
      <Component1  name= "Hemabh" age= { 20}/>
      </div>

    );
  }
} 

export default App;

/* const Appinstance = new App()
console.log(Appinstance) */

