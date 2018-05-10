import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      today: []
    }
  }
  render() {
    return (
      <div className="App">
        <input placeholder='Add student to database'/>
        <button>Add</button>
        <br/><br/>
        <input placeholder='Remove student from database'/>
        <button>Remove</button>
        <section>
          
        </section>
      </div>
    );
  }
}

export default App;
