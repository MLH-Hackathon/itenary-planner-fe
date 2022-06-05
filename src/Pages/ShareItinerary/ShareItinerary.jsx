import React, { useState } from 'react';
import './ShareItinerary.styles.scss';
import profile from '../../Assets/profile.jpg';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SubmitButton } from '../../Styles/Components/Button';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

export const ShareItinerary = () => {
   const [imageName, setImageName] = useState('Upload an image');
   const [location, setLocation] = useState('');
   const [tripDate, setTripDate] = useState('');
   const navigate = useNavigate();
   const [amount, setAmount] = useState('');
   const [description, setDescription] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
   };
   const handleLocation = (e) => {
      setLocation(e.target.value);
   };
   const handleDescription = (e) => {
      setDescription(e.target.value);
   };
   const handleAmount = (e) => {
      setAmount(e.target.value);
   };
   const handleDate = (date) => {
      setTripDate(date);
   };
   const handleUpLoad = (e) => {
      const fileName = e.target.value.replace(/^.*\\/, '');
      setImageName([...fileName]);
   };
   return (
      <div className="itineraryContainer">
         <img src={profile} alt="profile" className="profilePhoto" />
         <div className="subContainer">
            <h1 className="headline">Share your itinerary with the world</h1>

            <form action="" className="formContainer2" onSubmit={handleSubmit}>
               <div className="imageInputBox">
                  <label className="iconLabel" htmlFor="upload">
                     <Icon
                        icon="akar-icons:cloud-upload"
                        width="70"
                        style={{ margin: 'auto', cursor: 'pointer' }}
                     />
                  </label>
                  <span>{imageName}</span>
                  <input
                     type="file"
                     className="imgInput"
                     placeholder="upload image"
                     id="upload"
                     name="picture"
                     onChange={handleUpLoad}
                  ></input>
               </div>
               <div className="inputsContainter">
                  <div className="locationBox">
                     <label htmlFor="location" className="locationLabel">
                        Location Name
                     </label>
                     <input
                        type="text"
                        className="inputLocation"
                        value={location}
                        onChange={handleLocation}
                     />
                  </div>

                  <div className="dateAmountContainer">
                     <div className="date">
                        <label htmlFor="" className="label">
                           Date
                        </label>
                        <DatePicker
                           selected={tripDate}
                           className="datePicker"
                           placeholderText="Date"
                           onChange={handleDate}
                        />
                     </div>
                     <div className="amount">
                        <label className="label">Amount Spent Per Person</label>
                        <input
                           type="text"
                           placeholder="$25"
                           value={amount}
                           onChange={handleAmount}
                        />
                     </div>
                  </div>

                  <div className="descriptionBox">
                     <label className="label">Description</label>
                     <textarea
                        onChange={handleDescription}
                        value={description}
                        className="textArea"
                        placeholder="Tell us the best thing about this place"
                     ></textarea>
                  </div>

                  <div className="addIconContainer">
                     <label
                        className="addIcon"
                        // onClick={() => {
                        //    alert('hi hi');
                        // }}
                     >
                        +
                     </label>
                  </div>

                  <div className="btnContainer">
                     <div onClick={()=> navigate('/')} className="tripDetailsNextButton" > SAVE</div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};
