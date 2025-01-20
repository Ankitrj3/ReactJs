import React from 'react'
import './rightBar.scss'
export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <span>Dinesh</span>
            </div>
            <div className="buttons">
              <button >Follow</button>
              <button style={{background:"red"}}>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <span>Arpit Raj</span>
            </div>
            <div className="buttons">
              <button >Follow</button>
              <button style={{background:"red"}}>Dismiss</button>
            </div>
          </div>
        </div>

          <div className="item">
            <span>Latest Activities</span>
            <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <p>
              <span>Dinesh</span>
              changed his profile picture  
              </p>
              <span style={{fontSize:"18px"}}>1 min ago</span>   
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <p>
              <span>Vikas Singh</span>
              changed his cover picture 
              </p>
              <span style={{fontSize:"18px"}}>1 min ago</span>   
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <p>
              <span>Roggers</span>
              commented on your post 
              </p>
              <span style={{fontSize:"18px"}}>1 min ago</span>   
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://cdn-icons-png.flaticon.com/512/219/219988.png" alt="" className="userImg" />
              <p>
              <span>Xanderbilla</span>
              changed his profile picture  
              </p>
              <span style={{fontSize:"18px"}}>1 min ago</span>   
            </div>
          </div>
          </div>
      </div>
    </div>
  )
}
