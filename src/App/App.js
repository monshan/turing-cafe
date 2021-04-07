import React, { Component } from 'react';
import ResyForm from '../ResyForm/ResyForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResyForm />
        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
  }
}

export default App;
