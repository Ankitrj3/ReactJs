import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
const Player = () => {
  const {id} = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  });
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdhNDk1ZDVhNGE2NTE1MDIyNTM5ZmZkMTAxNGYxNSIsIm5iZiI6MTc0MTI4OTYwNy40MjksInN1YiI6IjY3YzlmODg3NTQ3ODNjYWFhM2FmYjUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KguRMTonUREt1M4TFEch4-nEsJmamnBlgpBgtJywZrs'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[]);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} 
      allowFullScreen title="Video Player"></iframe>
       <div className="playerinfo">
          <p>{apiData.published_at.slice(0,10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
       </div>
    </div>
  )
}

export default Player
