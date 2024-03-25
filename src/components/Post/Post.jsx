import React from 'react'
import './Post.css'
const Post = ({data}) => {
  return (
   <div className="Post">
    <img src={data.img} alt='image'></img>

    <div className="postReact">
        <img src={data.liked?"https://cdn-icons-png.flaticon.com/512/4926/4926585.png": "https://cdn-icons-png.flaticon.com/512/126/126473.png"} alt='Like'/>
        <img src='https://cdn-icons-png.flaticon.com/512/6460/6460733.png'alt='comments'/>
        <img src='https://cdn-icons-png.flaticon.com/512/3925/3925158.png'alt='share'/>
    </div>
    <span style={{color: "var(--gray)" , fontSize: '12px'}}>{data.likes} Likes</span>
    <div className="detail">
        <span><b>{data.name} </b></span>
        <span>{data.desc}</span>
    </div>
   </div>
  )
}

export default Post
