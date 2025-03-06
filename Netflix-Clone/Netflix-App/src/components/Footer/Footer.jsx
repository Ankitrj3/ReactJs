import React from 'react'
import './Footer.css'  
import youtube_icon from '../../assets/youtube_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png' 
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube Icon" />
        <img src={facebook_icon} alt="Facebook Icon" />
        <img src={instagram_icon} alt="Instagram Icon" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix, Inc. </p>
    </div>
  )
}

export default Footer
