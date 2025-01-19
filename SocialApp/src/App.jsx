import { useState } from "react";
import Login from "./pages/login/Login";
import "./App.scss";
// import './styles/global.scss';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login/>
    </>
  )
}

export default App
