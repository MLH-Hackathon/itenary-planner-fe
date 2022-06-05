import {React, useState} from 'react'
import ItenaryCard from '../../Components/ItenaryCard/ItenaryCard.component';
// import TextField from "@mui/material/TextField";
import './HomePage.styles.scss';
const Homepage = () => {

    const [inputText, setInputText] = useState("");
    const [filteredData, setFilteredData] = useState("");
    const userInfo = [{
        "id": 34,
        "name": "John Smith ",
        "trip": [{
            "id": 2,
            "location": "Bali",
            "fromDate": "",
            "toDate": "", 
            "numberOfPeople": "4",
            "totalCost": "$232",
            "activity": [{
                "id": 12,
                "name": "Kayaking",
                "description": "dasfadsf adsfasdf ",
                "pictures": "", 
                "cost": "$34",
                "address": "3134 Normandale St, Richardson",
                },
                {
                    "id": 13,
                    "name": "Rafting",
                    "description": "",
                    "pictures": "", 
                    "cost": "",
                    "address": "3134 Normandale St, Richardson"   
                },
                {
                    "id": 14,
                    "name": "Hiking",
                    "description": "",
                    "pictures": "", 
                    "cost": "",
                    "address": "3134 Normandale St, Richardson"   
                },]
        }]
        
    }]

  const inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    }

    return (
        <div>
                <div className="heading1"> Itenaries around the <div className="heading2"> WORLD</div></div>
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

            {userInfo.map((user) => 
                (
                    <ItenaryCard key={user.id} user ={user}/>
                )
            )}
          
         </div>  
        </div>  
    )
}

export default Homepage
