import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [resourceType,setResourcetype] = useState('');
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(err => console.error("Error fetching data:", err));
    },[resourceType])

  return (
    <div>
    <h2>Fetching {resourceType}</h2>
      <button onClick={()=>setResourcetype('posts')}>Get Posts</button>
      <button onClick={()=>setResourcetype('comments')}>Get Comments</button>
      <button onClick={()=>setResourcetype('users')}>Get users</button>

      <ul>
        {items.map(item=>(
            <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export default FetchApi
