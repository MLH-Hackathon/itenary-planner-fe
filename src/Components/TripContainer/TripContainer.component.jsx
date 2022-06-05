import React from 'react'

const TripContainer = (props) => {

    const {trip, name} = props;
    return (
        <div>
            <div className="tripInfoContainer">
                    <div className="nameAndLocationContainer">
                        <div className="fullName">{name}</div>
                        <div className="tripLocation">{trip.location}</div>
                    </div>
                    <div className="tripDetailsContainer">
                        <div className="tripDetails">{trip.numberOfPeople} People</div>
                        <div className="tripDetails">{trip.fromDate} - {trip.toDate}</div>
                        <div className="tripTotalCost">{trip.totalCost} </div>
                        <div className="spent">spent</div>
                    </div>
                </div>
        </div>
    )
}

export default TripContainer