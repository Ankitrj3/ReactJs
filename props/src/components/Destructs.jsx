import React from 'react'

export default function Destructs(props) {
    const { name1, age, gender } = props.pass;
    return (
      <div>
        <p>Name: {name1}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
      </div>
    );
}
