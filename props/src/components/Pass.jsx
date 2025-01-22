import React from 'react'

export default function Pass(props) {
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h2>Your age {props.age}</h2>
      <h2>Your gender {props.gender}</h2>
    </div>
  )
}
