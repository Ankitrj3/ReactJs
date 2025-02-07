import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Axios = () => {
    const [resourceType,setResourcetype] = useState('');
    const [items,setItems] = useState([]);
    
        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => setItems(response.data))
            .catch(err => console.error("Error fetching data:", err));
        },[resourceType])
  return (
    <div>
    <h2>Fetching {resourceType}</h2>
      <button onClick={()=>setResourcetype('posts')}>Get Posts</button>
      <button onClick={()=>setResourcetype('comments')}>Get Comments</button>
      <button onClick={()=>setResourcetype('users')}>Get users</button>

      <ul>
        <li key={items.id}>{JSON.stringify(items)}</li>
      </ul>
    </div>
  )
}

export default Axios
