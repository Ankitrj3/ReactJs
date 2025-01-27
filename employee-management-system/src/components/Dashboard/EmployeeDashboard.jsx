import React from 'react'
import Header from '../Header'
import TaskListNumber from '../TaskListNumber'
import TaskList from '../TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header data ={data}/>
      <TaskListNumber data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
