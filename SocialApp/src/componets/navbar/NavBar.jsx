import React from 'react'
import './navBar.scss'
import RightBar from '../rightBar/RightBar'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GridViewIcon from '@mui/icons-material/GridView';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import { Link } from 'react-router-dom';
export default function NavBar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <Link to='/' style={{textDecoration:'none'}}>
        <span>SOCIALBits...</span>
        </Link>
        <HomeIcon/>
        <BedtimeIcon/>
        <GridViewIcon/>
        <div className='search'>
          <SearchIcon/>
          <input type='text' placeholder='Search for friends, posts or videos'/>
        </div>
      </div>
      
      <div className='right'>
        <PersonIcon/>
        <MailIcon/>
        <NotificationsIcon/>
        <div className='user'>
          <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
          <span>Ankit Ranjan</span>
        </div>
      </div>
    </div>
  )
}
