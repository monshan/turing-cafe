import React, { Component } from 'react';

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

  render () {
    return (
      <form>
        <input type="text"></input>
        <input type="date"></input>
        <input type="text"></input>
        <input type="number"></input>
      </form>
    )
  }
}

export default ResyForm;