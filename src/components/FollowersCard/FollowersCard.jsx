import React from 'react'
import './FollowersCard.css'
export default function FollowersCard() {
  return (
    <div className="followersCard">
        <h3>Following</h3>
        <div className="followers">
            <div className="image">
            <img src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain' className='followerimage'></img>
            <div className="name">
                <span>Samarth</span>
                <span>@Samarth.agr._</span>
            </div>
            </div>
            <div className="button">
                <button className='button fc-button'>Follow</button>
            </div>
        </div>
    </div>
  )
}
