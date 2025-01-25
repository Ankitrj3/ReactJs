import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div>
        <form className='bg-slate-950 p-5 rounded-lg mt-10 text-white font-semibold'>
            <h3>Task Title</h3>
            <input type='text' placeholder='Make Your UI Design' className='w-full p-2 rounded-lg mt-2 border-2'/>
            <h3>Task Description</h3>
            <textarea type='text' placeholder='Description' className='w-full h-36 p-2 rounded-lg mt-2 border-2'/>
            <h3>Date</h3>
            <input type='date' className='w-full p-2 rounded-lg mt-2 border-2'/>
            <h3>Assign To</h3>
            <input type='text' placeholder='Ankit' className='w-full p-2 rounded-lg mt-2 border-2'/>
            <h3>Category</h3>
            <input type='text' placeholder='High' className='w-full p-2 rounded-lg mt-2 border-2'/>
            <button className='bg-green-600 p-2 rounded-lg text-lg mt-5 border-2'>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
