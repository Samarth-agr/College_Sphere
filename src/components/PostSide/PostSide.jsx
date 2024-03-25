import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'
const postSide = () => {
  return (
    <div>
      <div className="PostSide">
        <PostShare/>
        <Posts/>
      </div>
    </div>
  )
}

export default postSide
