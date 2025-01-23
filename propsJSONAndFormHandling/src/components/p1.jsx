import React from 'react'
import P2 from './p2'

const p1 = (props) => {
  return (
    <>
      This is example 1 {props.name}
      <P2 user = {props.name}/>
    </>
  )
}

export default p1
