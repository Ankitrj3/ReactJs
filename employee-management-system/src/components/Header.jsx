import React from 'react'

const Header = () => {
  return (
    
      <div className='flex items-end justify-between bg-slate-950 text-white rounded-lg p-5'>
        <h1 className='text-2xl font-semibold'>Hello<br/>
        <span className='text-3xl font-bold'>Ankit!👋</span></h1> 
        <button className='bg-red-600 p-2 rounded-lg text-lg '>Logout</button>
      </div>
    
  )
}

export default Header
