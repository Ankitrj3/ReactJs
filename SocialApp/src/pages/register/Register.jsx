import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <>
    <div className='register'>
      <div className='card'>
        <div className='left'>
            <h1>Register</h1>
            <form>
                <input type='text' placeholder='Usename' />
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Password' />
                <input type='text' placeholder='Name' />
                <button>Register</button>
            </form>
        </div>
        <div className='right'>
           <h1>SOCIAL</h1>
            <h1>Bits...</h1>

            <span>Already have an account</span>
            <Link to = "/login">
            <button>Login</button>
            </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register
