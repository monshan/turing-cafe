import React, { Component } from 'react';
import Card from '../ResyCard/ResyCard'
// class ResyContainer extends Component {
//   constructor() {
//     super();
//   }

//   render () {

//   }
// }

const ResyContainer = (props) => {
  const generateCard = props.resys;

  return (
    <div>
      { generateCard }
    </div>
  )
}

export default ResyContainer;