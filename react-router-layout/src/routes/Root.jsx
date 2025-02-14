import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-between items-center">
          <ul className="flex gap-6 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-gray-300">Contact</Link>
            </li>
            <li>
              <Link to="product" className="hover:text-gray-300">Product</Link>
            </li>
          </ul>
        </nav>
      </header>
      
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} Ankit Webpage
      </footer>
    </div>
  )
}

export default Root
