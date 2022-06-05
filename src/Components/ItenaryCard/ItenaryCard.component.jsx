import { Card } from '@mui/material'
import React, { useState } from 'react'
import TripContainer from '../TripContainer/TripContainer.component'
import './ItenaryCard.styles.scss'
import ActivityContainer from '../ActivityContainer/ActivityContainer.component'
import Slider from 'react-slick'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const ItenaryCard = (props) => {

    // const[userInfo, setUserInfo] = useState();
    const {trip,name} = props.user;
    const {allUsers} = props;
    const activities = trip[0].activity;
    const [sliderRef, setSliderRef] = useState(null);

    const sliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
    }
    const [filteredData, setFilteredData] = useState("");

    // const filteredData = allUsers.trip.activity.filter((loc) => {
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
            {/* <button>
                 <FaChevronLeft onCLick={sliderRef?.slickPrev}/>
            </button>
            <button>
                <FaChevronRight onCLick={sliderRef?.slickNext}/>
            </button> */}
                <Slider ref={setSliderRef} {...sliderSettings}>
                    {activities.map(act => 
                        (
                        <ActivityContainer key ={act.id} activities= {act}/>
                        )
                    )}
                </Slider>


            
        </div>
     
    )
}

export default ItenaryCard


   {/* <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul> */}