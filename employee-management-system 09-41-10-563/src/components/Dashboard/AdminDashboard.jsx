import React from 'react'
import Header from '../Header'
import CreateTask from '../CreateTask'
import AllTask from '../AllTask'

const AdminDashboard = (props) => {
  return (
    <div className='h-screen w-screen p-10 bg-[#1C1C1C] overflow-auto'>
      <Header changeUser = {props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
