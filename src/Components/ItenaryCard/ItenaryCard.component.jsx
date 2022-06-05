import { Card } from '@mui/material'
import React, { useState } from 'react'
import TripContainer from '../TripContainer/TripContainer.component'
import './ItenaryCard.styles.scss'
import ActivityContainer from '../ActivityContainer/ActivityContainer.component'

const ItenaryCard = (props) => {
    // const[userInfo, setUserInfo] = useState();
    const {trip,name} = props.user;
    const activities = trip[0].activity;
    // const filteredData = data.filter((loc) => {
    //     if (props.input === '') {
    //         return loc;
    //     }
    //     else {
    //         return loc.text.toLowerCase().includes(props.input)
    //     }
    // })

    return (
        <div className="ItenaryCardContainer">
            <TripContainer trip = {trip[0]} name={name}/>
            {activities.map(act => 
                 (
                <ActivityContainer activities= {act}/>
                )
            )}
        </div>
     
    )
}

export default ItenaryCard


   {/* <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul> */}