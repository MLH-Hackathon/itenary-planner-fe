import React from 'react'
import background from '../../Assets/login-background.jpg'
import { SubmitButton } from '../../Styles/Components/Button'
import './LogIn.styles.scss'

const LogIn = () => {
    return (
        <div className="loginContainer">
            <div className="formContainer">
                <div className="inputContainer">
                    <h1>Log Into our Global Itenary</h1>
                    <div className="subText">Share your itenary with the world and connect with fellow travellers </div>
                    <form>
                    <label > Email
                        <input placeholder= "example@gmail.com" type="text" name="name" />
                    </label>
                    <label > Password
                        <input placeholder= "Enter Password" type="text" name="name" />
                    </label>

                    </form>
                    <SubmitButton> LOG IN</SubmitButton>
                </div>
            </div>
            <div className="imageContainer">
                <img className="backgroundImage"src={background}></img>

        </div>
        </div>
    )
}

export default LogIn
