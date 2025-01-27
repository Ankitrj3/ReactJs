import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'


const AllTask = () => {
  const Auth = useContext(AuthContext);

  return (
    <>
    <div className=' p-5 mt-5 rounded-lg overflow-auto'>
      <div className='bg-[#b14835] p-5 mb-4 flex justify-between items-center rounded-lg text-white font-bold'>
        <h2 className="bg-red-800 p-2">Task</h2>
        <h3 className='bg-red-800 p-2'>Employee-Task</h3>
      </div>
    </div>
    <div className='h-[48%] mb-2 overflow-auto'>
    {Auth.employees.map((e)=>{
      return <div key={e.id} className=' p-5 mt-5 rounded-lg overflow-auto'>
      <div className='bg-[#6eb5fc] p-5 mb-4 flex justify-between items-center rounded-lg'>
        <h2>{e.name}</h2>
        <h3>{e.totalTasks}</h3>
      </div>
    </div>
    })}
    </div>
    </>
  )
}

export default AllTask
