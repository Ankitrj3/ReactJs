import { useState } from 'react'
import './App.css'
import FetchApi from './components/FetchApi'
import Axios from './components/Axios'
import Postaxios from './components/Postaxios'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <FetchApi/> */}
     {/* <Axios/> */}
     <Postaxios/>
    </>
  )
}

export default App
