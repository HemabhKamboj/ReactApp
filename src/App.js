import React, { Component } from 'react';
import Component1 from './functional/component1'

class App extends Component {
 
  render() {
    
    return (
      <div className="App">
      React
      <Component1  name= "Hemabh" age= { 20}/>
      </div>

    );
  }
} 

export default App;

/* const Appinstance = new App()
console.log(Appinstance) */

