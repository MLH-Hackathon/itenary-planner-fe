import {React, useState} from 'react'
import ItenaryCard from '../../Components/ItenaryCard/ItenaryCard.component';
// import TextField from "@mui/material/TextField";
import './HomePage.styles.scss';
const Homepage = () => {

    const [inputText, setInputText] = useState("");
    const [listOfLocations,setListofLocations] = useState("");
    const [listOfUsers,setListOfUsers] = useState("");
    const userInfo = [{
        "id": 34,
        "name": "John Smith ",
        "trip": [{
            "id": 2,
            "location": "Bali, Indonesia",
            "fromDate": "05/26/22",
            "toDate": "05/30/22", 
            "numberOfPeople": "4",
            "totalCost": "$232",
            "activity": [{
                "id": 12,
                "name": "Kayaking",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
                "pictures": "https://itinerary-planner-global.s3.amazonaws.com/tengyart-kSvpTrfhaiU-unsplash.jpg", 
                "cost": "$34",
                "address": "3134 Normandale St, Richardson",
                },
                {
                    "id": 10,
                    "name": "Boating",
                    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
                    "pictures": "https://itinerary-planner-global.s3.amazonaws.com/tengyart-kSvpTrfhaiU-unsplash.jpg", 
                    "cost": "$34",
                    "address": "3134 Normandale St, Richardson",
                    },
                    {
                        "id": 9,
                        "name": "Paragliding",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
                        "pictures": "https://itinerary-planner-global.s3.amazonaws.com/tengyart-kSvpTrfhaiU-unsplash.jpg", 
                        "cost": "$34",
                        "address": "3134 Normandale St, Richardson",
                        }
            ]
        }]},
        {"id": 32,
        "name": "Bikram Singh ",
        "trip": [{
            "id": 2,
            "location": "Paris, France",
            "fromDate": "05/26/22",
            "toDate": "05/30/22", 
            "numberOfPeople": "2",
            "totalCost": "$4,023",
            "activity": [{
                "id": 12,
                "name": "Adam's Croissants",
                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
                "pictures": "https://itinerary-planner-global.s3.amazonaws.com/tengyart-kSvpTrfhaiU-unsplash.jpg", 
                "cost": "$23",
                "address": "3134 Normandale St, Richardson",
                },
            ]
        }]
        
    }]

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    }

    // to send all the location for filtering in search bar
    //  locations = (userInfo) =>{
    //     userInfo.map(user => {
    //         setListOfUsers.push(user.id);
    //         user.trip.map(tr =>{
    //             setListofLocations.push(tr.location);
                
    //         })
    //     })
    // }
    return (
        <div>
                <div className="heading1"> Itineraries around the <div className="heading2"> WORLD</div></div>
                <div className="subText">Checkout where people are travelling to..</div>

                <div className="search">
                <label>
                    Search By Location
                    <input
                        type="text"
                        className="searchInput"
                        placeholder="Search By Location"
                        name="searchInput" 
                        onChange = {inputHandler}
                    />
                </label>
             </div>  

            <div className="cardsContainer">
                {userInfo.map((user) => 
                    (
                        <ItenaryCard key={user.id} user ={user} allUsers={userInfo}/>
                    )
                )}
            </div>
        </div>  
    )
}

export default Homepage
