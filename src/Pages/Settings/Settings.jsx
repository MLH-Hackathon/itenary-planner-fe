import React, { useState } from 'react';
import './Settings.styles.scss';
import { SubmitButton } from '../../Styles/Components/Button';
import profile from '../../Assets/profile.jpg';

const Settings = () => {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
   };

   const handleFullName = (e) => {
      setFullName(e.target.value);
   };

   const handleEmail = (e) => {
      setEmail(e.target.value);
   };
   return (
      <div className="settingContainer">
         <h1 className="headline">Settings</h1>
         <form
            action=""
            className="settingsFormContainer"
            onSubmit={handleSubmit}
         >
            <div className="imageInputBox">
               <label className="iconLabel" htmlFor="upload">
                  <img src={profile} alt="profile" className="imgProfile" />
               </label>
               <input
                  type="file"
                  className="imgInput"
                  placeholder="upload image"
                  id="upload"
                  name="picture"
               ></input>
               <span className="changeImage">Change Image</span>
            </div>
            <div className="nameBox">
               <label className="labelName">Name</label>
               <input
                  type="text"
                  onChange={handleFullName}
                  value={fullName}
                  placeholder="Enter Full Name"
               />
            </div>
            <div className="emailBox">
               <label className="labelEmail">Email</label>
               <input
                  type="email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="example@gmail.com"
               />
            </div>
            <div className="btnContainer">
               <SubmitButton>RESET PASSWORD</SubmitButton>
            </div>
         </form>
      </div>
   );
};

export default Settings;
