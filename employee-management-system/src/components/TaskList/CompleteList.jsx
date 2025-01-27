import React from 'react'

const CompleteList = () => {
  return (
    <div>
    <div className='flex-shrink-0 h-full w-[300px]  bg-red-400 rounded-2xl overflow-hidden'>
      <div className='flex justify-between items-center p-3'>
        <h3 className='bg-red-600 text-sm px-3 py-2 rounded-2xl text-white'>High</h3>
        <h4 className='text-sm'>25 Jan 2025</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold p-3'>Make Your Portfolio</h2>
      <p className='text-sm mt-3 p-3'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus libero aut quod quia cupiditate voluptas nobis. Sequi quas minus exercitationem.
      </p>
  
      <div className='flex justify-between mt-5 p-1'>
        <button className='bg-green-300 p-2 w-full rounded-3xl'>Complete</button>
      </div>
    </div>
  </div>
  )
}

export default CompleteList
