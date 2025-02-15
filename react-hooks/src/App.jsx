import { useState } from 'react'
import './App.css'
import UseContextExample from './hooks/UseContextExample';
import UseMemoExample from './hooks/UseMemoExample';

function App() {
  const [selectedHook , setSelectedHook] = useState('useContext');

  const renderHook = () =>{
    switch(selectedHook){
      case 'useContext':
        return <UseContextExample/>
      case 'useMemo':
        return <UseMemoExample/>
      default:
        break;
    }
  }
  return (
   
    <div>
      <h2>Learn About Resct Hooks</h2>
      <label>Select Your Hooks</label>
      <select 
       id='hook-selector'
       value={selectedHook}
       onChange={(e)=> setSelectedHook(e.target.value)}
       >
        <option value='useState'>useState</option>
        <option value='useEffect'>useEffect</option>
        <option value='useContext'>useContext</option>
        <option value='useReducer'>useReducer</option>
        <option value='useRef'>useRef</option>
        <option value='useMemo'>useMemo</option>
        <option value='useCallback'>useCallback</option>
       </select>
       <hr/>
       {renderHook()}
    </div>
  
  )
}

export default App
