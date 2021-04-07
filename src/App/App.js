import React, { Component } from 'react';
import ResyForm from '../ResyForm/ResyForm';
import ResyContainer from '../ResyContainer/ResyContainer'
import getResys from '../api-calls'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      reservations: null
    }
  }

  componentDidMount () {
    getResys()
      .then(result => this.setState({ reservations: result }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResyForm />
        </div>
        <div className='resy-container'>
          <ResyContainer />
        </div>
      </div>
    )
  }
}

export default App;
