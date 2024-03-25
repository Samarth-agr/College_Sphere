import React from 'react'
import "./Events.css"
import {EventsData} from "../../Data/EventsData"
const Events = () => {
  return (
    <div className="Events">
    <h3>Upcomming Events</h3>
    {EventsData.map((event)=>{
        return(
            <div className="Event">
                <span>#{event.name}</span>
                <span>{event.link}</span>
            </div>
        )
    })}

 </div>
  )
}

export default Events
