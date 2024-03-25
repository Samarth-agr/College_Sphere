import React, { useState } from 'react'
import './InfoCard.css'
import ProfileModal from '../ProfileModal/ProfileModal'
const InfoCard = () => {

    const [modalOpened , setModalOpened] = useState(false)
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>Your Info</h4>
            <div>
            <img src='https://th.bing.com/th/id/OIP.10IUWK0xNI90xla6csaUGAHaHx?rs=1&pid=ImgDetMain' height='20px' width='20px'  onClick={()=>setModalOpened(true)}></img>
            <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>
                In Relationship
            </span>
        </div>
        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>
                Indore
            </span>
        </div>
        <div className="info">
            <span>
                <b>Branch </b>
            </span>
            <span>
                CSE
            </span>
        </div>

        <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default InfoCard
