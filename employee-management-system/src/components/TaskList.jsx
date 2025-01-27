import React from 'react'
import AcceptList from './TaskList/AcceptList'
import NewTask from './TaskList/NewTask'
import CompleteList from './TaskList/CompleteList'
import FailedList from './TaskList/FailedList'

const TaskList = ({data}) => {
  return (
    <div className='h-[50%] width-full overflow-x-auto flex items-center justify-start flex-nowrap gap-5  mt-10 p-3'>
      {data.tasks.map((e,id)=>{
          if(e.active){
               return <AcceptList key={id} data={e}/>
          }
          if(e.completed){
               return <CompleteList key={id} data={e}/>
          }
          if(e.newTask){
               return <NewTask key={id} data={e}/>
          }
          if(e.fail){
               return <FailedList key={id} data={e}/>
          }
      })}
    </div>
  )
}

export default TaskList
