import React from 'react'

function TaskListNumber({data}) {
  return (
    <>
    <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='px-10 py-9 rounded-2xl w-[45%] bg-red-400 p-5 text-white'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.newTask}</h1>
        <h2 className='text-2xl font-bold'>New Task</h2>
      </div>
      <div className='px-10 py-9 rounded-2xl w-[45%] bg-blue-400 p-5 text-black'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.completed}</h1>
        <h2 className='text-2xl font-bold'>Completed Task</h2>
      </div>
      <div className='px-10 py-9 rounded-2xl w-[45%] bg-green-400 p-5 text-white'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.active}</h1>
        <h2 className='text-2xl font-bold'>Active Task</h2>
      </div>
      <div className='px-10 py-9 rounded-2xl w-[45%] bg-yellow-400 p-5 text-black'>
        <h1 className='text-3xl font-semibold'>{data.taskCount.failed}</h1>
        <h2 className='text-2xl font-bold'>Failed Task</h2>
      </div>
      
    </div>
    
    </>
  )
}

export default TaskListNumber
