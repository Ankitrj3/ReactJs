import React, { useState } from 'react'

const Header = () => {
  // const [username, setUsername] = useState(null);
  // if(!data){
  //   setUsername('Admin');
  // }else{
  //   setUsername(data.name);
  // }
  const logoutFun = ()=>{
    localStorage.setItem('loggedInUser','');
    window.location.reload();
  }

  return (
    
      <div className='flex items-end justify-between bg-slate-950 text-white rounded-lg p-5'>
        <h1 className='text-2xl font-semibold'>Hello<br/>
        <span className='text-3xl font-bold'>username!👋</span></h1> 
        <button onClick={logoutFun} className='bg-red-600 p-2 rounded-lg text-lg '>Logout</button>
      </div>
    
  )
}

export default Header
