import React, { Component } from 'react';
import '../ResyForm/ResyForm.css'

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      size: ''
    }
  }

  adjustState = (property, newValue) => {
    return this.setState({ [property]: newValue })
  }

  render () {
    return (
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Date (mm/dd)"></input>
        <input type="text" placeholder="Time"></input>
        <input type="number" placeholder="Number of Guests" min="1"></input>
        <button onClick={ this.props.addResy }>Make a Reservation</button>
      </form>
    )
  }
}

export default ResyForm;