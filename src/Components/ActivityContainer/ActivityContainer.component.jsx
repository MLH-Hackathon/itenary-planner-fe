import React from 'react'

const ActivityContainer = (props) => {
    const {activities} = props;
    return (
        <div>
                    <div className="sliderContainer">
                        <div>
                            <div className="pictureContainer">
                                <img src={activities.pictures}/>
                            </div>
                            <div className="activityInfo">
                                <div>
                                    <div className="actDescription">{activities.name}</div>
                                    <div className="actCost">{activities.cost}</div>
                                </div>
                                <div className="actDescription"> {activities.description}</div>
                                <div className="actAddress"> {activities.address}</div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ActivityContainer
