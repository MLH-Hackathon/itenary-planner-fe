import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { SubmitButton } from '../../Styles/Components/Button';
import './TripDetails.styles.scss';
import 'react-datepicker/dist/react-datepicker.css';
import profile from '../../Assets/profile.jpg';

const TripDetails = () => {
   const [startLocation, setStartLocation] = useState('');
   const [endLocation, setEndLocation] = useState('');
   const [numOfTravelers, setNumOfTravelers] = useState(1);
   const [startDate, setStartDate] = useState('');
   const [endDate, setEndDate] = useState('');
   const [totalSpending, setTotalSpending] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      if (startDate.getTime() > endDate.getTime()) {
         alert('Check Dates');
      }
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

   useEffect(() => {}, []);
   return (
      <div className="tripDetailsContainer">
         <div className="imageBox">
            <img src={profile} alt="profile" />
         </div>
         <h1 className="headline">Enter Details of your Recent Trip..</h1>
         <form action="" className="formContainer" onSubmit={handleSubmit}>
            <label className="inputLabel">Travel Location</label>
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
            <div className="flexContainer-numTravelers">
               <label htmlFor="numOfTravelers" className="inputLabel">
                  Number of Travelers
               </label>
               <input
                  type="text"
                  value={numOfTravelers}
                  onChange={handleNumOfTravelers}
               />
            </div>
            <div className="dateContainer">
               <label htmlFor="date" className="inputLabel">
                  Dates
               </label>
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
                     id="endDate"
                     selected={endDate}
                     placeholderText="To"
                     minDate={startDate}
                     onChange={handleEndDate}
                  />
               </div>
            </div>
            <div className="flexContainer-spending">
               <label htmlFor="total spent" className="inputLabel">
                  Total Spent
               </label>
               <input
                  type="text"
                  placeholder="$345"
                  value={totalSpending}
                  onChange={handleTotalSpending}
                  className="totalSpending"
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
