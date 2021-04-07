import React, { Component } from 'react';

const Card = (props) => {
  return (
    <article>
      <h2>{ props.name }</h2>
      <p>{ props.date }</p>
      <p>{ props.time }</p>
      <p>Number of guests: { props.number }</p>
    </article>
  )
}

export default Card;