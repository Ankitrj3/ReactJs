import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [api, apiData] = useState([]);

  const fetchData = async () => {
    
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
      apiData(response.data);
    
  };

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
    {/* npm i axios for integreating api */}
      
      <ul>
        {api.map((item, index)=>(
          <li key={index}>
          {item.title}, 
          {item.author}
          <img className='image' src={item.download_url}/></li>
        ))}
      </ul>
    </>
  );
}

export default App;
