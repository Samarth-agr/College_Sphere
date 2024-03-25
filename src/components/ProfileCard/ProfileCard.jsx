import React from 'react'
import './ProfileCard.css'
const ProfileCard = () => {

  const ProfilePage = true;
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src='https://th.bing.com/th/id/R.defafa80ad3ff60c33ca399bbc2e3b8f?rik=HMq8ewvmb1d29Q&riu=http%3a%2f%2fmytechshout.com%2fwp-content%2fuploads%2f2014%2f10%2fFacebook-Cover-Photos-8.jpg&ehk=P2S6Pq8M%2bz8NN8Y7B597wi8NsR7pMbFe0mW0NpemwXw%3d&risl=&pid=ImgRaw&r=0' height="200rem"></img>
                <img src='https://th.bing.com/th/id/OIP.audMX4ZGbvT2_GJTx2c4GgHaHw?rs=1&pid=ImgDetMain'></img>
      </div>
      <div className="ProfileName">
        <span>Profile Name</span>
        <span>Bio</span>
      </div>
      <div className="followStatus">
        <hr/>
        <div>
            <div className="follow">
                <span>13</span>
                <span>Following</span>
                </div>
                <div className="vl"><hr/></div>
            <div className="follow">
                <span>2</span>
                <span>Followers</span>
                </div>

                {ProfilePage && (
                  <>
                  <div className="vl">

                  </div>
                  <div className="follow">
                    <span>3</span>
                    <span>Posts</span>
                  </div>
                  </>
                )}
        </div>
        <hr/>
      </div>
      {ProfilePage?"" : <span>Profile</span>}
        </div>
    )
}

export default ProfileCard
