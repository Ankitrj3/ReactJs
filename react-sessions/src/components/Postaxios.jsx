import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Postaxios = () => {
    const [data, setData] = useState({title: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts',data);
        console.log(response);
    }catch(e){
        console.log(e);
    }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='Enter title'
            value={data.title}
            onChange={(e)=>setData({...data,title: e.target.value})}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Postaxios
