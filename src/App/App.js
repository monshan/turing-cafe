import React, { Component } from 'react';
import ResyForm from '../ResyForm/ResyForm';
import ResyContainer from '../ResyContainer/ResyContainer'
import getResys from '../api-calls'
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount () {
    getResys()
      .then(result => {
        console.log(result[0])
        return this.setState({ reservations: result })})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResyForm />
        </div>
        <div className='resy-container'>
          <ResyContainer reservations={ this.state.reservations }/>
        </div>
      </div>
    )
  }
}

export default App;
