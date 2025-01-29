import React from 'react'
import { useState } from 'react';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [date, setDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState(''); 
  const [taskList, setTaskList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setTaskList(prevTasks => [...prevTasks, { taskTitle, taskDescription, date, assignTo, category }]);

    const data = JSON.parse(localStorage.getItem('employees')) || [];

    data.forEach((elem) => {
      if (assignTo.trim() === elem.name.trim()) { // Trim spaces to avoid mismatch
        console.log('yehi hai woo');
      }
    });

    // setTaskTitle('');
    // setTaskDescription('');
    // setDate('');
    // setAssignTo('');
    // setCategory('');
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => { submitHandler(e) }} className='bg-slate-950 p-5 rounded-lg mt-10 text-white font-semibold'>
          <h3>Task Title</h3>
          <input type='text' 
            placeholder='Make Your UI Design'
            value={taskTitle}
            onChange={(e) => { setTaskTitle(e.target.value) }} 
            className='w-full p-2 rounded-lg mt-2 border-2' />

          <h3>Task Description</h3>
          <textarea type='text' 
            placeholder='Description'
            value={taskDescription} 
            onChange={(e) => { setTaskDescription(e.target.value) }}
            className='w-full h-36 p-2 rounded-lg mt-2 border-2' />

          <h3>Date</h3>
          <input type='date' 
            placeholder='2022-12-12'
            value={date}
            onChange={(e) => { setDate(e.target.value) }}
            className='w-full p-2 rounded-lg mt-2 border-2' />

          <h3>Assign To</h3>
          <input type='text' 
            placeholder='Ankit'
            value={assignTo}
            onChange={(e) => { setAssignTo(e.target.value) }}
            className='w-full p-2 rounded-lg mt-2 border-2' />

          <h3>Category</h3>
          <input type='text' 
            placeholder='High'
            value={category} 
            onChange={(e) => { setCategory(e.target.value) }}
            className='w-full p-2 rounded-lg mt-2 border-2' />

          <button className='bg-green-600 p-2 rounded-lg text-lg mt-5 border-2'>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTask;
