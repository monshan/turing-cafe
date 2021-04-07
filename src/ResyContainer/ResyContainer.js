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
  const generateCard = props.reservations.map(resy => {
    return <Card 
      name={resy.name}
      date={resy.date}
      time={resy.time}
      number={resy.number}
      />
  });

  return (
    <div>
      { generateCard }
    </div>
  )
}

export default ResyContainer;