import React from 'react'
import './Home.css'
import NavBar from '../../components/NavBar/NavBar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <NavBar/>
      <div className="hero">
      <img src={hero_banner} alt="banner-img" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Hakan is a young shopkeeper whose modern world gets turned upside down when he learns that he is connected to a secret ancient order that is tasked with protecting Istanbul from an immortal enemy.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Blockbuster Movies"}/>
        <TitleCard title={"Top Picks"}/>
        <TitleCard title={"Trending Now"}/>
        <TitleCard title={"Upcoming Releases"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
