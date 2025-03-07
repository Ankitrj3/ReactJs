import React, { useEffect, useRef, useState } from 'react';
import './TitleCard.css';
import card_img from '../../assets/cards/Cards_data'

const TitleCard = ({ title ,category}) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTdhNDk1ZDVhNGE2NTE1MDIyNTM5ZmZkMTAxNGYxNSIsIm5iZiI6MTc0MTI4OTYwNy40MjksInN1YiI6IjY3YzlmODg3NTQ3ODNjYWFhM2FmYjUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KguRMTonUREt1M4TFEch4-nEsJmamnBlgpBgtJywZrs'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => {
        console.log("API Response:", res);
        setApiData(res.results);
      })
      .catch(err => console.error("API Error:", err));

    const currentRef = cardsRef.current;
    if (currentRef) {
      currentRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.backdrop_path 
              ? `https://image.tmdb.org/t/p/w500${card.backdrop_path}`
              : card_img} 
              alt={card.original_title} 
            />
            <p>{card.original_title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
