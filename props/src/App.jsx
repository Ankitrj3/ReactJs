import Pass from './components/Pass'
import './App.css'
import FDcalculate from './components/FDcalculate'
import Destructs from './components/Destructs'; 

function App() {

  
  const obj = {
    name1: "Ujjwal",
    age: 22,
    gender: "UNDEFINED"
  };
  
  return (
    <>
      <Pass name={"Ujju"} age={22} gender={"female"} />
      <Pass name={"Ankit"} age={21} gender={"male"} />
      
      <Destructs pass={obj} />
      <FDcalculate />
    </>
  );
  
}

export default App
