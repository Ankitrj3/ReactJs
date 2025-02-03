import { useState } from 'react'
import './App.css'
import Help from './Component/Help'
import { AdminGreeting,UserGreeting } from './Component/Help'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello ankit</h1>
      <Help />
      <UserGreeting/>
      <AdminGreeting/>  
    </>
  )
}
function HelperUtility(){
  return <h1>HelperUtility</h1>
}

export { HelperUtility } // named export
export default App
