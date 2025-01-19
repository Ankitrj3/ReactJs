import React from 'react'
import './login.scss'
function Login() {
  return (
    <div className="login">
      <div className='card'>
        <div className='left'>
            <h1 className=''>Hello World.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti consectetur sit dolor consequuntur temporibus provident 
                odio vitae eos illo quasi libero tempore unde, 
                incidunt necessitatibus perspiciatis qui nemo, tempora beatae!</p>
            <span>Don't you have an account?</span>
            <button>Register</button>
        </div>
       <div className='right'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>
            </form>
       </div>
      </div>
    </div>
  )
}

export default Login
