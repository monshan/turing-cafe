import React from 'react';
import Card from '../ResyCard/ResyCard'
import '../ResyContainer/ResyContainer.css'

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
    <div className="resy-container">
      { generateCard }
    </div>
  )
}

export default ResyContainer;