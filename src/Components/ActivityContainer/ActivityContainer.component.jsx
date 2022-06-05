import React from 'react'
import './ActivityContainer.styles.scss'

const ActivityContainer = (props) => {
    const {activities} = props;
    return (
            <div className="sliderContainer">
                    <div className="pictureContainer">
                        <img src={activities.pictures}/>
                    </div>
                    <div className="activityInfo">
                        <div className="nameCost">
                            <div className="actName">{activities.name}</div>
                            <div className="actCost">{activities.cost}</div>
                        </div>
                        <div className="descAddress">
                            <div className="actDescription"> {activities.description}</div>
                            <div className="actAddress"> Address: {activities.address}</div>
                        </div>
                    </div>
            </div>  
    )
}

export default ActivityContainer
