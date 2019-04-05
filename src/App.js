import React, { Component } from 'react';
// import './App.css'
// import * as styles from './styles'



class App extends Component {
  state = {
    counter:0
  }

  increment = () => (
    this.setState({counter:5})
  )
  render() {
    
    return (
      <div className="App">

      <button onClick={()=> this.increment()}>Button </button>
      <div>
        Div 1 {this.state.counter}
      </div>
      <div>
        Div2
      </div>
      <div> 
        Div3 
      </div>
      </div>

    );
  }
} 

export default App;

/* const Appinstance = new App()
console.log(Appinstance) */

