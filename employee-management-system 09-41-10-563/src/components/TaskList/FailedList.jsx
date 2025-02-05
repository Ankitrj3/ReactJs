import React from 'react'

const FailedList = () => {
  return (
    <div>
    <div className='flex-shrink-0 h-full w-[300px]  bg-green-400 rounded-2xl overflow-hidden'>
      <div className='flex justify-between items-center p-3'>
        <h3 className='bg-red-600 text-sm px-3 py-2 rounded-2xl text-white'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-xl font-semibold p-3'>{data.title}</h2>
      <p className='text-sm mt-3 p-3'>
      {data.description}
      </p>
  
      <div className='flex justify-between mt-5 p-1'>
        <button className='bg-red-500 p-2 w-full rounded-3xl'>Failed</button>
      </div>
    </div>
  </div>
  )
}

export default FailedList
