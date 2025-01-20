import React from 'react'
import './leftBar.scss'
import GroupIcon from '@mui/icons-material/Group';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TimerIcon from '@mui/icons-material/Timer';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import MessageIcon from '@mui/icons-material/Message';
export default function LeftBar() {
  return (
    <div className='leftBar'>
      <div className='container'>
        <div className='menu'>
          <div className='user'>
          <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" />
          <span>Ankit Ranjan</span>
        </div>
        <div className="item">
          <Diversity3Icon/>
          <span>Friends</span>
        </div>
        <div className="item">
          <GroupIcon/>
          <span>Groups</span>
        </div>
        <div className="item">
          <LocalGroceryStoreIcon/>
          <span>Marketplace</span>
        </div>
        <div className="item">
          <PlayArrowIcon/>
          <span>Watch</span>
        </div>
        <div className="item">
          <TimerIcon/>
          <span>memories</span>
        </div>
        </div>
        <hr/>
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
          <CalendarMonthIcon/>
          <span>Events</span>
        </div>
        <div className="item">
          <SportsEsportsIcon/>
          <span>Gaming</span>
        </div>
        <div className="item">
          <CollectionsIcon/>  
          <span>Gallery</span>
        </div>
        <div className="item">
          <VideoCameraBackIcon/>
          <span>Videos</span>
        </div>
        <div className="item">
          <MessageIcon/>
          <span>Messages</span>
        </div>
        </div>
      </div>
    </div>
  )
}
