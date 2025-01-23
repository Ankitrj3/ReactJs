import React from 'react'

function Card(props) {
  return (
    <div>
        <h1>Card</h1>
        <p>Card content</p>
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <img src={props.photo} alt="profile photo" />
    </div>
  )
}

export default Card
