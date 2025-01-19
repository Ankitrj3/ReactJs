import React from 'react'
import './register.scss'
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

        </div>
      </div>
    </div>
    </>
  )
}

export default Register
