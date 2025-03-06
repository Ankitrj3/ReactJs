import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'
const Login = () => {
  const [signState , setSignState] = useState("Sign In");
  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder="Your name" required /> : <></>}
          
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" className='checkbox'/>
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In"? <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign up Now</span></p>
          : <p>Already have a Account? <span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login
