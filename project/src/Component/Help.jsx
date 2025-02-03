import React from 'react'
import { HelperUtility } from '../App'
const Help = () => {
  return (
    <>
        <HelperUtility />
    </>
  )
}
const UserGreeting = ()=>{
    return(
    <h1>User Greeting</h1>
    )
}
const AdminGreeting = ()=>{
    return (<h1>Admin Greeting</h1>)
}

export {AdminGreeting,UserGreeting};
// export {userGreeting};
export default Help
