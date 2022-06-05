import { Link } from '@mui/material'
import React, { useState, useContext} from 'react'
import background from '../../Assets/login-background.jpg'
import { SubmitButton } from '../../Styles/Components/Button'
import './SignUp.styles.scss'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserContext} from '../../Context/UserContext'; 

const SignUp = () => {
    const navigate = useNavigate();
    const [signUpResponse, setSignUpResponse] = useState();
    const [usernameExists, setUsernameExists] = useState();
    const { setAuthenticated,user,baseUrl,setCurrentUser} = useContext(UserContext);
    const [name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();
    const[cnfPassword,setCnfPassword] = useState();
    const [userData,setUserData] = useState({});
   
    
    const signUpHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json' },
            body: JSON.stringify({ 
                "name": name,
                "email": email,
                "password": password,
                "cnfPassword": cnfPassword
             })}
        fetch(baseUrl + '/signup',requestOptions)
        .then((response)=> response)
        .then((data)=>{
            console.log(JSON.stringify(data.status))
            if(data.status == 200){
                navigate('/');
                setAuthenticated(() => true);
            }
            
        })
    
    }

    
    return (
        <div className="loginContainer">
        <div className="formContainer">
            <div className="inputContainer">
                <h1>Have you Been to a trip recently?</h1>
                <div className="subText">Share your itenary with the world and connect with fellow travellers </div>
                <form>
                <label > Full Name:
                    <input placeholder= "John Smith" onChange={(e) =>{setName(e.target.value);}} type="text" name="name" />
                </label>
                <label > Email
                    <input placeholder= "example@gmail.com" onChange={(e) =>{setEmail(e.target.value);}} type="text" name="name" />
                </label>
                {usernameExists ? <p>Username Already Exists</p> : <></>}
                <label > Password
                    <input placeholder= "Enter Password" onChange={(e) =>{setPassword(e.target.value);}} type="password" name="name" />
                </label>
                <label > Confirm Password
                    <input placeholder= "Confirm Password" onChange={(e) =>{setCnfPassword(e.target.value);}} type="password" name="name" />
                </label>
                </form>
                <div className="signUpButton" onClick={signUpHandler}> SIGN UP </div>
            </div>
        </div>
        <div className="imageContainer">
            <img className="backgroundImage"src={background}></img>

        </div>

    </div>
    )
}

export default SignUp
