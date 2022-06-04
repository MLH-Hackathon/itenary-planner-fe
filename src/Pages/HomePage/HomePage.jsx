import {React, useState} from 'react'
import ItenaryCard from '../../Components/ItenaryCard/ItenaryCard.component';
// import TextField from "@mui/material/TextField";
import './HomePage.styles.scss';
const Homepage = () => {

    const [inputText, setInputText] = useState("");
    const [filteredData, setFilteredData] = useState("");
    

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
          
       <ItenaryCard input={inputText}/>
      </div>
        </div>
    )
}

export default Homepage
