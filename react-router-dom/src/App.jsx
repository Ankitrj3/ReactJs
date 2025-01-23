import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Product from './pages/product'
import NavBar from './components/NavBar'

function App() {
  return (
  //  wrap all the route in routes
  <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      </>

  )
}

export default App;
