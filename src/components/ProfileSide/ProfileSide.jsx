import React from 'react';
import './ProfileSide.css';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';
const profileSide = () => {
  return (
    <div>
      <div className="ProfileSide">
        <LogoSearch/>
        <ProfileCard/>
        <FollowersCard/>
      </div>
    </div>
  )
}

export default profileSide