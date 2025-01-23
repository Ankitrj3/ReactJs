import React from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
       <div className="nav-bar">
          <Link to="/" ><button>Home</button></Link>
          <Link to="/about" ><button>About</button></Link>
          <Link to="/product" ><button>Product</button></Link>
        </div>
  )
}

export default NavBar
