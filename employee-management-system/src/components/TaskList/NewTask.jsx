import React from 'react'

const NewTask = () => {
  return (
    <div>
      <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-2xl'>
           <div className='flex justify-between items-center p-3 '>
            <h3 className='bg-red-600 text-sm px-3 py-2 rounded-2xl text-white'>High</h3>
            <h4 className='text-sm'>25 jan 2025</h4>
           </div>
           <h2 className='mt-5 text-xl font-semibold p-3'>Make Your Portfolio</h2>
           <p className='text-sm mt-3 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus libero aut quod quia cupiditate voluptas nobis. Sequi quas minus exercitationem.</p>
      
      <div className=' mt-5 p-2'>
        <button className='bg-green-300 px-2 py-1 rounded-3xl w-full'>Accept Task</button>
      </div>
      </div>
    </div>
  )
}

export default NewTask
