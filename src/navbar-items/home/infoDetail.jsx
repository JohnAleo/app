import React from 'react'
import bed from "../../assets/steven-ungermann-aRT5UCf2MYY-unsplash.png"
const InfoDetail = () => {
  return (
    <div style={{display:'flex'}}>
        <div><p>Our rooms are transport you into an environment made for
            leisure. Take  your mind off the day-to-day of home life    and find a 
            private paradise for yourself.
        </p>
        </div>
        <div>
            <img src={bed} alt="bed" />
        </div>
    </div>
  )
}

export default InfoDetail