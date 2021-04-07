import React, { Component } from 'react';
import '../ResyCard/ResyCard.css'

const Card = (props) => {
  return (
    <article className="resy-card">
      <h2>{ props.name }</h2>
      <p>{ props.date }</p>
      <p>{ props.time } pm</p>
      <p>Number of guests: { props.number }</p>
    </article>
  )
}

export default Card;