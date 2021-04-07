import React, { Component } from 'react';
import '../ResyForm/ResyForm.css'

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      name: null,
      date: null,
      time: null,
      number: null
    }
  }

  adjustState = (event) => {
    if (event.target.name === 'number') {
      return this.setState({ [event.target.name]: parseInt(event.target.value) })
    }
    return this.setState({ [event.target.name]: event.target.value })
  }

  clearInputs = () => {
    this.setState({
      id: null,
      name: null,
      date: null,
      time: null,
      number: null
    });
  }

  sendUp = (event) => {
    event.preventDefault();
    const newResy = {
      id: 10,
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.addResy(newResy);
    this.clearInputs();
  }

  render () {
    return (
      <form>
        <input type="text" placeholder="Name" name="name" id="name" onChange={ this.adjustState }></input>
        <input type="text" placeholder="Date (mm/dd)" name="date" id="date" onChange={ this.adjustState }></input>
        <input type="text" placeholder="Time" name="time" id="time" onChange={ this.adjustState }></input>
        <input type="number" placeholder="Number of Guests" min="1" name="number" id="number" onChange={ this.adjustState }></input>
        <button onClick={ (e) => this.sendUp(e) }>Make a Reservation</button>
      </form>
    )
  }
}

export default ResyForm;