import React from 'react';
import './ShareItinerary.styles.scss';
import profile from '../../Assets/profile.jpg';
import { Icon } from '@iconify/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ShareItinerary = () => {
   return (
      <div className="itineraryContainer">
         <img src={profile} alt="profile" className="profilePhoto" />
         <div className="subContainer">
            <h1 className="headline">Share your itinerary with the world</h1>

            <form action="" className="formContainer2">
               <div className="imageInputBox">
                  <label className="iconLabel" onClick={() => alert('upload')}>
                     <Icon
                        icon="akar-icons:cloud-upload"
                        width="70"
                        style={{ margin: 'auto', cursor: 'pointer' }}
                     />
                  </label>
                  <span>Upload an image</span>
                  <input
                     type="file"
                     className="imgInput"
                     placeholder="upload image"
                  ></input>
               </div>
               <div className="inputsContainter">
                  <div className="locationBox">
                     <label htmlFor="location" className="locationLabel">
                        Location Name
                     </label>
                     <input type="text" className="inputLocation" />
                  </div>

                  <div className="dateAmountContainer">
                     <div className="date">
                        <label htmlFor="" className="label">
                           Date
                        </label>
                        <DatePicker
                           className="datePicker"
                           placeholderText="Date"
                           minDate={new Date()}
                        />
                     </div>
                     <div className="amount">
                        <label className="label">Amount Spent Per Person</label>
                        <input type="text" placeholder="$25" />
                     </div>
                  </div>

                  <div className="descriptionBox">
                     <label className="label">Description</label>
                     <textarea
                        className="textArea"
                        placeholder="Tell us the best thing about this place"
                     ></textarea>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};
