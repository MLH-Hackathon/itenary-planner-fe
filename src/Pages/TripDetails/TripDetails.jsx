import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitButton } from '../../Styles/Components/Button';
import './TripDetails.styles.scss';
import 'react-datepicker/dist/react-datepicker.css';

const TripDetails = () => {
   const [startLocation, setStartLocation] = useState('');
   const [endLocation, setEndLocation] = useState('');
   const [numOfTravelers, setNumOfTravelers] = useState(1);
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');
   const [totalSpending, setTotalSpending] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handlestartLocation = (e) => {
      setStartLocation(e.target.value);
   };

   const handleEndLocation = (e) => {
      setEndLocation(e.target.value);
   };

   const handleNumOfTravelers = (e) => {
      setNumOfTravelers(e.target.value);
   };

   const handleStartDate = (date) => {
      setStartDate(date);
   };

   const handleEndDate = (date) => {
      setEndDate(date);
   };

   const handleTotalSpending = (e) => {
      console.log(e.target.value);
      setTotalSpending(e.target.value);
   };
   return (
      <div className="tripDetailsContainer">
         <img src="" alt="profile" />
         <h1>Enter Details of your Recent Trip..</h1>
         <form action="" className="formContainer" onSubmit={handleSubmit}>
            <label>Travel Location</label>
            <div className="flexContainer">
               <input
                  type="text"
                  placeholder="From"
                  className="userInput"
                  value={startLocation}
                  onChange={handlestartLocation}
               />
               <input
                  type="text"
                  placeholder="To"
                  className="userInput"
                  value={endLocation}
                  onChange={handleEndLocation}
               />
            </div>
            <div className="flexContainer">
               <label htmlFor="">Number of Travelers</label>
               <input
                  type="text"
                  value={numOfTravelers}
                  onChange={handleNumOfTravelers}
               />
            </div>

            <label htmlFor="">Date</label>
            <div className="flexContainer">
               <DatePicker
                  className="datePicker"
                  selected={startDate}
                  placeholderText="From"
                  minDate={new Date()}
                  onChange={handleStartDate}
               />
               <DatePicker
                  className="datePicker"
                  selected={endDate}
                  placeholderText="To"
                  minDate={startDate}
                  onChange={handleEndDate}
               />
            </div>
            <div className="flexContainer">
               <label htmlFor="">Total Spent</label>
               <input
                  type="text"
                  placeholder="$345"
                  value={totalSpending}
                  onChange={handleTotalSpending}
               />
            </div>
            <div className="btnContainer">
               <SubmitButton> Next</SubmitButton>
            </div>
         </form>
      </div>
   );
};

export default TripDetails;

// const SubmitButton = styled.button`
//    height: 40px;
//    color: #26313c;
//    border: none;
//    width: 75%;
//    border-radius: 40px;
//    background-color: #26313c;
//    color: white;
//    cursor: pointer;
//    margin: 20px auto auto auto;

//    &:hover {
//       background-color: #e6e6e6;
//       color: #26313c;
//    }
// `;
